import styled from 'styled-components'

export const PostCardContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  height: 16.25rem;
  width: 33rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 720px) {
    width: 90%;
    height: fit-content;
  }
`

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  height: 4rem;

  h3 {
    font-size: 20px;
    color: ${(props) => props.theme['base-title']};
    width: 80%;
    margin-top: 0;
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-span']};
    height: fit-content;
  }

  @media (max-width: 720px) {
    margin-bottom: 3rem;
    flex-direction: column;
    h3 {
      width: 100%;
    }
    span {
    }
  }
`
