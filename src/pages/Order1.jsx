import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OrderStyles } from '../styles/orderStyles';

function Order1() {
  const [selectedLabel, setSelectedLabel] = useState('');

  const handleLabelClick = (label) => {
    setSelectedLabel(label);
  }

  return (
    <OrderStyles>
      <h1>1.Escolha o tamanho!</h1>
      <article>
        <label onClick={() => handleLabelClick('250g')} className={selectedLabel === '250g' ? 'selected' : ''}>
          <input type="radio" name="size" value="250g" checked={selectedLabel === '250g'} />
          <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca250g.png?raw=true" alt="Option 1" />
          <p>R$ 25,00</p>
        </label>
        <label onClick={() => handleLabelClick('350g')} className={selectedLabel === '350g' ? 'selected' : ''}>
          <input type="radio" name="size" value="350g" checked={selectedLabel === '350g'} />
          <img src="https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/casca350g.png?raw=true" alt="Option 2" />
          <p>R$ 30,00</p>
        </label>
      </article>

      <article>
        <Link to="/">
          <button>Anterior</button>
        </Link>
        <Link to="/order2">
          <button disabled={!selectedLabel}>Próximo</button>
        </Link>
      </article>
    </OrderStyles>
  )
}

export default Order1;
