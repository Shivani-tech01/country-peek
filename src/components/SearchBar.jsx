function SearchBar({ query, setQuery }) {
  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
  }

  return (
    <input
      type="text"
      placeholder="Search country..."
      value={query}
      aria-label="Search for a country"
      onChange={handleChange}
    />
  )
}

export default SearchBar