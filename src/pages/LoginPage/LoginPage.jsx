import LoginForm from 'components/LoginForm/LoginForm';
import styles from './login-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';
import { loginUser } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const handleSubmit = data => {
    dispatch(loginUser(data));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>Sing In</h1>
      {authLoading && <p>Login in progres</p>}
      <LoginForm onSubmit={handleSubmit} />
      {authError && <p className={styles.error}>{authError}</p>}
    </div>
  );
};
export default LoginPage;
