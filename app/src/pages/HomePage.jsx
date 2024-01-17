import './styles/HomePage-styles.scss';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import PastriesList from '../components/PastriesList';

const HomePage = () => {
  // TODO: ADD MIDDLEWARE TO VERIFY IS USER IS CONNECTED (endpoint /me)

  return (
    <>
      <Layout className="home">
        <div className="home-banner">
          <div className="cta-container">
            <h2 className="cta-text top">Jouez</h2>
            <h3 className="cta-text bottom">
              et tentez de remporter une ou plusieurs pâtisseries
            </h3>

            <Link to="/game">Jouer</Link>
          </div>
        </div>
      </Layout>
      {/* <PastriesList /> */}
    </>
  );
};

export default HomePage;
