import { useContext } from 'react'
import { PostCard } from '../../components/PostCard'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary/Summary'
import { AppContext } from '../../contexts/AppContext'
import { CardsContainer } from './style'

export function Home() {
  const { postData } = useContext(AppContext)
  return (
    <>
      <Summary />
      <SearchForm />
      <CardsContainer>
        {postData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </CardsContainer>
    </>
  )
}
