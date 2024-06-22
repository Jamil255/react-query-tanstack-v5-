import axios from 'axios'

const fetchPost = async () => {
  const response = await axios.get('http://localhost:3000/posts')
  return response
}

export { fetchPost } 
