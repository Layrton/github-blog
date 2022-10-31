import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.5rem;

  .name {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  .github {
    display: flex;
    align-items: flex-start;
    font-size: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.blue};
      gap: 0.5rem;

      > img {
        width: 11px;
        height: 11px;
        color: ${(props) => props.theme.blue};
        fill: ${(props) => props.theme.blue};
      }
    }
  }
`

export const BioContainer = styled.div`
  color: ${(props) => props.theme['base-text']};
  margin: 0.5px 0 1.5rem;
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
