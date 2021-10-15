import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">      
        <Navbar />
        <ItemListContainer person="¿How are you?"/>
    </div>
  );
}

export default App;
