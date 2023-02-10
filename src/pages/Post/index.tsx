// import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostBody } from '../../components/PostBody'
import { PostSummary } from '../../components/PostSummary'
import { PostPageContainer } from './style'

export function PostPage() {
  const params = useParams()

  return (
    <PostPageContainer>
      <PostSummary number={Number(params.id)} />
      <PostBody number={Number(params.id)} />
    </PostPageContainer>
  )
}
