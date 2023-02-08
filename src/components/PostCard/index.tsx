import { PostData } from '../../contexts/AppContext'
import { CardTitleContainer, PostCardContainer } from './style'

export function PostCard(props: PostData) {
  return (
    <PostCardContainer>
      <CardTitleContainer>
        <h3>Titulo do post</h3>
        <span>Há 1 dia</span>
      </CardTitleContainer>
      <p>{`${props.body.substring(0, 300)}...`}</p>
    </PostCardContainer>
  )
}
