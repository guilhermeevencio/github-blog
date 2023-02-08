import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 4.5rem;
  gap: 0.75rem;

  @media (max-width: 720px) {
    width: 90%;
  }

  @media (max-width: 1120px) {
    width: 90%;
  }
`

export const FormInput = styled.input`
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  padding: 0.75rem 1rem;
  width: 100%;
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
`

export const FormDescriprionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-span']};
  }
`
