// import normalizeMany from "../presenter/user.presenter";
// @ts-ignore
import clientService from "../service/client.service.ts";
// @ts-ignore
import userRepository, {ReqQuery} from "../repository/user.repository.ts";

import {Request, Response, NextFunction} from 'express'
// @ts-ignore
import configs from "../config/index.ts";

const clientController = {
  getAllClients: async (req: Request<{}, {}, {}, ReqQuery>, res: Response, next: NextFunction) => {
    try {
      if (configs.accessToken) {
        configs.accessToken = ''
        const data = await userRepository(req.query)
        // const client = normalizeMany(data.clients)
        res.status(200).json(data)
      }
      res.status(400).json('Please Auth')
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