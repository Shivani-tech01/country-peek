import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CountryCard from '../components/CountryCard'

function Home() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [region, setRegion] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      if (!query) {
        setCountries([])
        return
      }

      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${query}`
        )

        if (!res.ok) {
          throw new Error('No countries found')
        }

        const data = await res.json()
        setCountries(data)
      } catch (err) {
        setError(err.message)
        setCountries([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(fetchCountries, 500)
    return () => clearTimeout(debounce)
  }, [query])

  // FILTER + SORT (derived state)
  let filteredCountries = countries

  if (region) {
    filteredCountries = filteredCountries.filter(
      (c) => c.region === region
    )
  }

  if (sort === 'name') {
    filteredCountries = [...filteredCountries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    )
  }

  if (sort === 'population') {
    filteredCountries = [...filteredCountries].sort(
      (a, b) => b.population - a.population
    )
  }

  return (
    <div>
      {/* Search */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Filter + Sort */}
      <div className="controls">
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">All Regions</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name (A-Z)</option>
          <option value="population">Population (High → Low)</option>
        </select>
      </div>

      {/* States */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Cards */}
      <div className="cards-grid">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Home