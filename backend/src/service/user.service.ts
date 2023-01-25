// @ts-ignore
import User, {IUser} from '../database/User.ts'

const userService = {

  findByParams: async (filter = {}) => {
    return User.find(filter)
  },

  findOneById: async (userId:string) => {
    return User.findById(userId)
  },

  create: async (userInfo: IUser) => {
    return User.create(userInfo)
  }

}

export default userService