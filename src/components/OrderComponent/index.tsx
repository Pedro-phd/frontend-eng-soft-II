import axios from 'axios'
import { ReactNode, useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import {
  Container,
  Input,
  Title,
  FormContainer,
  BtnCadastrar,
  Form,
  LoadingScreen
} from './styles'
import { GET_ORDER, CAD_ORDER } from '../../graphql/queries'
import ModalComponent from '../Modal/index'
import { BoxLoading } from 'react-loadingg'

function OrderComponent() {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState<any>(0)
  const [height, setHeight] = useState<any>(0)
  const [length, setLength] = useState<any>(0)
  const [weight, setWeight] = useState<any>(0)
  const [cpfDestinatario, setCpfDestinatario] = useState('')
  const [cpfRemetente, setCpfRemetente] = useState('')
  const [cep, setCep] = useState('')
  const [freteValue, setFreteValue] = useState(0)

  const [loading, setLoading] = useState(false)

  const [modalTitle, setModalTitle] = useState('')
  const [modalDesc, setModalDesc] = useState('Por favor contate nosso suporte!')
  const [modalCode, setModalCode] = useState('')
  const [modalSucess, setModalSucess] = useState(true)

  const [createOrder, responseCreateOrderTest] = useMutation(CAD_ORDER)

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
      console.log(responseCreateOrderTest)
      const responseCreateOrder = await createOrder({
        variables: {
          cepDestinatio: cep,
          cpfRecipient: cpfDestinatario,
          cpfSender: cpfRemetente,
          finalValue: freteValue,
          height: height,
          length: length,
          weight: weight,
          width: width
        }
      })
      setModalTitle('Sucesso! Veja abaixo o código do seu pedido.')
      setModalDesc(
        `Preço Final: R$${value.data.price.toFixed(2)} - Destino: ${cep}`
      )
      setModalCode(
        responseCreateOrder.data.insert_pegasus_order.returning[0].orderCode
      )
      setModalSucess(true)
      setLoading(false)
      setOpen(true)
    } catch (error) {
      setModalTitle('Não foi possivel realizar a ação.')
      setModalCode('Por favor contate nosso suporte!')
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
            placeholder="CPF Destinatario"
            onChange={(e) => setCpfDestinatario(e.target.value)}
            required
          />
          <Input
            placeholder="CPF Remetente"
            onChange={(e) => setCpfRemetente(e.target.value)}
            required
          />
          <Input
            placeholder="CEP Destino"
            onChange={(e) => setCep(e.target.value)}
            required
          />
          <BtnCadastrar onClick={(e) => handleClick(e)}>
            FAZER PEDIDO
          </BtnCadastrar>
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

export default OrderComponent
