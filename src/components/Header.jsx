import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">CountryPeek</div>

      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
    </header>
  )
}

export default Header