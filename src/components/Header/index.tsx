import { HeaderContainer } from './styles'
import logoSVG from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="" />
    </HeaderContainer>
  )
}
