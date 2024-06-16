import { useId, useState } from 'react';
import styles from './register-form.module.css';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
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

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { username, email, password } = state;

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="nameId">Username</label>
          <input
            value={username}
            name="username"
            id={nameId}
            onChange={handleChange}
            required
          />
        </div>
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
          Register
        </button>
      </form>
      <h4>
        Already have an account? <span>Sing in</span>
      </h4>
    </div>
  );
};

export default RegisterForm;
