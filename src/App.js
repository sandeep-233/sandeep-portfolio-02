import "./App.css";

import { useState } from 'react'
import { NavBar } from './component/NavBar'
import { HeroSection } from './component/HeroSection'
import { ContactMe } from './component/ContactMe'
import { Project } from './component/project/Project'
import { MeAndStack } from './component/MeAndStack'
import { FooterSection } from './component/FooterSection'
import { BrowserRouter } from 'react-router-dom'

function App() {

  const [mode, setMode] = useState(true);
  
  let bgColor, textColor;
  if(mode) {
    bgColor = 'bg-black';
    textColor = 'text-white'
  }
  else {
    bgColor = 'bg-white';
    textColor = 'text-black';
  }

  return (
    <BrowserRouter>
      <div id='home' className= {`flex flex-col gap-3 items-center ${bgColor} ${textColor} `} >
        <div className=" w-[100vw] h-[100vh] z-[100] justify-center items-center bg-black bg-opacity-[0.8] fixed flex">
          <a href="https://sandeep-portfolio-03.vercel.app/" className=" border-2 rounded-md p-4 border-orange-600 bg-orange-400 hover:scale-95 transition-all">
            Go to the updated portfolio 
          </a>
        </div>
        <NavBar setMode={setMode} mode={mode}/>
        <HeroSection/>
        <Project/>
        <MeAndStack/>
        <ContactMe/>
        <FooterSection/>
      </div>
    </BrowserRouter>
  )
}

export default App
