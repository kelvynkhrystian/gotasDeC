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
    name: 'Mousse de M.',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/maracuja.png?raw=true',
  },
];

function Order3() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { order, setOrder } = useContext(OrderContext);

  const handleOptionClick = (option) => {
    // Verifica se a opção já foi selecionada e remove se já estiver no array
    if (selectedOptions.some((selectedOption) => selectedOption.id === option.id)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption.id !== option.id));
      setOrder({
        ...order,
        recheio: selectedOptions.filter((selectedOption) => selectedOption.id !== option.id).map((selectedOption) => selectedOption.name) });
    } else if (selectedOptions.length < 2) {
      // Adiciona a opção se ainda não foi selecionada e não há mais de 2 opções selecionadas
      setSelectedOptions([...selectedOptions, option]);
      setOrder({
        ...order,
        recheio: [...selectedOptions, option].map((selectedOption) => selectedOption.name) });
    }
  };

  return (
    <Order3Styles>
      <h1>3º Passo - A decisão principal, escolha seus recheios preferidos (até 2 opções)!</h1>
      <article>
        {flavors.map((option) => (
          <label key={option.id} htmlFor={option.id} className={selectedOptions.some((selectedOption) => selectedOption.id === option.id) ? 'selected' : ''}>
            <input type="checkbox" id={option.id} value={option.id} checked={selectedOptions.some((selectedOption) => selectedOption.id === option.id)} onChange={() => handleOptionClick(option)} />
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
          <button disabled={selectedOptions.length === 0}>Próximo</button>
        </Link>
      </article>
    </Order3Styles>
  );
}


export default Order3;
