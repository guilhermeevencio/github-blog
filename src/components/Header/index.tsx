import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo" />
      </HeaderContent>
    </HeaderContainer>
  )
}
