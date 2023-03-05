import React from 'react';
import { Link } from 'react-router-dom';
import { OrderConfirmStyles } from '../styles/orderConfirmStyles';

function OrderConfirm() {

  // const negrito = '*Kelvyn*';
  // const italico = '_Kelvyn_';
  // const taxado = '*~texto~';
  // const quebraDelinha = %0a

  // aqui vou receber os dados do context api para formular a mensagem
  const pedido = {
    tamanho:'150g',
    casca: 'Ao Leite',
    recheio: 'brigadeiro',
    adicional: 'Morango',
    nome: 'Mariana',
    valor: 25,
  }

  const api = 'https://api.whatsapp.com/send?';
  const fone = '5598991054292';
  const title = '*Gotas de Chocolate - Pedido 001*';
  const nome = `*Nome*: _${pedido.nome}_`;
  const tamanho = `*Tamanho*: _${pedido.tamanho}_`;
  const casca = `*Casca*: _${pedido.casca}_`;
  const adicional = `*Adicional*: _${pedido.adicional}_`;
  const valor = `*Valor votal da compra*: R$ _${pedido.valor}_,00`;


  const message = `${title}%0a%0a${nome}%0a${tamanho}%0a${casca}%0a${adicional}%0a%0a${valor}`
  const url = `${api}phone=${fone}&text=${message}`;

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

        <a href={url} target='blank'>
          Enviar via whatsapp
        </a>
      </article>
    </OrderConfirmStyles>
  );
}

export default OrderConfirm;
