import { Link } from 'react-router-dom'
import {
  AnchorsContainer,
  GoBackContainer,
  GoToGithubContainer,
  LinkContent,
  LinksContainer,
  PostSummaryContainer,
} from './style'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { AppContext, PostData } from '../../contexts/AppContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostSummaryProps {
  number: number
}

export function PostSummary({ number }: PostSummaryProps) {
  const { profileInfo, postData } = useContext(AppContext)
  const [formattedDate, setFormattedDate] = useState<Date>(new Date())
  const [post, setPost] = useState({} as PostData)

  useEffect(() => {
    if (postData.length !== 0) {
      const currentPost = postData.find((post) => post.number === number)
      if (currentPost) {
        const postDate = new Date(currentPost.createdAt)
        setFormattedDate(postDate)
        setPost(currentPost)
      }
    }
  }, [postData])

  return postData.length !== 0 ? (
    <PostSummaryContainer>
      <AnchorsContainer>
        <GoBackContainer>
          <Link to="/">
            <FaChevronLeft size={12} />
            <span>VOLTAR</span>
          </Link>
        </GoBackContainer>
        <GoToGithubContainer>
          <a href={`${post.htmlUrl}`}>
            <span>VER NO GITHUB</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </GoToGithubContainer>
      </AnchorsContainer>
      <h1>{post.title}</h1>
      <LinksContainer>
        <LinkContent>
          <a href={profileInfo.htmlUrl}>
            <FaGithub color="#3A536B" />
            {profileInfo.login}
          </a>
        </LinkContent>
        <LinkContent>
          <FaCalendarDay color="#3A536B" />
          <span>
            {formatDistanceToNow(formattedDate, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </LinkContent>
        <LinkContent>
          <FaComment color="#3A536B" />
          <span>{`${post.comments} comentários`}</span>
        </LinkContent>
      </LinksContainer>
    </PostSummaryContainer>
  ) : (
    <></>
  )
}
