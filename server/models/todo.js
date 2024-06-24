import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      require: [true, 'require'],
    },
  },
  {
    timestamps: true,
  }
)

const todoModel = mongoose.model('todo', todoSchema)

export default todoModel
