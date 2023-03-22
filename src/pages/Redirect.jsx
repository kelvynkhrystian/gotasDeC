import React, { useState, useEffect, useContext } from 'react';
import OrderContext from '../context/OrderContext';

import { RedirectStyles } from '../styles/redirectStyles';

function Redirect() {
  const { order, setOrder } = useContext(OrderContext);
  const [seconds, setSeconds] = useState(10);

  if (order.adicional.includes("M&M")) {
    setOrder({
      ...order,
      adicional: order.adicional.replace("M&M", "MM"),
    })
  }

  const fone = '5598992230758';
  const message = `*Gotas de Chocolate*%0a%0a*Nome*: _${order.nome}_%0a*Tamanho*: _${order.tamanho}_%0a*Casca*: _${order.casca}_%0a*Recheio*: ${order.recheio} %0a*Adicional*: _${order.adicional}_%0a*Forma de pagamento*: _${order.pagamento}_%0a%0a*Total*: _R$ ${order.valor},00_`;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      window.location.href = `https://api.whatsapp.com/send?phone=${fone}&text=${message}`;
    }
  }, [seconds, message]);

  return (
    <RedirectStyles>
      <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/logoG.png?raw=true" alt="logomarca gotas de chocolate" />
      <h2>Obrigado pela preferência!</h2>
      <h3>Lembrando que para sua encomenda seja preparada, pedimos 50% do valor do seu pedido antecipadamente!</h3>
      <span>{seconds < 0 ? 0 : seconds}</span>
      <p>Agora você será redirecionado para o whatsapp</p>
    </RedirectStyles>
  );
}

export default Redirect;
