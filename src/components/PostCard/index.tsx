import { CardTitleContainer, PostCardContainer } from './style'

export function PostCard() {
  return (
    <PostCardContainer>
      <CardTitleContainer>
        <h3>Titulo do post</h3>
        <span>Há 1 dia</span>
      </CardTitleContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        placeat quo velit et architecto dolorum eaque impedit, illum incidunt
        nam fuga facilis, at distinctio nobis reiciendis sequi libero ipsam
        delectus!
      </p>
    </PostCardContainer>
  )
}
