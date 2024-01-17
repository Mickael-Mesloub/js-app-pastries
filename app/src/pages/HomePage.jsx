import './styles/HomePage-styles.scss';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { pastries } = useSelector((state) => state.pastries);

  pastries.forEach((pastry) => {
    console.log(pastry);
  });
  return (
    <Layout className="home">
      <h2>
        Tentez de remporter une ou plusieurs pâtisseries grâce à notre jeu de
        yams!
      </h2>
      <Link to="/game">Jouer</Link>
    </Layout>
  );
};

export default HomePage;
