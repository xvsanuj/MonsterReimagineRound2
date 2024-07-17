import React from 'react'
import Navbar from './Components/Navbar'
import Loader from './Components/Loader'
import Home from './Components/Home'
import Lenis from "lenis";
import Canvas from './Components/Canvas';


const App = () => {

  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  lenisFn();
  return (
    <>
        {/* <Loader /> */}
        <Navbar/>
        <Home/>
        <Canvas/>
    </>
  )
}

export default App