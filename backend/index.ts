import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})