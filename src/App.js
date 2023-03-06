import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderContext from './context/OrderContext';

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Order1 from './pages/Order1'
import Order2 from './pages/Order2'
import Order3 from './pages/Order3'
import Order4 from './pages/Order4'
import OrderConfirm from './pages/OrderConfirm'
import Agradecimentos from './pages/Redirect';

import GlobalStyle from './styles/globalStyles';

const defaultOrderValues = { 
  tamanho: '',
  casca: '',
  recheio: '',
  adicional: '',
  nome: '',
  pagamento: 'Pix',
  valor: 0,
};

function App() {

  const [ order, setOrder ] = useState(defaultOrderValues);

  return (
    <OrderContext.Provider value={{order, setOrder}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/order1" component={ Order1 } />
          <Route exact path="/order2" component={ Order2 } />
          <Route exact path="/order3" component={ Order3 } />
          <Route exact path="/order4" component={ Order4 } />
          <Route path="/confirm" component={ OrderConfirm } />
          <Route path="/redirect" component={ Agradecimentos } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    <GlobalStyle />
  </OrderContext.Provider>
  );
}

export default App;
