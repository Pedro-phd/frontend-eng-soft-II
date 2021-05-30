import TopBar from 'components/TopBar'
import Banner from 'components/Banner'
import Post from 'components/Post'

export default function Home() {
  return (
    <>
      <TopBar />
      <Post
        DescTxt="Use nossa nova calculadora para estimar
o valor de entrega de suas encomendas."
        TitleTxt="CALCULAR"
        SubTitleTxt="FRETE"
        LinkTxt="/calc"
      />
      <Post
        DescTxt="Aproveite nossa plataforma
        para realizar o rapido cadastro
        de sua entrega.
        Somente com alguns cliques, você ja registra sua encomenda, e ela fica pronta para despacho!"
        TitleTxt="CADASTRAR"
        SubTitleTxt="ENTREGA"
        LinkTxt="/order"
      />
      <Post
        DescTxt="Aproveite de nossa API para
        integrar nosso sistema de
        calculo de frete em seu app."
        TitleTxt="INTEGRAÇÃO"
        SubTitleTxt="NOSSA API"
        LinkTxt=""
      />
    </>
  )
}
