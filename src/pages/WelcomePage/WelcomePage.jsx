import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>WelcomePage</h1>
      <Link to="/register">Register</Link>
      <Link to="/register">Login</Link>
    </div>
  );
};
export default WelcomePage;
