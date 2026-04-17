import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'

function CountryCard({ country }) {
  const { name, flags, population, region, capital, cca3 } = country

  const { favourites, dispatch } = useFavourites()

  const isSaved = favourites.some(f => f.cca3 === cca3)

  const handleFavClick = (e) => {
    e.stopPropagation()

    if (isSaved) {
      dispatch({ type: 'REMOVE_FAVOURITE', payload: cca3 })
    } else {
      dispatch({ type: 'ADD_FAVOURITE', payload: country })
    }
  }

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img src={flags.png} alt={name.common} />

      <div className="card__body">
        <h3>{name.common}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>

        {/* ⭐ Favourite Button */}
        <button
          className={`fav-btn ${isSaved ? 'fav-btn--saved' : ''}`}
          onClick={handleFavClick}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </Link>
  )
}

export default CountryCard