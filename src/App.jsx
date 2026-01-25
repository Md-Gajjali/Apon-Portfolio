import { useState } from 'react'
import './App.css'
import Navber from './Componets/Navber'
import Header from './Componets/Header'
import Banner from './Componets/Banner'
import About from './Componets/About'
import Skills from './Componets/Skills'

function App() {

  return (
    <>
     <Header/>
     <Navber/>
     <Banner/>
     <About/>
     <Skills/>
    </>
  )
}

export default App
