import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { login } from '../store/auth';
import './styles/LoginPage-styles.scss';
import AddPastryForm from '../components/CrudForms/AddPastryForm';
import BackOfficePage from './BackOfficePage';

const LoginPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('>>>>Login');
    dispatch(login(user));
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      {!state.user.isConnected ? (
        <Layout className="login">
          <>
            <form onSubmit={handleSubmit} className="form-login">
              <h2>Connectez-vous!</h2>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <input type="submit" value="Connexion" />
            </form>
          </>
        </Layout>
      ) : (
        <>
          <BackOfficePage />
        </>
      )}
    </>
  );
};

export default LoginPage;
