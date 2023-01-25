import {Request, Response, NextFunction} from 'express'
// @ts-ignore
import authService from "../service/auth.service.ts";
// @ts-ignore
import User, {IUser} from "../database/User.ts"
// @ts-ignore
import OAuth from "../database/OAuth.ts";
// @ts-ignore
import configs from "../config";

// @ts-ignore
import authValidation from '../validator/auth.validator.ts'
// @ts-ignore
import ApiError from "../error/ApiError.ts";

interface IRequest extends Request {
  user?: IUser
}

const authController = {
  login: async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const {user, body} = req

      await authService.comparePasswords(authService.hashPassword(user.password), body.password)

      const tokenPair = authService.generateAccessToken({id: user._id})
      await OAuth.create({...tokenPair, _user_id: user._id})
      configs.accessToken = tokenPair.accessToken

      // const validate = authValidation.loginValidator.validate(req.body.email)
      // if (validate.error) {
      //   throw new ApiError(validate.error.message, 400)
      // }
      res.json({
        ...tokenPair
      })

    } catch (err) {
      next(err)
    }
  }
}
export default authController