import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Navbar from "./Navbar";

const Home = () =>{ 
    // const [isMobile,setisMobile]=useState(false);
    
    const [name,setUsername]=useState()
    
    const data =useParams()

    console.log(data);
    console.log(name);

    useEffect(()=>{
setUsername(data.dates)
},[data.dates])

return(
<div className="body">
  <Navbar/>
  <h2 style={{color:"white"}}>Welcome {name}</h2>
    
</div>
)
}



/* <div>
<nav className='navbar'>
  <h3 className='login'>LOGIN</h3>
  <ul className={isMobile ?'nav-links-mob':'nav-links'}>
    <li>
      <Link to="/home" className='home'>Home</Link>
    </li>
    <li>
      <Link to="/about" className='about'>About</Link>
    </li>
    <li>
      <Link to="/contact" className='contact'>Contact</Link>
    </li>
    </ul>
 <button className='mob-menu-icon' onClick={()=>setisMobile()}>{isMobile ?<h1>x</h1>:<h1>=</h1>}</button>
</nav>
<p>Welcome {'dates'}</p>
</div>   */

  

export default Home;