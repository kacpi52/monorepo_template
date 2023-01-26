import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const { SERVER_PORT = 3012 } = process.env

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(SERVER_PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${SERVER_PORT}`
  )
})
