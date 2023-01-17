// @ts-ignore
import User from '../database/User.ts'
// import {RequestHandler} from "express";
// type Params = {};
// type ResBody = {};
// type ReqBody = {};
type ReqQuery = {
  limit: number
  page: number
}


  const userRepository = async (query:ReqQuery ) => {
    const {limit, page} = query
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