import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 25px;
  background-color: ${(props) => props.theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  background-color: ${(props) => props.theme.color.black};
  text-align: center;
  color: white;
  font-size: 12px;
  letter-spacing: 50%;
`
