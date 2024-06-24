import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Connect to Mongoose ${conn.connection.host}`)
  } catch (error) {
    console.log(error.message)
  }
}
export default connectDb
