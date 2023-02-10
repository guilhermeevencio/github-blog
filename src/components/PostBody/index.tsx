import { useContext, useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { AppContext, PostData } from '../../contexts/AppContext'
import { PostBodyContainer } from './style'
import style from './style.module.css'

interface PostBodyProps {
  number: number
}

export function PostBody({ number }: PostBodyProps) {
  const [post, setPost] = useState({} as PostData)
  const { postData } = useContext(AppContext)

  useEffect(() => {
    if (postData.length !== 0) {
      const currentPost = postData.find((post) => post.number === number)
      if (currentPost) {
        setPost(currentPost)
      }
    }
  }, [postData])

  return (
    <PostBodyContainer>
      {postData.length !== 0 ? (
        <ReactMarkdown className={style.reactMarkDown}>
          {post.body}
        </ReactMarkdown>
      ) : (
        <></>
      )}
    </PostBodyContainer>
  )
}
