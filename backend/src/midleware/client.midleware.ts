import {NextFunction, Request, Response} from "express";

// @ts-ignore
import userRepository, {ReqQuery} from "../repository/user.repository.ts";

// @ts-ignore
import Client, {IClient} from "../database/Client.ts";

interface IRequest extends Request<{}, {}, {}, ReqQuery> {
  clients: IClient[]
}

const clientMidleware = {
  ordering: async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const {order} = req.query
      if (order && order.includes('-')) {
        req.clients = await Client.find().sort({
          [order.slice(1)]: 'desc'
        })

      } else {
        req.clients = await Client.find().sort({
          [order]: 'asc'
        })
      }

      next()
    } catch (err) {
      next(err)
    }
  },
  filtering: async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const data = await userRepository(req.query)
      for (let key in req.query) {
        if (Object.keys(JSON.parse(JSON.stringify(data.clients))[0]).includes(key)) {
          req.clients = await Client.find({[key]: {$regex: req.query[key], $options: 'i'}})
        }
      }
      next()
    } catch (err) {
      next(err)
    }
  }
}

export default clientMidleware