import React, {useState, useEffect} from "react"
import './App.css';
const axois = require('axois');
const fetchURL = "https://api.npoint.io/20c1afef1661881ddc9c"
function App() {
  const [data, setData] = useState(null)
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())
 useEffect(() => {
    getData().then((data) => setData(data))
  }, [])
console.log(data)
  return (
    <div className="App">
     <h1>all data shown here</h1>
      <div>
  {data.map((item) => 
    <div className="show">
  <hr/>
    </div>
  )}
   </div>
    </div>
  );
}

export default App;