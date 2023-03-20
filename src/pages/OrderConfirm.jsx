import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderConfirmStyles } from '../styles/orderConfirmStyles';

import OrderContext from '../context/OrderContext';

function OrderConfirm() {

  const [confirmWhats, setconfirmWhats] = useState(null);
  const {order, setOrder} = useContext(OrderContext);
  
  const handleOptionChange = (event) => {
    const n = event.target.value;
    setOrder({
      ...order,
      nome: n,
    })
    setconfirmWhats(n)
  };

  const handleSelectChange = (event) => {
    const s = event.target.value;

    setOrder({
      ...order,
      pagamento: s,
    })
  };

  return (
    <OrderConfirmStyles>
      <h1>5º Passo - E último, vamos confirmar seu pedido!</h1>
      <article>
        <section>
          <div>
            <h2>Tamanho</h2>
            <div>
              <p>{`${order.tamanho}`}</p>
              <p>{`${order.tamanho=== '150g' ? 'R$ 45' : 'R$ 55'}`}</p>
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
            <h2>Add</h2>
            <div>
              <p>{`${order.adicional}`}</p>
              <p>{`R$ ${order.valorAdicional}`}</p>
            </div>
          </div>
          <div>
            <h1>{`Valor total:`} <span>{`R$ ${order.valor},00`}</span></h1>
          </div>
        </section>

        
        <h3>Antes de efetuar o pedido, diga seu nome e a forma de pagamento para que possamos lhe atender melhor!</h3>

        <input type="text" placeholder='digite seu nome' onChange={handleOptionChange} required/>

        <select onChange={handleSelectChange}>
          <option value="Pix">Pix</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Débito">Débito</option>
          <option value="Crédito">Crédito</option>
        </select>
      </article>

      <article>
        <Link to="/">
          <button>Refazer <span>&#8634;</span> </button>
        </Link>

        <Link to="/redirect" className='whatsapp'>
          <button disabled={!confirmWhats} >Enviar<img src="https://raw.githubusercontent.com/kelvynkhrystian/gotasdechocolate/main/src/images/WhatsApp.svg.webp" alt="logo whatsapp" /> </button>
        </Link>
      </article>
    </OrderConfirmStyles>
  );
}

export default OrderConfirm;