import{ useState, useEffect} from 'react'

function App() {
  const [count,setCount] = useState(0)
 useEffect(() => {
   document.title = `chats${count}`
 })
  return <>
  <h1>Counetr:{count}</h1>
    <button onClick={() => setCount(count+1)}>+</button>
    <button onClick={() => setCount(count-1)}>-</button>
    <button onClick={() => setCount(0)}>Reset</button>
    </>
   
    

}

export default App;
