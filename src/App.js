import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import WildCard from './components/WildCard/WildCard';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/cartContext'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item/:itemId" component={ItemDetailContainer} />
          <Route exact path="/category/:categoryId" component={Category} />
          <Route exact path="/category" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route path="*" component={WildCard} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
