import './styles/Layout-styles.scss';
import Navbar from './Navbar';

const Layout = ({ children, className }) => {
  return (
    <>
      <Navbar />
      <main className={`main${className ? ` main-${className}` : ''}`}>
        {children}
      </main>
    </>
  );
};

export default Layout;
