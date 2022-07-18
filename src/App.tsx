import './App.css'
import { Footer } from './layout/Footer'
import Menu from './layout/Menu'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Pokemon } from './pages/Pokemon'

function App() {
  return (
    <div>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batata" element={<div>batata</div>} />
          <Route path="/:uri" element={<Pokemon/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
