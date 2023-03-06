import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderStyles } from '../styles/orderStyles';

import OrderContext from '../context/OrderContext';

const sizes = [
  {
    id: '150g',
    name: '150g',
    price: 25,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca250g.png?raw=true',
  },
  {
    id: '250g',
    name: '250g',
    price: 35,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca350g.png?raw=true',
  },
];

function Order1() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { order, setOrder} = useContext(OrderContext);

  console.log(order);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    setOrder({
      ...order,
      tamanho: option.name,
      valor: option.name === '150g' ? 25 : 35
    });
  };


  return (
    <OrderStyles>
      <h1>1º Passo - Antes de qualquer coisa, decida o tamanho!</h1>
      <article>
        {sizes.map((option) => (
          <label key={option.id} htmlFor={option.id} className={selectedOption === option ? 'selected' : ''}>
            <input type="radio" id={option.id} value={option.id} checked={selectedOption === option} onChange={() => handleOptionClick(option)} />
            <img src={option.image} alt={`Option ${option.name}`} />
            <div>
              <p>{option.name}</p>
              <p>R$ {option.price}</p>
            </div>
          </label>
        ))}
      </article>

      <article>
        <Link to="/">
          <button>Anterior</button>
        </Link>
        <Link to="/order2">
          <button disabled={!selectedOption}>Próximo</button>
        </Link>
      </article>
    </OrderStyles>
  );
}

export default Order1;
