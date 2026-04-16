import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div className="container">
        <h2>No favourites yet 😢</h2>
        <p>Start saving countries to see them here.</p>
        <Link to="/">Go to Home</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <h2>Your Favourite Countries ❤️</h2>

      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Favourites