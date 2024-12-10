
import { useEffect } from 'react'
import Benefits from './components/Benefits'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Partners from './components/partners'
import AOS from "aos"
import "aos/dist/aos.css"
import { Route, Routes } from 'react-router-dom'
import { gsap, Power3 } from "gsap/gsap-core";
function App() {
  
  useEffect(()=>{ 
    AOS.init({
      duration: 1000,
      offset: -100,
      easing: 'ease-in-out-sine',
    })
},[])


let tl = new gsap.timeline();
let ease = Power3.easeOut();


  return (
    <div>
      <Navbar/>
      <Routes>
    
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Benefits />} />
        <Route path="/partners" element={<Partners />} />
        
      </Routes>
      <Benefits timeline={tl}  ease={ease} />
    </div>
  )
}

export default App
