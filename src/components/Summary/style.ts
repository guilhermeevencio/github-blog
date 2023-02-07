import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 2.25rem;

  margin-top: -5rem;
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 8px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const BioContent = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 720px) {
    width: 90%;
    justify-content: center;
    text-align: center;
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
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    align-items: center;
  }
`
interface SummaryCardProps {
  variant?: 'blue'
}

export const LinkContent = styled.div<SummaryCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  a {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    ${(props) =>
      props.variant === 'blue' &&
      css`
        color: ${props.theme.blue};
      `}
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`
