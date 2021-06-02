import axios from 'axios'
import { ReactNode, useState } from 'react'
import {
  Container,
  Input,
  Title,
  FormContainer,
  BtnCadastrar,
  Form,
  LoadingScreen
} from './styles'
import ModalComponent from '../Modal/index'
import { BoxLoading } from 'react-loadingg'

function Frete() {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState<any>(0)
  const [height, setHeight] = useState<any>(0)
  const [length, setLength] = useState<any>(0)
  const [weight, setWeight] = useState<any>(0)
  const [cep, setCep] = useState('')
  const [freteValue, setFreteValue] = useState(0)

  const [loading, setLoading] = useState(false)

  const [modalTitle, setModalTitle] = useState('')
  const [modalDesc, setModalDesc] = useState('Por favor contate nosso suporte!')
  const [modalCode, setModalCode] = useState('')
  const [modalSucess, setModalSucess] = useState(true)

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const responseUF = await axios.get(
        `https://viacep.com.br/ws/${cep}/json/`
      )
      const uf = responseUF.data.uf
      console.log(height, width, weight, length, uf)
      const value = await axios.get(
        `https://pegasus-logistics-backend.herokuapp.com/package?height=${height}&width=${width}&weight=${weight}&length=${length}&state=${uf}`,
        { headers }
      )
      await setFreteValue(value.data.price)
      setModalTitle('Sucesso! Veja abaixo o valor aproximado do frete!.')
      setModalDesc(
        `Preço Final: R${value.data.price.toFixed(2)} - Destino: ${cep}`
      )
      setModalSucess(false)
      setLoading(false)
      setOpen(true)
    } catch (error) {
      setModalTitle('Não foi possivel realizar a ação.')
      setModalDesc('Por favor contate nosso suporte!')
      setModalSucess(false)
      setLoading(false)
      setOpen(true)
    }
  }

  return (
    <Container>
      {loading ? (
        <LoadingScreen>
          <BoxLoading color="#34315E" />
        </LoadingScreen>
      ) : null}
      <Form>
        <FormContainer>
          <Title>PACOTE</Title>
          <Input
            placeholder="Largura"
            onChange={(e) => setWidth(e.target.value)}
            required
          />
          <Input
            placeholder="Altura"
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          <Input
            placeholder="Comprimento"
            onChange={(e) => setLength(e.target.value)}
            required
          />
          <Input
            placeholder="Peso"
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </FormContainer>
        <FormContainer>
          <Title>PEDIDO</Title>
          <Input
            placeholder="CEP Destino"
            onChange={(e) => setCep(e.target.value)}
            required
          />
          <BtnCadastrar onClick={(e) => handleClick(e)}>CALCULAR</BtnCadastrar>
        </FormContainer>
      </Form>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        TitleTxt={modalTitle}
        DescTxt={modalDesc}
        Sucess={modalSucess}
        Code={modalCode}
      />
    </Container>
  )
}

export default Frete
