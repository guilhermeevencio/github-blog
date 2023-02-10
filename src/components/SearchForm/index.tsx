import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import { AppContext } from '../../contexts/AppContext'
import {
  FormContainer,
  FormDescriprionContainer,
  FormInput,
  SearchInputContainer,
  SubmitButton,
} from './style'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { postData } = useContext(AppContext)
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchQuery(data: SearchFormInput) {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchQuery)}>
      <FormDescriprionContainer>
        <h4>Publicações</h4>
        <span>{`${postData.length} publicações `}</span>
      </FormDescriprionContainer>
      <SearchInputContainer>
        <FormInput placeholder="Buscar conteúdo" {...register('query')} />
        <SubmitButton type="submit">
          Buscar
          <FaSearch />
        </SubmitButton>
      </SearchInputContainer>
    </FormContainer>
  )
}
