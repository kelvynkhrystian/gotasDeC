import React from 'react'
import { HomeStyles } from '../styles/homeStyles'

function Home() {

  setTimeout(() => console.log('Initial timeout!'), 1000);

  return (
    <HomeStyles>
        <article>
            <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/logoG.png?raw=true" alt="logomarca gotas de chocolate" />
        </article>
        <div>
            <img src="https://www.toalhapromocional.com.br/images/loading-produto.gif" alt="carregando" />
            <button>Iniciar pedido</button>
        </div>
    </HomeStyles>
  )
}

export default Home