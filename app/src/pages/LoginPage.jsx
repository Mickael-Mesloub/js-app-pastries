import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { login, logout } from '../store/auth';

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

  const handleLogout = () => {
    console.log('>>>>Logout');
    dispatch(logout());
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Login" />
      </form>
      <button onClick={handleLogout}>Logout</button>
    </Layout>
  );
};

export default LoginPage;
