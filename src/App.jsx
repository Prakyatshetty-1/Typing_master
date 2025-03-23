import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Body from "./components/Body";


function App() {

  let [best, setBest] = useState(() => {
    return Number(localStorage.getItem("best")) || 0;
  });
  
  useEffect(() => {
    localStorage.setItem("best", best);
  }, [best]);

  let [darkMode,setDarkMode] = useState(localStorage.getItem("shivam")==="true");
  useEffect(()=>localStorage.setItem("shivam",darkMode),[darkMode])

  function changeTheme()
  {
    setDarkMode((prev)=>!prev);
  }

  return (
    <>
      <Navbar dabba={darkMode} changeTheme={changeTheme} best={best}/>
      <Body darkMode={darkMode} best={best} setBest={setBest}/>
    </>
  )
}

export default App
