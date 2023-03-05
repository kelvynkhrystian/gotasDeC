import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderConfirmStyles } from '../styles/orderConfirmStyles';

import OrderContext from '../context/OrderContext';

function OrderConfirm() {

  const { tamanho, casca, recheio, adicional, nome, pagamento, valor } = useContext(OrderContext)

  // const negrito = '*Kelvyn*';
  // const italico = '_Kelvyn_';
  // const taxado = '*~texto~';
  // const quebraDelinha = %0a

  const api = 'https://api.whatsapp.com/send?';
  const fone = '5598991054292';
  const title = '*Gotas de Chocolate*%0a%0a';
  const name = `*Nome*: _${nome}_%0a`;
  const size = `*Tamanho*: _${tamanho}_%0a`;
  const shell = `*Casca*: _${casca}_%0a`;
  const filling = `*Recheio*: _${recheio}_%0a`;
  const additional = `*Adicional*: _${adicional}_%0a`;
  const payment = `*Forma de pagamento*: _${pagamento}_%0a%0a`;
  const value = `*Total*: R$ _${valor}_,00`;

  const message = `${title}${name}${size}${shell}${filling}${additional}${payment}${value}`
  const url = `${api}phone=${fone}&text=${message}`;

  return (
    <OrderConfirmStyles>
      <h1>5º Passo - E último, vamos confirmar seu pedido!</h1>
      <article>
        <section>
          <div>
            <h2>Tamanho</h2>
            <div>
              <p>{`${tamanho}`}</p>
              <p>{`${tamanho=== '150g' ? 'R$ 25' : 'R$ 35'}`}</p>
            </div>
          </div>
          <div>
            <h2>Casca</h2>
            <div>
              <p>Ao Leite</p>
            </div>
          </div>
          <div>
            <h2>Recheio</h2>
            <div>
              <p>{`${recheio}`}</p>
            </div>
          </div>
          <div>
            <h2>Adicionais</h2>
            <div>
              <p>{`${adicional}`}</p>
              <p>{`${adicional=== 'Nenhum' ? 'R$ 0' : 'R$ 5'}`}</p>
            </div>
          </div>
          <div>
            <h1>{`Valor total:`} <span>{`R$ ${valor},00`}</span></h1>
          </div>
        </section>

        
        <h3>Antes de efetuar o pedido, diga seu nome para que possamos lhe atender melhor</h3>

        <input type="text" placeholder='digite seu nome'/>
      </article>

      <article>
        <Link to="/order4">
          <button>Anterior</button>
        </Link>

        <a href={url} target='blank' className='whatsapp'>
          <button>Enviar<img src="https://raw.githubusercontent.com/kelvynkhrystian/gotasdechocolate/main/src/images/WhatsApp.svg.webp" alt="logo whatsapp" /> </button>
        </a>
      </article>
    </OrderConfirmStyles>
  );
}

export default OrderConfirm;
