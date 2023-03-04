import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Order1 from './pages/Order1'
import Order2 from './pages/Order2'
import Order3 from './pages/Order3'
import Order4 from './pages/Order4'
import OrderConfirm from './pages/OrderConfirm'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/order1" component={ Order1 } />
      <Route exact path="/order2" component={ Order2 } />
      <Route exact path="/order3" component={ Order3 } />
      <Route exact path="/order4" component={ Order4 } />
      <Route path="/confirm" component={ OrderConfirm } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
