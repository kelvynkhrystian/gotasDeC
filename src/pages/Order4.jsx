import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Order4Styles } from '../styles/order4Styles';

import OrderContext from '../context/OrderContext';

const additional = [
  {
    id: 'no',
    name: 'Nenhum',
    price: 0,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/x.png?raw=true',
  },
  {
    id: 'choco',
    name: 'Chocoball',
    price: 4,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/chocoball.png?raw=true',
  },
  {
    id: 'mm',
    name: 'M&M',
    price: 5,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/m&m.png?raw=true',
  },
  {
    id: 'kitkat',
    name: 'Kitkat',
    price: 5,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/adicionalKitkat.png?raw=true',
  },
  {
    id: 'morango',
    name: 'Morango',
    price: 6,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/adicionalMorango.png?raw=true',
  },
  {
    id: 'ferreiro',
    name: 'Ferrero R.',
    price: 8,
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/adicionalFerreiro.png?raw=true',
  },
];

function Order4() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { order, setOrder} = useContext(OrderContext);

  const handleOptionClick = (option) => {
    if (option.id === 'no') {
      setSelectedOptions([option]);
    } else if (selectedOptions[0]?.id === 'no') {
      setSelectedOptions([option]);
    } else if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else if (selectedOptions.length < 2) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions.slice(1), option]);
    }
  };

  const setValue = () => {
    
    let add = 0;
    console.log(selectedOptions);
    if (selectedOptions.length === 0) {
      add = order.valor;
    } else if (selectedOptions.length === 1) {
      add = order.valor + selectedOptions[0].price;
    } else if (selectedOptions.length === 2) {
      add = order.valor + selectedOptions[0].price + selectedOptions[1].price;
    }
    
    setOrder({
      ...order,
      valor: add,
      adicional: selectedOptions.map((option) => option.name).join(', '),
      valorAdicional: selectedOptions.reduce((total, option) => total + option.price, 0),
    });
  };
  
  return (
    <Order4Styles>
      <h1>4º Passo - Quer algum adicional? (até 2 opções)!</h1>
      <article>
        {additional.map((option) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className={selectedOptions.includes(option) ? 'selected' : ''}
          >
            <input
              type="checkbox"
              id={option.id}
              value={option.id}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionClick(option)}
            />
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
          <button disabled={selectedOptions.length === 0} onClick={setValue}>Próximo</button>
        </Link>
      </article>
    </Order4Styles>
  );
}

export default Order4;