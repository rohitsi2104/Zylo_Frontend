import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes({isLoggedIn}: { isLoggedIn: boolean }) {
  return useRoutes([AuthenticationRoutes(), MainRoutes(isLoggedIn)]);
}
