import { ReactNode } from 'react'

import { Container, Title } from './styles'

interface TopBarProps {}

function TopBar({}: TopBarProps) {
  return (
    <Container>
      <Title>PEGASUS</Title>
    </Container>
  )
}

export default TopBar
