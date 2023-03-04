import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OrderStyles } from '../styles/orderStyles';

const sizes = [
  {
    id: '250g',
    name: '250g',
    price: 259,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca250g.png?raw=true',
  },
  {
    id: '350g',
    name: '350g',
    price: 350,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca350g.png?raw=true',
  },
];

function Order2() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <OrderStyles>
      <h1>Escolha a casca!</h1>
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
        <Link to="/order1">
          <button>Anterior</button>
        </Link>
        <Link to="/order3">
          <button disabled={!selectedOption}>Próximo</button>
        </Link>
      </article>
    </OrderStyles>
  );
}

export default Order2;
