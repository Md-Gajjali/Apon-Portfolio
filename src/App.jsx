import { useState } from 'react'
import './App.css'
import Navber from './Componets/Navber'
import Header from './Componets/Header'
import Banner from './Componets/Banner'
import About from './Componets/About'
import Skills from './Componets/Skills'
import Services from './Componets/Services'
import Project from './Componets/Project'
import Client from './Componets/Client'

function App() {

  return (
    <>
     <Header/>
     <Navber/>
     <Banner/>
     <About/>
     <Skills/>
     <Services/>
     <Project/>
     <Client/>
    </>
  )
}

export default App
