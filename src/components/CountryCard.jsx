import { Link } from 'react-router-dom'

function CountryCard({ country }) {
  if (!country) return null   // ✅ prevent crash

  const { name, flags, population, region, capital, cca3 } = country

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img
        src={flags?.svg}
        alt={`${name?.common} flag`}
        className="card__flag"
      />

      <div className="card__body">
        <h3 className="card__name">{name?.common}</h3>

        <p>
          <span>Population:</span>{' '}
          {population ? population.toLocaleString() : 'N/A'}
        </p>

        <p>
          <span>Region:</span> {region || 'N/A'}
        </p>

        <p>
          <span>Capital:</span> {capital?.[0] ?? 'N/A'}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard