import './styles/Layout-styles.scss';
import Navbar from './Navbar';

const Layout = ({ children, className }) => {
  return (
    <>
      <Navbar />
      <main className={`main${className ? ` main-${className}` : ''}`}>
        <div className="banner">
          <div className="banner-content-container">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
