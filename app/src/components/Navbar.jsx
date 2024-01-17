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
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/login" className="nav-link">
        {state.user.isConnected ? 'Admin' : 'Login'}
      </Link>
      {state.user.isConnected && (
        <CustomButton text="Logout" type="logout" onClick={handleLogout} />
      )}
    </nav>
  );
};

export default Navbar;
