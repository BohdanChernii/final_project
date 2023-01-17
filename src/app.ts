import express from 'express'
import {Request, Response, NextFunction} from 'express'

import mongoose from 'mongoose'

// @ts-ignore
import {router as clientRouter} from './router/user.router.ts'

interface Error {
  status: number
  name: string
  message: string
  stack?: string
}

mongoose.set('strictQuery', true);

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/clients', clientRouter)

app.get('/', (req: Request, res, next) => {
  res.json('Welcome to platform')
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message || 'Unknown error',
    status: err.status || 5000
  })
})

const connection = async (): Promise<void> => {
  let dbCon: boolean = false
  if (!dbCon) {
    try {
      await mongoose.connect('mongodb+srv://root:root@finalproject.zljlt0a.mongodb.net/?retryWrites=true&w=majority')
      dbCon = true
      console.log('Database available!!!')
    } catch (err) {
      console.log('Database unavailable wait 3 seconds');
      await new Promise(resolve => setTimeout(resolve, 3000))
    }
  }

}

const start = async () => {
  try {
    await connection()
    await app.listen(5000, '0.0.0.0')
    console.log('Server listening')
  } catch (err) {
    console.log(err);
  }
}

start()