import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './HomeComponent.module.css';
const key = 'ef54c316f166b2a5913791e8b3f63a4a';
const URL = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${key}`;
const options = {
  header: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU0YzMxNmYxNjZiMmE1OTEzNzkxZThiM2Y2M2E0YSIsInN1YiI6IjY0NzBkZmZhYzVhZGE1MDBjMWEzNzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fljmrABHLVGUf2e0aWKvdHeTeR0ruZNkP26DhsQLuYM',
    accept: 'application/json',
  },
};
function HomeComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDefault() {
      const data = await fetch(URL, options);
      const respons = await data.json();
      setData(respons.results);
    }
    fetchDefault();
  }, []);

  return (
    <main>
      <h1 className={css.titleList}>Trending today</h1>
      <ol className={css.list}>
        {data.map(({ name, id, title }) => {
          return (
            <Link to={`movies/${id}`} key={id} className={css.link}>
              {title ?? name}
            </Link>
          );
        })}
      </ol>
    </main>
  );
}

export default HomeComponent;
