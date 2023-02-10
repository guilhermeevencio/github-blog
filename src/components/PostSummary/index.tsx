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
import { AppContext } from '../../contexts/AppContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function PostSummary() {
  const { profileInfo, postData } = useContext(AppContext)
  const [formattedDate, setFormattedDate] = useState<Date>(new Date())
  useEffect(() => {
    if (postData.length !== 0) {
      const postDate = new Date(postData[0].createdAt)
      setFormattedDate(postDate)
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
          <a href={`${postData[0].htmlUrl}`}>
            <span>VER NO GITHUB</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </GoToGithubContainer>
      </AnchorsContainer>
      <h1>{postData[0].title}</h1>
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
          <span>{`${postData[0].comments} comentários`}</span>
        </LinkContent>
      </LinksContainer>
    </PostSummaryContainer>
  ) : (
    <></>
  )
}
