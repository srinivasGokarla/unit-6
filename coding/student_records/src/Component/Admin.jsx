import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
const axios = require('axios');
const Records =()=>{
  const [page,setPage] = useState(1)
     const [text ,setText ] = useState(null)


    const details =()=>{
        axios.get(`http://localhost:3001/student?_page=${page}&_limit=3`)
            .then(function (response) {
          
             console.log("res", response.data);
             setText(response.data)
              })
             .catch(function (error) {
           
            console.log(error);
            })
      }

      useEffect(()=>{
          details()
      },[page])


    return<div>
        <h1>Student Records</h1>
        <button onClick={()=>{
            axios.get(`http://localhost:3001/student?_sort=Age&_order=desc?_page=${page}&_limit=3`)
            .then(function (response) {
            
              console.log(response.data);
              setText(response.data)
            })
            .catch(function (error) {
           
              console.log(error);
            })
        }}
        
        >Sort-Age </button>
      
         {text?.map((el, i)=> 
         
         <div key={i} style={{
          border : "1px solid black",
             padding : "10px",
             marginLeft : "400px",
             marginRight : "400px",
             marginTop: "10px"
            
         }}>
             
             <h2>Name : {el?.Name}</h2>
            <h5>Grade : {el?.Grade}</h5>
            <h5>Age : {el?.Age} </h5>
            <h5>Gender : {el?.Gender} </h5>
            
         </div>
         
         
         )}
         <button onClick={()=>{
            setPage(page-1)
        }}
        >prev</button>
        <button onClick={()=>{
            setPage(page + 1)
        }}
        >next</button>
          
    </div>
}

export {Records}