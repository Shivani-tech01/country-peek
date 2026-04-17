import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import CountryCard from '../components/CountryCard'

function Home() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (!query.trim()) return   // ✅ IMPORTANT FIX

    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch(() => setCountries([]))
  }, [query])

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />

      {countries.length === 0 && query.trim() && (
        <p>No countries found</p>
      )}

      <div className="cards-grid">
        {countries.map((c) => (
          <CountryCard key={c.cca3} country={c} />
        ))}
      </div>
    </div>
  )
}

export default Home