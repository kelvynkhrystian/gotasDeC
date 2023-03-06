import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Order3Styles } from '../styles/order3Styles';

import OrderContext from '../context/OrderContext';

const flavors = [
  {
    id: 'brigadero',
    name: 'Brigadero',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/brigadeiro.png?raw=true',
  },
  {
    id: 'ferreiro',
    name: 'Ferrero R.',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/ferrero.png?raw=true',
  },
  {
    id: 'ninho',
    name: 'Ninho c/Nut',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/ninho.png?raw=true',
  },
  {
    id: 'mouse',
    name: 'Maracujá',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/maracuja.png?raw=true',
  },
];

function Order3() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { order, setOrder} = useContext(OrderContext);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOrder({...order, recheio: option.name})
  };

  return (
    <Order3Styles>
      <h1>3º Passo - A decição principal, escolha seu recheio preferido!</h1>
      <article>
        {flavors.map((option) => (
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
        <Link to="/order2">
          <button>Anterior</button>
        </Link>
        <Link to="/order4">
          <button disabled={!selectedOption}>Próximo</button>
        </Link>
      </article>
    </Order3Styles>
  );
}

export default Order3;
