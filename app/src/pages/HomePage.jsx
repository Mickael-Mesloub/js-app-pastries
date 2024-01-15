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
      <h1>Hello pastries!</h1>
      <Link to="/game">Game</Link>
    </Layout>
  );
};

export default HomePage;
