import RegisterForm from 'components/RegisterForm/RegisterForm';
import styles from './register-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';
import { signupUser } from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const handleSubmit = data => {
    dispatch(signupUser(data));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>Sing Up</h1>
      {authLoading && <p>Register in progres</p>}
      <RegisterForm onSubmit={handleSubmit} />
      {authError && <p className={styles.error}>{authError}</p>}
    </div>
  );
};
export default RegisterPage;
