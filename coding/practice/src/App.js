import logo from './logo.svg';
import './App.css';
import{useState, useEffect} from "react"

// function App() {
//    const[show, setShow] = useState(true)
//      if(show === false) {
//        return <button onClick={()=> setShow(true)}>Show</button>
//      }
//   return (
//     <div className="App">
//   <h1>srinivas</h1>
//   <button onClick={()=> setShow(false)}>Hide</button>
     
//     </div>
//   );
// }
// function App() {
//   const[count,setCount] = useState(0);

//   if(count < 0) {
//   return <h1>Not possible to decrease count</h1>
//   }
//  return (
//    <div className="App">
//    <h1>count: {count}</h1>
//    <button onClick={ () => setCount(count + 1)} >+</button>
//    <button onClick={ () => setCount(count - 1)} >-</button>
    
//    </div>
//  );
// }
function App() {
  const[count,setCount] = useState(0);
 useEffect(() => {
  document.title = `chat(${count})`
 })
 return (
   <div className="App">
   <h1>count: {count}</h1>
   <button onClick={ () => setCount(count + 1)} >+</button>
  
    
   </div>
 );
}

export default App;
