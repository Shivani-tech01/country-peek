import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <h2>CountryPeek</h2>

      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>

      <button
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  )
}

export default Header