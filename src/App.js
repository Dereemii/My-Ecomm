import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      <ItemListContainer person="¿How are you?" />

      <ItemDetailContainer />
    </div>
  );
}

export default App;
