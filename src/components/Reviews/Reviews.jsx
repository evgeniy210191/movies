import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const key = 'ef54c316f166b2a5913791e8b3f63a4a';

const options = {
  header: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU0YzMxNmYxNjZiMmE1OTEzNzkxZThiM2Y2M2E0YSIsInN1YiI6IjY0NzBkZmZhYzVhZGE1MDBjMWEzNzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fljmrABHLVGUf2e0aWKvdHeTeR0ruZNkP26DhsQLuYM',
    accept: 'application/json',
  },
};
function Reviews() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=${key}`;

  useEffect(() => {
    async function fetchData() {
      const fetchData = await fetch(`${URL}`, options);
      const data = await fetchData.json();
      setMovie(data);
      setLoading(false);
    }
    fetchData();
  }, [URL]);

  const reviews = movie?.results ?? [];
  return (
    <>
      {reviews.length ? (
        movie.results.map(({ author, content, created_at }) => {
          return (
            <ul key={author}>
              <li>
                <h3>Autor</h3>
                <p>{author}</p>
              </li>
              <li>
                <h3>Content</h3>
                <p>{content}</p>
              </li>
              <li>
                <h3>Date create</h3>
                <p>{created_at}</p>
              </li>
            </ul>
          );
        })
      ) : loading ? (
        <p>Loading... Please, wait</p>
      ) : (
        <p>We do not have any cast</p>
      )}
    </>
  );
}

export default Reviews;
