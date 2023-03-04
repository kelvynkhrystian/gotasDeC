import React from 'react'
import { HomeStyles } from '../styles/homeStyles'

function Home() {
  return (
    <HomeStyles>
        <article>
            <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/logoG.png?raw=true" alt="logomarca gotas de chocolate" />
        </article>
        <div>
            <img src="http://granjasaojorge.com.br/img/loading1.gif" alt="carregando" />
            <button>Iniciar pedido</button>
        </div>
    </HomeStyles>
  )
}

export default Home