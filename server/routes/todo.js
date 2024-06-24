import express from 'express'
import { createTodo, getTodo } from '../controllers/todoController.js'
const routes = express.Router()
routes.post('/api/todo', createTodo)
routes.get('/api/gettodo', getTodo)
export default routes
