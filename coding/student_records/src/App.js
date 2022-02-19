import './App.css';
import { Navbar } from './Component/Navbar';
import {Home } from "./Component/Home"

import { Records } from './Component/Admin';
import { Login } from './Component/Login';
import { Routes,Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      
       <Navbar/>
<Routes>
      <Route path="/" element={ <Home/>} ></Route>
      <Route path="/Admin" element={ 
        <PrivateRoute>
           
      </PrivateRoute>
      }></Route>
      <Route  path="/Records" element={ <Records/>}></Route>
      <Route path="/Login"  element={ <Login/>}></Route>
</Routes>
      

       
      
      
    </div>
  );
}

export default App;