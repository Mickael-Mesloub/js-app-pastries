import './styles/HomePage-styles.scss';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import PastriesList from '../components/PastriesList';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';

const HomePage = () => {
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  //
  /** TODO:
   * ADD MIDDLEWARE TO VERIFY IS USER IS CONNECTED (endpoint /me)
   * edit isAdmin condition
   */

  return (
    <>
      <Layout className="home">
        <h2 className="cta-text top">Jouez</h2>
        <h3 className="cta-text bottom">
          et tentez de remporter une ou plusieurs pâtisseries
        </h3>

        <Link to="/game">Jouer</Link>
      </Layout>
      <section className="home-section">
        {!state.user.isConnected ? (
          <div className="home-not-connected">
            <p className="home-section-title">
              {'Vous devez être connecté(e) pour voir nos pâtisseries !'}
            </p>
            <CustomButton
              text="Me connecter"
              onClick={() => navigate('/login')}
            />
          </div>
        ) : (
          <>
            <h2 className="home-section-title">Nos pâtisseries disponibles</h2>
            <PastriesList isAdmin={false} />
          </>
        )}
      </section>
    </>
  );
};

export default HomePage;
