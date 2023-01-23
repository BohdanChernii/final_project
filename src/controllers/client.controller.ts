// import normalizeMany from "../presenter/user.presenter";
// @ts-ignore
import clientService from "../service/client.service.ts";
// @ts-ignore
import userRepository, {ReqQuery} from "../repository/user.repository.ts";

import {Request, Response, NextFunction} from 'express'
// @ts-ignore
import configs from "../config/index.ts";
// @ts-ignore
import client, {IClient} from "../database/Client.ts";


const clientController = {
  getAllClients: async (req: Request<{}, {}, {}, ReqQuery>, res: Response, next: NextFunction) => {
    try {
      req.headers.authorization = configs.accessToken
      if(req.headers.authorization){
      const data = await userRepository(req.query)
      const filters = req.query
      if (!Object.keys(filters).includes('page' || 'limit')) {
        const filteredClients: IClient[] = JSON.parse(JSON.stringify(data.clients)).filter((client: IClient, index: number, arr: IClient[]) => {
          let isValid: boolean = true

          for (let key in filters) {
            if (filters[key] === '') {
              res.json(arr.sort((a, b) => {
                return (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0
              }).reverse())
            }
            console.log(key, client[key], filters[key],)
            isValid = isValid && client[key].includes(filters[key]);
          }

          return isValid
        })
        res.json(filteredClients)

      }
        res.status(200).json(data)
      }
      // const client = normalizeMany(data.clients)


      res.status(400).json('Please Auth')
    } catch (err) {
      next(err)
    }
  },
  createClients: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await clientService.create(req.body)
      res.json('Client created')
    } catch (err) {
      next(err)
    }
  }
}

export default clientController