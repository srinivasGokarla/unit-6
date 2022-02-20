import logo from './logo.svg';
import './App.css';
import{useState} from "react"

function App() {

  const[state, setState] = useState(true)
  
if( state === false) {
  return <button onClick={() => setState(true)}>Show</button>
  
}
  return (
    <div className="App">
      <h1>Srinivas</h1>
      <button onClick={() => setState(false) }>Hide</button>
    </div>
  );
}

export default App;
