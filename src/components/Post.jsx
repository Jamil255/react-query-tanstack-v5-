import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getTodoFun } from '../helpers/todo'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../config'
const Post = () => {
  const [title, setTitle] = useState('')
  const queryClient = useQueryClient()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todo'],
    queryFn: getTodoFun,
  })
  console.log(data?.data?.data)
  const mutation = useMutation({
    mutationFn: async (newTitle) => {
      const obj = {
        title: newTitle,
      }
      try {
        const data = await axios.post(`${BASE_URL}/todo`, obj)
        console.log(data)
      } catch (error) {
        console.log(error.message)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] })
    },
    onError: () => {
      console.log(error.message)
    },
  })
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <button
          onClick={() => {
            mutation.mutate(title)
          }}
        >
          create
        </button>
      </div>

      <div>
        {data?.data?.data?.map((item) => {
          return <li key={item._id}>{item?.title}</li>
        })}
      </div>
    </>
  )
}

export default Post
