import axios from 'axios'
import { BASE_URL } from '../config'
export const getTodoFun = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/gettodo`)
    return response
  } catch (error) {
    console.log(error.message)
  }
}
