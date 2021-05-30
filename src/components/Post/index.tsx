import { ReactNode } from 'react'
import Link from 'next/link'
import { Container, Title, Img, DescContainer, Desc, SubTitle } from './styles'

interface PostProps {
  TitleTxt: string
  SubTitleTxt: string
  DescTxt: string
  LinkTxt: string
}

function Post({ TitleTxt, SubTitleTxt, DescTxt, LinkTxt }: PostProps) {
  return (
    <Link href={LinkTxt}>
      <Container>
        <Title>{TitleTxt}</Title>
        <SubTitle>{SubTitleTxt}</SubTitle>
        <DescContainer>
          <Desc>{DescTxt}</Desc>
          <Img />
        </DescContainer>
      </Container>
    </Link>
  )
}

export default Post
