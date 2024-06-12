import { NavLink } from 'react-router-dom';
import menuItems from './menu-items';
import styles from './navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../redux/auth/auth-operations';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

const Navbar = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);
  // const isLogin = true;
  const filterMenu = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filterMenu.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={styles.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <h3>LOGO</h3>
        <ul className={styles.list}>{elements}</ul>
      </div>

      <div className={styles.prof}>
        <p>Profile</p>
        <button
          className={styles.btn}
          type="button"
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Exit
        </button>
      </div>
    </div>
  );
};
export default Navbar;
