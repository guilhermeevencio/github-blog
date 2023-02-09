import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { PostData } from '../../contexts/AppContext'
import { CardTitleContainer, PostCardContainer } from './style'
import { formatDistanceToNow } from 'date-fns'
import { useEffect, useState } from 'react'
import ptBR from 'date-fns/locale/pt-BR'

export function PostCard(props: PostData) {
  const [formattedDate, setFormattedDate] = useState<Date>(new Date())
  useEffect(() => {
    const postDate = new Date(props.createdAt)
    setFormattedDate(postDate)
  }, [props])
  return (
    <PostCardContainer>
      <CardTitleContainer>
        <h3>{props.title}</h3>
        <span>
          {formatDistanceToNow(formattedDate, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </CardTitleContainer>
      <ReactMarkdown>{`${props.body.substring(0, 200)}...`}</ReactMarkdown>
    </PostCardContainer>
  )
}
