import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Order2Styles } from '../styles/order2Styles';

import OrderContext from '../context/OrderContext';

const casca = [
  {
    id: 'aoleite',
    name: 'Ao Leite',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca350g.png?raw=true',
  },
  {
    id: 'branco',
    name: 'Branco',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/cascaBranco.png?raw=true',
  },
  {
    id: 'crocante',
    name: 'Crocante',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/cascaCrocante.png?raw=true',
  },
];

function Order2() {
  const [selectedOption, setSelectedOption] = useState(null);
  const order = useContext(OrderContext);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    order.casca = option.name
  };

  return (
    <Order2Styles>
      <h1>2º Passo - Agora escolha o casca que você quer experimentar!</h1>
      <article>
        {casca.map((option) => (
          <label key={option.id} htmlFor={option.id} className={selectedOption === option ? 'selected' : ''}>
            <input type="radio" id={option.id} value={option.id} checked={selectedOption === option} onChange={() => handleOptionClick(option)} />
            <img src={option.image} alt={`Option ${option.name}`} />
            <div>
              <p>{option.name}</p>
            </div>
          </label>
        ))}
      </article>

      <article>
        <Link to="/order1">
          <button>Anterior</button>
        </Link>
        <Link to="/order3">
          <button disabled={!selectedOption}>Próximo</button>
        </Link>
      </article>
    </Order2Styles>
  );
}

export default Order2;
