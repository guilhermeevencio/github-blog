import { PostCard } from '../../components/PostCard'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary/Summary'
import { CardsContainer } from './style'

export function Home() {
  return (
    <>
      <Summary />
      <SearchForm />
      <CardsContainer>
        <PostCard />
        <PostCard />
      </CardsContainer>
    </>
  )
}
