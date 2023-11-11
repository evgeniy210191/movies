import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

function isActive({ isActive }) {
  return isActive ? `${css.navLink} ${css.active}` : `${css.navLink}`;
}
function Nav() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={isActive}>
        Home
      </NavLink>
      <NavLink to="movies" className={isActive}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Nav;
