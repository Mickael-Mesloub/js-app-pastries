import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import './styles/NotFoundPage-styles.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h2>404: NOT FOUND</h2>
      <p>Cette page n'existe pas.</p>
      <CustomButton
        text={"Revenir à l'accueil"}
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default NotFoundPage;
