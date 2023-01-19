import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ApiError from "../error/ApiError";
import configs from "../config";
import tokenTypeEnum from "../enum/token.enum";


const authService = {

  hashPassword: (password: string) => bcrypt.hash(password, 10),

  comparePasswords: async (hashPassword: string, password: string): Promise<void> => {
    const isPasswordSame = bcrypt.compare(password, hashPassword)
    if (!isPasswordSame) {
      throw new ApiError('Wrong email or password!!', 400)
    }
  },

  generateAccessToken: (dataToSign = {}) => {
    const accessToken = jwt.sign(dataToSign, configs.ACCESS_SECRET, {expiresIn: '1d'})
    const refreshToken = jwt.sign(dataToSign, configs.REFRESH_SECRET, {expiresIn: '7d'})
    return {
      accessToken,
      refreshToken
    }
  },

  checkToken: (token: '', tokenType = tokenTypeEnum.accesstoken) => {
    try {
      let secret = ''
      if (tokenType === tokenTypeEnum.accesstoken) secret = configs.ACCESS_SECRET
      else if (tokenType === tokenTypeEnum.refreshtoken) secret = configs.REFRESH_SECRET
      jwt.verify(token, secret)
    } catch (err) {
      throw new ApiError('Token not valid', 401)
    }
  }

}
export default authService