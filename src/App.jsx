import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import Favourites from './pages/Favourites'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetail />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  )
}

export default App