import './styles/Navbar-styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
