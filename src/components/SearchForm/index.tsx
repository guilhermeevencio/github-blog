import {
  FormContainer,
  FormDescriprionContainer,
  FormInput,
  SearchInputContainer,
} from './style'

export function SearchForm() {
  return (
    <FormContainer>
      <FormDescriprionContainer>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </FormDescriprionContainer>
      <SearchInputContainer>
        <FormInput placeholder="Buscar conteúdo" />
      </SearchInputContainer>
    </FormContainer>
  )
}
