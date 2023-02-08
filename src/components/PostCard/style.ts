import styled from 'styled-components'

export const PostCardContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  height: 16.25rem;
`

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  h2 {
    font-size: 20px;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-span']};
  }
`
