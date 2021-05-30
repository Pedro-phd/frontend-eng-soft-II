import axios from 'axios'
import { ReactNode, useState } from 'react'

import { Container, Input, Title, FormContainer, BtnCadastrar } from './styles'

function OrderComponent() {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [length, setLength] = useState('')
  const [weight, setWeight] = useState('')
  const [cpfDestinatario, setCpfDestinatario] = useState('')
  const [cpfRemetente, setCpfRemetente] = useState('')
  const [cep, setCep] = useState('')

  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  }

  const handleClick = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const uf = response.data.uf
      console.log(height, width, weight, length, uf)
      const value = await axios.get(
        // `https://pegasus-logistics-backend.herokuapp.com/package?height=${height}&width=${width}&weight=${weight}&length=${length}&state=${uf}`
        'https://pegasus-logistics-backend.herokuapp.com/package?height=50&width=50&weight=2&length=50&state=SP',
        { headers }
      )
      console.log(value)
    } catch (error) {
      alert('Não foi possivel completar a ação!')
      console.log(error)
    }
  }

  return (
    <Container>
      <FormContainer>
        <Title>PACOTE</Title>
        <Input
          placeholder="Largura"
          onChange={(e) => setWidth(e.target.value)}
        />
        <Input
          placeholder="Altura"
          onChange={(e) => setHeight(e.target.value)}
        />
        <Input
          placeholder="Comprimento"
          onChange={(e) => setLength(e.target.value)}
        />
        <Input placeholder="Peso" onChange={(e) => setWeight(e.target.value)} />
      </FormContainer>
      <FormContainer>
        <Title>PEDIDO</Title>
        <Input
          placeholder="CPF Destinatario"
          onChange={(e) => setCpfDestinatario(e.target.value)}
        />
        <Input
          placeholder="CPF Remetente"
          onChange={(e) => setCpfRemetente(e.target.value)}
        />
        <Input
          placeholder="CEP Destino"
          onChange={(e) => setCep(e.target.value)}
        />
        <BtnCadastrar onClick={() => handleClick()}>FAZER PEDIDO</BtnCadastrar>
      </FormContainer>
    </Container>
  )
}

export default OrderComponent
