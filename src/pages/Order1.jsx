import React from 'react'
import { OrderStyles } from '../styles/orderStyles'

function Order1() {
  return (
    <OrderStyles>
        <h1>1.Escolha o tamanho!</h1>
        <article>
          <section>
            <img src="https://images.tcdn.com.br/img/img_prod/746520/cascas_de_ovo_prontas_500g_c_6_und_5796652_1_71931fd31ed9605ccc831005001851b3.jpg" alt="casca" />
            <p>250g</p>
          </section>
          <section>
          <img src="https://images.tcdn.com.br/img/img_prod/746520/cascas_de_ovo_prontas_500g_c_6_und_5796652_1_71931fd31ed9605ccc831005001851b3.jpg" alt="casca" />
            <p>350g</p>
          </section>
        </article>
        <article>
          <button>Anterior</button>
          <button>Próximo</button>
        </article>
    </OrderStyles>
  )
}

export default Order1