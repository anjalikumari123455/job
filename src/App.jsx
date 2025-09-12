import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar'
import Start from './components/Start'
// import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from "./components/Login.jsx"
import Postjob from "./components/Postjob"
import Estimate from './components/Estimate.jsx'


function App() {
   return (
    <>
      <BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/"element={<Start/>}></Route>
  <Route path="/Login"element={<Login/>}></Route>
  <Route path="/Postjob"element={<Postjob/>}></Route>
 <Route path="/Signup"element={<Signup/>}></Route>
 <Route path="/Estimate"element={<Estimate/>}></Route>


</Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App;
