import { PostBody } from '../../components/PostBody'
import { PostSummary } from '../../components/PostSummary'
import { PostPageContainer } from './style'

export function PostPage() {
  return (
    <PostPageContainer>
      <PostSummary />
      <PostBody />
    </PostPageContainer>
  )
}
