import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 200;
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  margin: 10px 0;
`
export const Desc = styled.h1`
  font-size: 12px;
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  margin: 10px 0;
`
