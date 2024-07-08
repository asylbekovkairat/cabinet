import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

import { useSetUser, useUser } from '~entities/shared/user';

interface RequireAuthProps {
  loginPath: string;
}

export const RequireAuth: React.FunctionComponent<RequireAuthProps> = ({ loginPath }) => {
  const user = useUser();
  const setUser = useSetUser();
  const location = useLocation();

  const [isUserReady, setUserReady] = useState(false);

  useEffect(() => {
    if (user) {
      setUserReady(true);
    }
  }, [user]);

  console.log('user', user);

  const isAuth = () => {
    if (isUserReady) {
      if (user) {
        return true;
      }

      if (!user) {
        setUser({ authState: null });
      }
    }

    return true;
  };

  if (!isAuth()) {
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
