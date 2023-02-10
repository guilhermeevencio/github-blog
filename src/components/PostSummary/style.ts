import styled from 'styled-components'

export const PostSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  margin-top: -5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-span']};
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 24px;
  }

  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const AnchorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.blue};
  margin-bottom: 1.25rem;
`

export const PostInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
`

export const GoBackContainer = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  a {
    display: flex;
    height: 1.5rem;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    font-size: 12px;
  }
`

export const GoToGithubContainer = styled.div`
  display: flex;

  a {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    font-size: 12px;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 720px) {
    align-items: center;
    flex-direction: column;
  }
`

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  a {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`
