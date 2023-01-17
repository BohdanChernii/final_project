
// @ts-ignore
import Client, {IClient} from '../database/User.ts'

const userService = {
  findByParams: async (filter = {}) => {
    return Client.find(filter)
  },
  create: async (clientInfo: IClient) => {
    return Client.create(clientInfo)
  }
}
export default userService