import { ReactNode, useState } from 'react'

import { Container, Title, Desc } from './styles'
import Modal from 'react-awesome-modal'

import QRCode from 'qrcode.react'
import { useWindowWidth } from '@react-hook/window-size'

interface ModalProps {
  setOpen: any
  open: boolean
  TitleTxt: string
  DescTxt: string
  Sucess: boolean
  Code: any
}

function ModalComponent({
  setOpen,
  open,
  TitleTxt,
  DescTxt,
  Sucess,
  Code
}: ModalProps) {
  const onlyWidth = useWindowWidth()
  return (
    <Modal
      visible={open}
      width={onlyWidth >= 900 ? '50%' : '80%'}
      height="50%"
      effect="fadeInUp"
      onClickAway={() => setOpen(false)}
    >
      <Container>
        <Title>{TitleTxt}</Title>
        <Desc>{DescTxt}</Desc>
        {Sucess ? <QRCode value={Code} fgColor="#34315E" /> : null}
      </Container>
    </Modal>
  )
}

export default ModalComponent
