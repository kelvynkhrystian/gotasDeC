import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Order4Styles } from '../styles/order4Styles';

const flavors = [
  {
    id: 'no',
    name: 'Nenhum',
    price: 0,
    image: 'https://static.vecteezy.com/system/resources/previews/001/194/357/non_2x/no-sign-cross-png.png',
  },
  {
    id: 'morango',
    name: 'Morango',
    price: 5,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/adicionalMorango.png?raw=true',
  },
  {
    id: 'kitkat',
    name: 'Kitkat',
    price: 5,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/adicionalKitkat.png?raw=true',
  },
  {
    id: 'ferreiro',
    name: 'Ferreiro R.',
    price: 5,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/adicionalFerreiro.png?raw=true',
  },
];

function Order4() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Order4Styles>
      <h1>4º Passo - Agora é a hora em que você decide se gostaria de algum adicional...</h1>
      <article>
        {flavors.map((option) => (
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
        <Link to="/order3">
          <button>Anterior</button>
        </Link>
        <Link to="/confirm">
          <button disabled={!selectedOption}>Próximo</button>
        </Link>
      </article>
    </Order4Styles>
  );
}

export default Order4;
