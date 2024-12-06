import { AuthLogin, AuthRegister } from '../pages/auth';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = () => {
  return {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <AuthLogin />,
      },
      {
        path: 'signup',
        element: <AuthRegister />,
      },
    ],
  };
};

export default AuthenticationRoutes;
