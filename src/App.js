import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import WildCard from './components/WildCard/WildCard';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/item/:itemId" component={ItemDetailContainer} />
        <Route path="*" component={WildCard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
