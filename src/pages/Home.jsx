import React from 'react'
import { Link } from 'react-router-dom';

import { HomeStyles } from '../styles/homeStyles'

function Home() {
  return (
    <HomeStyles>
        <article>
            <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/logoG.png?raw=true" alt="logomarca gotas de chocolate" />
        </article>
        <div>
          <img src="https://www.toalhapromocional.com.br/images/loading-produto.gif" alt="carregando" />
          <Link to="/order1" >
            <button>Iniciar Pedido</button>
          </Link>
        </div>
    </HomeStyles>
  )
}

export default Home