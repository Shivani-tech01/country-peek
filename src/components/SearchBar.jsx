function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search for a country..."
        aria-label="Search countries"
      />
    </div>
  )
}

export default SearchBar