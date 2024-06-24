import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPost } from '../api/controllers/api'

const Post = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPost,
  })
  console.log(data, isLoading, isError)
  return (
    <>
      <div className='container'>
        {data?.data?.map((post) => {
          return (
            <div className='post'>
              {post?.title}

              {post?.views}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Post
