import { Link } from "react-router-dom"


 const Navbar=()=>{
    return <div style={{
        display: "flex",
        border: "1px solid black",
        height: "30px",
        backgroundColor:  "#989c9e",
        justifyContent:"space-around",
        color: "#1c88cf",
        padding : "1%"
    }}>
        <Link to="/" >  <div>Home</div></Link>
        <Link to="/Admin" >  <div>Admin</div></Link>
        
       
        
    </div>
}

export {Navbar}