import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import ItemDetail from './components/ItemDetail'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ItemListContainer from './components/ItemListContainer'
import { useEffect, useState } from 'react'

function App() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("./items.json")
      .then((response) => response.json())
      .then(data => setProductos(data.componentes))
  }, []);

  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Hero />}  />
        <Route path='/productos' element={<ItemListContainer productos={productos}/>}/>
        <Route path='/productos/:id' element={<ItemDetail productos={productos}/>}/>
      </Routes>
    </div>
  )
}

export default App