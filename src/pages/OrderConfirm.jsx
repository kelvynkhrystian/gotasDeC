import React from 'react';
import { Link } from 'react-router-dom';
import { OrderConfirmStyles } from '../styles/orderConfirmStyles';

function OrderConfirm() {

  return (
    <OrderConfirmStyles>
      <h1>5º Passo - O que acha de confirmar-mos o seu pedido antes de envia-lo?</h1>
      <article>
        
      </article>

      <article>
        <Link to="/order4">
          <button>Anterior</button>
        </Link>
        <Link to="/confirm">
          <button>Próximo</button>
        </Link>
      </article>
    </OrderConfirmStyles>
  );
}

export default OrderConfirm;
