import { useDispatch, useSelector } from 'react-redux';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import { logout } from '../store/auth';
import Logo from '../assets/images/logo-transparent.png';
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
      <div className="logo">
        <img
          src={Logo}
          width={250}
          height={250}
          aria-label="Company logo"
          alt="Company logo"
        />
      </div>
      <div className="links">
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
      </div>
    </nav>
  );
};

export default Navbar;
