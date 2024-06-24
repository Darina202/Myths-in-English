import ExercisePage from 'pages/ExercisePage/ExercisePage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import HomePage from 'pages/HomePage/HomePage.jsx';
import LoginPage from 'pages/LoginPage/LoginPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import PublicRoutes from './PublicRoutes/PublicRoutes.jsx';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from '../redux/auth/auth-operations.js';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/ex" element={<ExercisePage />} />
          <Route path="/gallery/*" element={<GalleryPage />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
