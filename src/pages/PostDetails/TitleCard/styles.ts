import styled from 'styled-components'

export const TitleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  margin-bottom: 1.25rem;

  > a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`

export const InfoTagsList = styled.ul`
  display: flex;
  gap: 1.5rem;
  li {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    > :first-child {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
