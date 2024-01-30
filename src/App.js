// import React from 'react';
// import './App.css';
import '../src/Components/Formik.css';
import SignUp from './Components/SignUp';
import Formik from './Components/Formik';
import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Components/Loginpage';
import Home from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import Blogs from './Components/Blogs';
import { Homee } from './Components/Homee';
import Imageupload from './Components/Imageupload';



function App() {
  return (
  <div>
    <Imageupload/>
    {/* <SignUp/>  */}
    {/* <Formik/>  */}
    {/* <Webpage/> */}
    {/* <Navbar/> */}
  </div>
  )
}

// export function Navbar(){
//   return(
//     <>
//     <div className='big-indigo-600 w-full h-screen'></div>
//     </>
//   )
// }

// export function Webpage(){
//   return(
//     <div className='pages'>
//       {/* <LoginPage/>  */}
// <BrowserRouter>

//        <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path='/Home/:dates' element={<Home />} />  
//           <Route path='/SignUp/' element={<SignUp/>}></Route>
//           <Route path='/Homee/' element={<Homee/>} />
//           <Route path='/about/' element={<About/>} />
//           <Route path='/blogs/' element={<Blogs/>} />
//           <Route path='/contact/' element={<Contact/>} />
//          {/* <Route path="*" element={<NoPage />} />  */}
//         </Routes>
//        </BrowserRouter> 
//       </div>
//   )
// }

export default App;
