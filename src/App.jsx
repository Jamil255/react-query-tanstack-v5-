import { useQuery } from '@tanstack/react-query'
import { fetchPost } from './api/controllers/api'

function App() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPost,
  })
  console.log(data, isLoading, isFetching)
  return <></>
}

export default App
