import { useContext } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { AppContext } from '../../contexts/AppContext'
import { PostBodyContainer } from './style'
import style from './style.module.css'

export function PostBody() {
  const { postData } = useContext(AppContext)
  return (
    <PostBodyContainer>
      {postData.length !== 0 ? (
        <ReactMarkdown className={style.reactMarkDown}>
          {postData[1].body}
        </ReactMarkdown>
      ) : (
        <></>
      )}
    </PostBodyContainer>
  )
}
