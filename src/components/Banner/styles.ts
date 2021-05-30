import styled from 'styled-components'

export const Container = styled.div`
  max-height: 300px;
`
export const BannerComponent = styled.img`
  width: 100%;
  border-bottom: 5px solid ${(props) => props.theme.color.black};
`
