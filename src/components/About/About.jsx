import { NavLink, useLocation, useParams } from 'react-router-dom';
import css from './About.module.css';
import { useEffect, useState } from 'react';
import AboutMovie from 'components/AboutMovie/AboutMovie';

const key = 'ef54c316f166b2a5913791e8b3f63a4a';

const IMG = 'https://image.tmdb.org/t/p/w500';
const options = {
  header: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU0YzMxNmYxNjZiMmE1OTEzNzkxZThiM2Y2M2E0YSIsInN1YiI6IjY0NzBkZmZhYzVhZGE1MDBjMWEzNzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fljmrABHLVGUf2e0aWKvdHeTeR0ruZNkP26DhsQLuYM',
    accept: 'application/json',
  },
};

function About() {
  const [{ genres, runtime, title, poster_path, overview }, setMovies] =
    useState({});
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    async function getSearchData(movieId) {
      const fetchData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${key}`,
        options
      );
      const data = await fetchData.json();
      setMovies(data);
    }

    getSearchData(movieId);
  }, [movieId]);

  function genreses() {
    const genreList = [];
    const names = genres
      ? genres.map(({ name }) => {
          return [...genreList, name];
        })
      : genreList;
    if (names.length) {
      return names.join(', ');
    }
    return null;
  }
  return (
    <main>
      <NavLink
        to={location?.state ?? '/'}
        state={location?.state}
        className={css.linkBack}
      >
        Go back
      </NavLink>
      <div className={css.about}>
        <img
          src={IMG + (poster_path || '/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg')}
          alt={title}
          className={css.img}
        />
        <div className={css.aboutText}>
          {title && <h2>{title}</h2>}
          {runtime && (
            <div>
              User score
              <span> {runtime} %</span>
            </div>
          )}
          <div>
            <h3>Overview</h3>
            {overview ? <span>{overview}</span> : <span>Not found</span>}
          </div>
          <div>
            <h3>Genres</h3>
            {genreses() ? <span>{genreses()}</span> : <span>Not found</span>}
          </div>
        </div>
      </div>
      <AboutMovie />
    </main>
  );
}

export default About;
