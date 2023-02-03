import express, {Application} from 'express'
import {Request, Response, NextFunction} from 'express'

import swaggerUI from 'swagger-ui-express'
// @ts-ignore
import {swaggerDocument} from "./swagger.ts";
import mongoose from 'mongoose'
// @ts-ignore
import {router as clientRouter} from './routers/client.router.ts'
// @ts-ignore
import {router as authRouter} from './routers/auth.router.ts'
// @ts-ignore
import {router as userRouter} from './routers/user.router.ts'



interface Error {
  status: number
  name: string
  message: string
  stack?: string
}

mongoose.set('strictQuery', true);

const app: Application = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/users', userRouter)

app.use('/clients', clientRouter)

app.use('/auth', authRouter)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// app.UseSwaggerUI(c => { c.SwaggerEndpoint("./swagger.json", "MyServiceAPI"); });


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
      // await mongoose.connect('mongodb+srv://admin:amin@finalproject.5rkpwyv.mongodb.net/?retryWrites=true&w=majority')
      // locally
      await mongoose.connect('mongodb://localhost:27017/clients')
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
    console.log('listening  http://localhost:5000' )
  } catch (err) {
    console.log(err);
  }
}

start()