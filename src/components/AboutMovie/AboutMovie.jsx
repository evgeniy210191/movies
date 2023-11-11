import { NavLink, useLocation } from 'react-router-dom';
import css from './AboutMovie.module.css';

function AboutMovie() {
  const location = useLocation();
  return (
    <ul className={css.link}>
      <NavLink to={'cast'} state={location.state}>
        Cast
      </NavLink>
      <NavLink to={'reviews'} state={location.state}>
        Reviews
      </NavLink>
    </ul>
  );
}

export default AboutMovie;
