// @ts-ignore
import userService from "../service/user.service.ts";
import {Request, Response, NextFunction} from "express";

const userController = {
  getAllUsers: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await userService.findByParams()
      res.json(users).status(200)
    } catch (err) {
      next(err)
    }
  },

  //
  // createUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     await userService.create(req.body)
  //     res.json('User created').status(201)
  //   } catch (err) {
  //     next(err)
  //   }
  // }
}

export default userController