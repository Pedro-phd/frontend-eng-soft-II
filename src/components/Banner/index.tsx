import { ReactNode } from 'react'

import { Container, BannerComponent } from './styles'
interface BannerProps {
  src: string
}

function Banner({ src }: BannerProps) {
  return (
    <Container>
      <BannerComponent src={src} />
    </Container>
  )
}

export default Banner
