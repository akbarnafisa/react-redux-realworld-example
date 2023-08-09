import { memo } from 'react';
import { Link } from 'react-router-dom';


/**
 * Navbar when there isn't a logged user
 *
 * @example
 * <LoggedOutNavbar />
 */
function LoggedOutNavbar() {
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Sign in
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Sign up
        </Link>
      </li>
    </ul>
  );
}

/**
 * App header
 *
 * @example
 * <Header />
 */
function Header () {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Conduit
        </Link>

        <LoggedOutNavbar />
      </div>
    </nav>
  )
}

export default memo(Header)