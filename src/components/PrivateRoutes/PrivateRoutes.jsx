import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
