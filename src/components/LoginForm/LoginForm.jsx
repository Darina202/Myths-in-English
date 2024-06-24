import { useId, useState } from 'react';
import styles from './login-form.module.css';
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = state;

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="emailId">Email</label>
          <input
            value={email}
            type="email"
            name="email"
            id={emailId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="passwordId">Password</label>
          <input
            value={password}
            type="password"
            name="password"
            id={passwordId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.btn}>
          Log In
        </button>
      </form>
      <p className={styles.text}>
        Don't have an account yet?
        <Link to="/register" className={styles.link}>
          Sing in
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
