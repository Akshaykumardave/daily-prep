import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import Product from './Product'

function App() {

  return (
    <>
    <Header></Header>
      <h1>React redux toolkit tutorial</h1>
      <Product/>
    </>
  )
}

export default App
