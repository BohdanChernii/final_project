import fs from 'fs'
import express, {Application} from 'express'
import {Request, Response, NextFunction} from 'express'
// @ts-ignore
import swaggerUI from 'swagger-ui-express'
import mongoose from 'mongoose'
// @ts-ignore
import {router as clientRouter} from './routers/user.router.ts'
// @ts-ignore
const swaggerJson = fs.readFileSync('src/swagger.json', 'utf-8')


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


app.use('/clients', clientRouter)
// @ts-ignore
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));

// app.UseSwaggerUI(c => { c.SwaggerEndpoint("./swagger.json", "MyServiceAPI"); });

app.get('/', (req: Request, res: Response, next: NextFunction) => {
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
      await mongoose.connect('mongodb+srv://admin:amin@finalproject.5rkpwyv.mongodb.net/?retryWrites=true&w=majority')
      // await mongoose.connect('mongodb://localhost:27017/clients')
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