// import normalizeMany from "../presenter/user.presenter";
// @ts-ignore
import clientService from "../service/client.service.ts";
// @ts-ignore
import userRepository, {ReqQuery} from "../repository/user.repository.ts";

import {Request, Response, NextFunction} from 'express'
// @ts-ignore
import configs from "../config";
// @ts-ignore
import client, {IClient} from "../database/Client.ts";

interface IRequest extends Request {
  clients: IClient[]
}


const clientController = {
  getAllClients: async (req: Request<{}, {}, {}, ReqQuery> | IRequest, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore
      const {clients} = req
      // req.headers.authorization = configs.accessToken
      // if (req.headers.authorization) {
        res.status(200).json(clients)
      // }
      // const client = normalizeMany(data.clients)


      // res.status(400).json('Please Auth')
    } catch (err) {
      next(err)
    }
  },
  createClients: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await clientService.create(req.body)
      res.json('Client created')
    } catch (err) {
      next(err)
    }
  }
}

export default clientController