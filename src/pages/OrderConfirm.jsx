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
  const title = '*Gotas de Chocolate*';
  const nome = `*Nome*: _${pedido.nome}_`;
  const tamanho = `*Tamanho*: _${pedido.tamanho}_`;
  const casca = `*Casca*: _${pedido.casca}_`;
  const adicional = `*Adicional*: _${pedido.adicional}_`;
  const valor = `*Total*: R$ _${pedido.valor}_,00`;


  const message = `${title}%0a%0a${nome}%0a${tamanho}%0a${casca}%0a${adicional}%0a%0a${valor}`
  const url = `${api}phone=${fone}&text=${message}`;

  return (
    <OrderConfirmStyles>
      <h1>5º Passo - E último, vamos confirmar seu pedido!</h1>
      <article>
        <section>
          <div>
            <h2>Tamanho</h2>
            <div>
              <p>150g</p>
              <p>R$ 25,00</p>
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
              <p>Brigadeiro</p>
            </div>
          </div>
          <div>
            <h2>Adicionais</h2>
            <div>
              <p>Nenhum</p>
            </div>
          </div>
          <h1>Valor total : R$ 25,00</h1>
        </section>

        
        <h2>Antes de efetuar o pedido, diga seu nome para que possamos lhe atender melhor</h2>

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
