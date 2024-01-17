import { useDispatch, useSelector } from 'react-redux';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import { logout } from '../store/auth';
import './styles/Navbar-styles.scss';

const Navbar = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('>>>>Logout');
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      {!state.user.isConnected ? (
        <Link to="/login" className="nav-link">
          Connexion
        </Link>
      ) : (
        <CustomButton text="Déconnexion" type="logout" onClick={handleLogout} />
      )}
    </nav>
  );
};

export default Navbar;
