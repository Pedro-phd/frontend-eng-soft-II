import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  cursor: pointer;
`
export const DescContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin-top: 15px;
`
export const Title = styled.h1`
  font-size: 64px;
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 43.5px;
  text-align: center;
`
export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 200;
  color: ${(props) => props.theme.color.black};
  letter-spacing: 50px;
  text-align: center;
`
export const Desc = styled.p`
  font-size: 24px;
  font-weight: 200;
  color: ${(props) => props.theme.color.black};
  max-width: 440px;
`
export const Img = styled.img`
  max-height: 286px;
  max-width: 375px;
`
