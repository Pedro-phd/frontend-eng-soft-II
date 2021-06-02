import { ReactNode } from 'react'
import Link from 'next/link'
import { Container, MenuItem, MenuContainer } from './styles'

import Logo from '../../imgs/logo.svg'

function TopBar() {
  return (
    <Container>
      <MenuContainer>
        <Link href="/calc">
          <MenuItem>Calculadora de frete</MenuItem>
        </Link>
        <Link href="/order">
          <MenuItem>Cadastrar entrega</MenuItem>
        </Link>
        <Link href="">
          <MenuItem>Nossa API</MenuItem>
        </Link>
      </MenuContainer>
      <Link href="/">
        <Logo />
      </Link>
    </Container>
  )
}

export default TopBar
