// @ts-ignore
import User from '../database/Client.ts'
type ReqQuery = {
  limit: number
  page: number
}


const userRepository = async (query: ReqQuery) => {
  const {limit = 10, page = 1,} = query
  let findObj = {}
  const [clients, count] = await Promise.all([
    await User.find(findObj).limit(limit).skip((+page - 1) * limit),
    await User.count(findObj)

  ])
  return {
    clients,
    page: +page,
    count
  }
}

export type {ReqQuery}
export default userRepository