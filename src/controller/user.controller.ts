// import normalizeMany from "../presenter/user.presenter";
// @ts-ignore
import userService from "../service/user.service.ts";
// @ts-ignore
import userRepository, {ReqQuery} from "../repository/user.repository.ts";

import {Request, Response, NextFunction} from 'express'

const userController = {
  getAllClients: async (req: Request<{}, {}, {}, ReqQuery>, res: Response, next: NextFunction) => {
    try {
      const data = await userRepository(req.query)
      // const client = normalizeMany(data.clients)
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  },
  createClients: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await userService.create(req.body)
    } catch (err) {
      next(err)
    }
  }
}
export default userController