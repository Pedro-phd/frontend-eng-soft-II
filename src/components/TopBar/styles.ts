import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px 0 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`
export const MenuItem = styled.h1`
  text-align: center;
  color: white;
  font-size: 12px;
  font-weight: 200;
  margin: 0 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0 5px;
  }
`
export const MenuContainer = styled.div`
  text-align: center;
  color: white;
  font-size: 12px;
  display: flex;
`
