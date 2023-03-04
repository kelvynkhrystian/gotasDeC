import React from 'react'
import { HomeStyles } from '../styles/homeStyles'

function Home() {
  return (
    <HomeStyles>
        <article>
            <img src="https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2013%2F10%2F03%2F19%2FWDL-Logo-32441_62334_054938448_2120323639.jpg" alt="logomarca gotas de chocolate" />
        </article>
        <div>
            <img src="http://granjasaojorge.com.br/img/loading1.gif" alt="carregando" />
            <button>Iniciar pedido</button>
        </div>
    </HomeStyles>
  )
}

export default Home