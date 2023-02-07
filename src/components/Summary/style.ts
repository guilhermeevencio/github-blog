import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 2.25rem;

  margin-top: -5rem;
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;

  a {
    color: ${(props) => props.theme['base-text']};
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
`

export const BioContent = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
