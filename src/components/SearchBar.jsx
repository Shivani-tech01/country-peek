function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        placeholder="Search country..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar