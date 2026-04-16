import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CountryCard from '../components/CountryCard'
import FilterBar from '../components/FilterBar'

function Home() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // ✅ New states for Part 4
  const [region, setRegion] = useState('All')
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      if (!query) {
        setCountries([])
        return
      }

      try {
        setLoading(true)
        setError(null)

        const res = await fetch(
          `https://restcountries.com/v3.1/name/${query}`
        )

        if (!res.ok) throw new Error('Country not found')

        const data = await res.json()
        setCountries(data)
      } catch (err) {
        setError(err.message)
        setCountries([])
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [query])

  // ✅ Derived state (IMPORTANT)
  const displayed = [...countries]
    .filter((c) => region === 'All' || c.region === region)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.common.localeCompare(b.name.common)
      }
      if (sortBy === 'population') {
        return b.population - a.population
      }
      return 0
    })

  // ✅ Loading & Error UI
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div>
      {/* ✅ SearchBar FIXED */}
      <SearchBar value={query} onChange={setQuery} />

      {/* ✅ Filter + Sort */}
      <FilterBar
        region={region}
        onRegionChange={setRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* ✅ Results */}
      {displayed.length > 0 ? (
        <div className="cards-grid">
          {displayed.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      ) : (
        <p>Search for a country</p>
      )}
    </div>
  )
}

export default Home