import {NextFunction, Request, Response} from "express";
// @ts-ignore
import userRepository, {ReqQuery} from "../repository/user.repository.ts";
// @ts-ignore
import Client, {IClient} from "../database/Client.ts";
// @ts-ignore
import configs from "../config";

interface IRequest extends Request {
  clients: IClient[]
}

const clientMidleware = {
  ordering: async (req: Request<{}, {}, {}, ReqQuery> | IRequest, res: Response, next: NextFunction) => {
    try {
      const {order} = req.query
      if (order && order.includes('-')) {
        // @ts-ignore
        req.clients = await Client.find().sort({
          [order.slice(1)]: 'desc'
        })

      } else {
        // @ts-ignore
        req.clients = await Client.find().sort({
          [order]: 'asc'
        })
      }

      next()
    } catch (err) {
      next(err)
    }
  },
  filtering: async (req: Request<{}, {}, {}, ReqQuery> | IRequest, res: Response, next: NextFunction) => {
    try {
      const data = await userRepository(req.query)
      for(let key in req.query){
        if(Object.keys(JSON.parse(JSON.stringify(data.clients))[0]).includes(key)){
          //@ts-ignore
          req.clients = await Client.find({[key]: req.query[key]})
        }
      }
      next()
    } catch (err) {
      next(err)
    }
  }
}

export default clientMidleware