import Joi from 'joi'
// @ts-ignore
import authRegEx from '../config/regex.ts'
const authValidation = {
  loginValidator:Joi.object({
    // password: Joi.string().regex(PASSWORD).trim().default('').required(),
    email:Joi.string().regex(authRegEx.EMAIL).trim().default('').required()
  })
}
export default authValidation