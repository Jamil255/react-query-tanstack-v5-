import express from 'express'
import connectDb from './config/db.js'
import routes from './routes/todo.js'
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDb()
app.use(routes)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
