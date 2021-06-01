import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`
export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  background: #f4f4f4;
  border: 1px solid #979797;
  border-radius: 4px;
  height: 50px;
  width: 100%;
  max-width: 250px;
  padding: 0.5rem 1rem;
  margin: 5px;
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 200;
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  margin: 10px 0;
`
export const BtnCadastrar = styled.button`
  background: ${(props) => props.theme.color.primary};
  border: none;
  border-radius: 4px;
  height: 50px;
  width: 100%;
  max-width: 250px;
  padding: 0.5rem 1rem;
  margin: 5px;
  color: white;
  font-weight: bold;
`
export const Form = styled.form`
  display: flex;
  max-width: 800px;
  width: 100%;
  flex-flow: wrap;
`
export const LoadingScreen = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`
