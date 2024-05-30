import React, { useContext } from 'react'
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import { ModeContext, ModeProvider } from './contextApi/DarkAndLightMode'

const App = () => {
const {isDark,setIsDark} = useContext(ModeContext)
  


  return (
    <div className={`${isDark ? "bodyDark":"bodyLight"}`} >
      <BrowserRouter>
      
      <button className={`btn ${isDark ? "btnDark":"btnLight"} `} onClick={()=>setIsDark(!isDark)} > {!isDark ? "Dark": "Light"} Dark</button>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App