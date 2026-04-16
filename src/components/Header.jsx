import { useTheme } from '../context/ThemeContext'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <h1 className="logo">CountryPeek</h1>

      <nav className="header__nav">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </nav>
    </header>
  )
}

export default Header