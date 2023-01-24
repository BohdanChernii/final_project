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
      if (req.query.order) {
        const data = await clientMidleware.CLIENTS(req, res, next)
        // @ts-ignore
        req.clients = data.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
          return (a[req.query.order] < b[req.query.order]) ? -1 : (a[req.query.order] > b[req.query.order]) ? 1 : 0
        })
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
        let isValid: boolean = true

        for (let key in filters) {
          if (Object.keys(client).includes(key)) {
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