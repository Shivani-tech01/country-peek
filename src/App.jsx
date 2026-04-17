import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import Favourites from './pages/Favourites'

// Components (if you have layout components like Header)
import Header from './components/Header'

function App() {
  return (
    <>
      {/* Top Header (Navigation + Theme toggle etc.) */}
      <Header />

      {/* App Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Country Detail Page */}
        <Route path="/country/:cca3" element={<CountryDetail />} />

        {/* ⭐ Favourites Page (NEW FEATURE) */}
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  )
}

export default App