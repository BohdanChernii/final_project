import {Request, Response, NextFunction} from 'express'
// @ts-ignore
import User, {IUser} from "../database/User.ts";
// @ts-ignore
import ApiError from "../error/ApiError.ts";

interface IRequest extends Request {
  user?: IUser
}

const userMidleware = {
  getUserDynamically: (fieldName: string, from = "body", dbField = fieldName) => async (
    req: IRequest, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore
      const fieldToSearch = req[from][dbField]
      const user = await User.findOne({[dbField]: fieldToSearch})

      if (!user) {
        throw new ApiError('User not found', 404)
      }

      req.user = user
      next()
    } catch (err) {
      next(err)
    }
  }
}

export default userMidleware