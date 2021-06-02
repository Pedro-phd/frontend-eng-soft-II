import { ReactNode } from 'react'

import { Container, Title, Bold } from './styles'

import HomeImg from '../../imgs/imghome.svg'

function HomeComponent() {
  return (
    <Container>
      <Title>
        <Bold>PEGASUS</Bold>LOGISTICS
      </Title>
      <HomeImg />
    </Container>
  )
}

export default HomeComponent
