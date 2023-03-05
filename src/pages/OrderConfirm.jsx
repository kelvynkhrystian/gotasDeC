import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderConfirmStyles } from '../styles/orderConfirmStyles';

import OrderContext from '../context/OrderContext';

function OrderConfirm() {

  const order = useContext(OrderContext);

  const handleOptionChange = (option) => {
    // console.log(option.target.value);
    const inputName = option.target.value
    order.nome = inputName
  };

  // const negrito = '*Kelvyn*';
  // const italico = '_Kelvyn_';
  // const taxado = '*~texto~';
  // const quebraDelinha = %0a

  // console.log(order.tamanho);

  const api = 'https://api.whatsapp.com/send?';
  const fone = '5598991054292';
  const title = '*Gotas de Chocolate*%0a%0a';
  const name = `*Nome*: _${order.nome}_%0a`;
  const size = `*Tamanho*: _${order.tamanho}_%0a`;
  const shell = `*Casca*: _${order.casca}_%0a`;
  const filling = `*Recheio*: _${order.recheio}_%0a`;
  const additional = `*Adicional*: _${order.adicional}_%0a`;
  const payment = `*Forma de pagamento*: _${order.pagamento}_%0a%0a`;
  const value = `*Total*: R$ _${order.valor}_,00`;

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
              <p>{`${order.tamanho}`}</p>
              <p>{`${order.tamanho=== '150g' ? 'R$ 25' : 'R$ 35'}`}</p>
            </div>
          </div>
          <div>
            <h2>Casca</h2>
            <div>
              <p>{`${order.casca}`}</p>
            </div>
          </div>
          <div>
            <h2>Recheio</h2>
            <div>
              <p>{`${order.recheio}`}</p>
            </div>
          </div>
          <div>
            <h2>Adicionais</h2>
            <div>
              <p>{`${order.adicional}`}</p>
              <p>{`${order.adicional=== 'Nenhum' ? 'R$ 0' : 'R$ 5'}`}</p>
            </div>
          </div>
          <div>
            <h1>{`Valor total:`} <span>{`R$ ${order.valor},00`}</span></h1>
          </div>
        </section>

        
        <h3>Antes de efetuar o pedido, diga seu nome para que possamos lhe atender melhor</h3>

        <input type="text" placeholder='digite seu nome' onChange={handleOptionChange}/>
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
