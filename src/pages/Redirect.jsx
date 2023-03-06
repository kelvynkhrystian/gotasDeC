import React, { useState, useEffect, useContext } from 'react';
import OrderContext from '../context/OrderContext';

import { RedirectStyles } from '../styles/redirectStyles';

function Redirect() {

  const { order } = useContext(OrderContext);
  const [seconds, setSeconds] = useState(10);
  const [redirect, setRedirect] = useState(false);

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

  useEffect(() => {

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      setRedirect(true);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    if (redirect) {
      const timeout = setTimeout(() => {
        window.location.href = `${url}`;
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [redirect, url]);


  // setTimeout(function() {
  //   window.location.href = `${url}`;
  // }, 5000);

  return (
    <RedirectStyles>
      <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/logoG.png?raw=true" alt="logomarca gotas de chocolate" />
      <h2>Obrigado pela preferência!</h2>
      <h3>Lembrando que para sua encomenda seja preparada, pedimos 50% do valor do seu pedido antecipadamente</h3>
      <span>{seconds}</span>
      <p>Agora você será redirecionado para o whatsapp</p>
      
    </RedirectStyles>
  )
}

export default Redirect