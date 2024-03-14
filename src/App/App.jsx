import React from 'react'
import './App.css';

import { Hero, Navbar, About, Hover_CTA, Thesis } from '../components';

const App = () => {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <About />
      <Hover_CTA />
      <Thesis />
    </div>
  )
}

export default App
