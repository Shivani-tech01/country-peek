import { Link } from "react-router-dom";
import "../styles/App.css";

function Header() {
  return (
    <header className="header">
      {/* App Name */}
      <Link to="/" className="header__brand">
        CountryPeek
      </Link>

      {/* Navigation */}
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
    </header>
  );
}

export default Header;