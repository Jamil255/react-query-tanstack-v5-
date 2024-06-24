import express from 'express'
import { createTodo } from '../controllers/todoController.js'
const routes = express.Router()
routes.post('/api/todo', createTodo)
routes.post('/api', createTodo)
export default routes
