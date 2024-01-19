import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth';

const useMe = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //   const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/me`, {
          credentials: 'include',
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          //   dispatch(logout());
        }
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de l'authentification :",
          error
        );
        setIsAuthenticated(false);
        //   dispatch(logout());
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  return { isAuthenticated, isLoading };
};

export default useMe;
