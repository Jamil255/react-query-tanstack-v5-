import todoModel from '../models/todo.js'

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body
    if (!title) {
      return res.status(404).json({ status: '404 Not Found' })
    }
    const data = await todoModel.create({
      title,
    })
    console.log(data)
    res.status(200).json({
      status: '200',
      data,
    })
  } catch (error) {
    console.log(error.message)
  }
}
export const getTodo = async (req, res) => {
  try {
    const data = await todoModel.find({})
    res.json({
      data,
    })
  } catch (error) {
    console.log(error.message)
  }
}
