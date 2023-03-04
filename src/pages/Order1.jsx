import React from 'react'
import { Link } from 'react-router-dom';

import { OrderStyles } from '../styles/orderStyles'

function Order1() {
  return (
    <OrderStyles>
        <h1>1.Escolha o tamanho!</h1>
        <article>
          <section>
            <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca250g.png?raw=true" alt="casca" />
            <p>250g</p>
          </section>
          <section>
          <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca350g.png?raw=true" alt="casca" />
            <p>350g</p>
          </section>
        </article>
        <article>
          <Link to="/" >
            <button>Anterior</button>
          </Link>
          <Link to="/order2" >
            <button>Próximo</button>
          </Link>
        </article>
    </OrderStyles>
  )
}

export default Order1