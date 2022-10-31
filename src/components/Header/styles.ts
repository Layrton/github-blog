import styled from 'styled-components'
import headerBackground from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  width: 100%;
  padding: 4rem 0 8.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${headerBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
