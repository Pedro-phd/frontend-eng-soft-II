import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`
export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  font-weight: 200;
  color: white;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
export const Bold = styled.span`
  font-weight: 700;
`
