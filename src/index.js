import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import App from './App';

import OrderContext from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderContext.Provider value={'test'}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </OrderContext.Provider>
    <GlobalStyle />
  </React.StrictMode>
);

