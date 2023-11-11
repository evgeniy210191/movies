import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const key = 'ef54c316f166b2a5913791e8b3f63a4a';

const IMG = 'https://image.tmdb.org/t/p/w500';
const options = {
  header: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU0YzMxNmYxNjZiMmE1OTEzNzkxZThiM2Y2M2E0YSIsInN1YiI6IjY0NzBkZmZhYzVhZGE1MDBjMWEzNzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fljmrABHLVGUf2e0aWKvdHeTeR0ruZNkP26DhsQLuYM',
    accept: 'application/json',
  },
};

function Cast() {
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${key}`;
  const [{ cast }, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const fetchData = await fetch(`${URL}`, options);
      const data = await fetchData.json();
      setMovie(data);
      setLoading(false);
    }

    fetchData();
  }, [URL]);

  return cast?.length ? (
    <ul>
      {cast.map(({ name, profile_path, character }) => {
        return (
          <li key={name}>
            <img
              src={IMG + (profile_path || '/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg')}
              alt={name}
              width={100}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  ) : loading ? (
    <p>Loading... Please, wait</p>
  ) : (
    <p>We do not have any cast</p>
  );
}

export default Cast;
