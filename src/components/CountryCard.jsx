import { Link } from 'react-router-dom'

function CountryCard({ country }) {
  const { name, flags, population, region, capital, cca3 } = country

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img
        src={flags.svg}
        alt={`${name.common} flag`}
        className="card__flag"
      />

      <div className="card__body">
        <h3 className="card__name">{name.common}</h3>

        <p>
          <span>Population:</span> {population.toLocaleString()}
        </p>

        <p>
          <span>Region:</span> {region}
        </p>

        <p>
          <span>Capital:</span> {capital?.[0] ?? 'N/A'}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard