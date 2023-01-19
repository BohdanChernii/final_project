
// @ts-ignore
import Client, {IClient} from '../database/Client.ts'

const clientService = {
  findByParams: async (filter = {}) => {
    return Client.find(filter)
  },
  create: async (clientInfo: IClient) => {
    return Client.create(clientInfo)
  }
}
export default clientService