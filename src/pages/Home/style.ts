import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 1120px) {
    width: 90%;
    justify-content: center;
  }
`
