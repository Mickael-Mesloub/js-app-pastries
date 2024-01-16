import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { login, logout } from '../store/user';

const LoginPage = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('>>>>Login');
    dispatch(
      login({
        email: 'super-email@gmail.com',
        password: '123',
        isConnected: true,
      })
    );
  };

  const handleLogout = () => {
    console.log('>>>>Logout');
    dispatch(logout());
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" value="Login" />
      </form>
      <button onClick={handleLogout}>Logout</button>
    </Layout>
  );
};

export default LoginPage;
