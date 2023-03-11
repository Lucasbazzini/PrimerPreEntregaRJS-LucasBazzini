import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
