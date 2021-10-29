import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import WildCard from './components/WildCard/WildCard'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="*"><WildCard /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
