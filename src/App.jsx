import ProductList from './pages/ProductList';
import Home from './pages/Home'
import Product from './pages/Product';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
       <Route exact path="/"><Home/></Route>
       <Route path="/cart"><Cart/></Route>
       <Route path="/product/:id"><Product/></Route>
       <Route path="/products/:category"><ProductList/></Route>
      </Switch>
     </Router>  
  );
};

export default App;