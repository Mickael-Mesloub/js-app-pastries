import './styles/HomePage-styles.scss';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import PastriesList from '../components/PastriesList';

const HomePage = () => {
  // TODO: ADD MIDDLEWARE TO VERIFY IS USER IS CONNECTED (endpoint /me)

  return (
    <Layout className="home">
      <h2>
        Tentez de remporter une ou plusieurs pâtisseries grâce à notre jeu de
        yams!
      </h2>
      <Link to="/game">Jouer</Link>
      <PastriesList />
    </Layout>
  );
};

export default HomePage;
