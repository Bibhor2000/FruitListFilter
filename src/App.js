import logo from './logo.svg';
import './App.css';
import FruitContainer from './Components/fruitContainer';
import fruitList from './Components/data';

function App() {
  return (
    <div>
      <FruitContainer fruits = {fruitList} />
    </div>
  );
}

export default App;
