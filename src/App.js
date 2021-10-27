import React, { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import gsap from "gsap";
import Header from "./components/header";
import "./styles/App.scss";

import Home from "./pages/home";
import caseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";
import Navigation from "./components/navigation";

const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/case-studies', name: 'Case Studies', Component: caseStudies},
  {path: '/approach', name: 'Approach', Component: Approach},
  {path: '/services', name: 'Services', Component: Services},
  {path: '/about', name: 'About', Component: About},
]


function debounce(fn, ms) {
  let timer;
  return() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  }
}

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    //fix for flashing text on page reload
    //hidden visibility is overriden once DOM is loaded
    gsap.to('body', { duration: 0, css: { visibility: 'visible'} })
    
    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    //re-render the vh value on resize. 
    //Takes a timeout to prevent spamming state updates
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)
   
    return() => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  })

  return (
    <>
      <Header dimensions={dimensions} />
      <div className="app">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component/>
          </Route>
        ))}
      </div>
      <Navigation/>
    </>
  );
}

export default App;
