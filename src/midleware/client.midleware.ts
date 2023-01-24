import {NextFunction, Request, Response} from "express";
// @ts-ignore
import userRepository, {ReqQuery} from "../repository/user.repository.ts";
// @ts-ignore
import {IClient} from "../database/Client.ts";
// @ts-ignore
import configs from "../config/index.ts";

interface IRequest extends Request {
  clients: IClient[]
}

const clientMidleware = {
  CLIENTS: async (req: Request<{}, {}, {}, ReqQuery> | IRequest, res: Response, next: NextFunction) => {
    try {
      const data = await userRepository(req.query)
      return JSON.parse(JSON.stringify(data.clients))
    } catch (err) {
      next(err)
    }
  },

  ordering: async (req: Request<{}, {}, {}, ReqQuery> | IRequest, res: Response, next: NextFunction) => {
    try {
      const data = await clientMidleware.CLIENTS(req, res, next)
      let sorted
      if (req.query.order) {
        console.log(req.query.order);

        sorted = data.sort((a:any, b:any) => a[req.query.order] !== b[req.query.order] ? a[req.query.order] > b[req.query.order] ? -1 : 1 : 0);
        // @ts-ignore
        req.clients = sorted
      }


      if (req.query.order.includes('-')) {
        console.log(req.query.order);

        sorted = data.sort((a:any, b:any) => a[req.query.order] !== b[req.query.order] ? a[req.query.order] < b[req.query.order] ? -1 : 1 : 0);
        // @ts-ignore
        req.clients = sorted
      }

      next()
    } catch (err) {
      next(err)
    }
  },
  filtering: async (req: Request<{}, {}, {}, ReqQuery> | IRequest, res: Response, next: NextFunction) => {
    try {
      const data = await clientMidleware.CLIENTS(req, res, next)
      const filters = req.query

      const filtered = data.filter((client: IClient) => {
        const clientKeys: string[] = Object.keys(client)
        console.log(clientKeys);
        let isValid: boolean = true

        for (let key in filters) {
          // @ts-ignore
          if (clientKeys.includes(key) && key !== 'page' && key !== 'order') {
            console.log(key, client[key], filters[key],)
            isValid = isValid && client[key].includes(filters[key]);
          }

        }
        return isValid
      })

      // @ts-ignore
      req.clients = filtered
      next()
    } catch (err) {
      next(err)
    }
  }
}

export default clientMidleware