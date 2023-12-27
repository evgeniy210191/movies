import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Search.module.css';
const key = 'ef54c316f166b2a5913791e8b3f63a4a';
const URL = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${key}`;
const options = {
  header: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU0YzMxNmYxNjZiMmE1OTEzNzkxZThiM2Y2M2E0YSIsInN1YiI6IjY0NzBkZmZhYzVhZGE1MDBjMWEzNzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fljmrABHLVGUf2e0aWKvdHeTeR0ruZNkP26DhsQLuYM',
    accept: 'application/json',
  },
};

async function getSearchData(searchText) {
  const fetchData = await fetch(
    `${URL}&query=${searchText.trim()}&page=1`,
    options
  );
  const data = await fetchData.json();
  return data.results;
}
function Search() {
  const [serchedData, setSearchedData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchText = searchParams.get('movie') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.search) {
      const sershTextSaved = location.state.search.slice(
        location.state.search.indexOf('=') + 1,
        location.state.search.length
      );

      async function getSearchData() {
        const fetchData = await fetch(
          `${URL}&query=${sershTextSaved}&page=1`,
          options
        );
        const data = await fetchData.json();
        setSearchedData(data?.results);
      }
      getSearchData();
    }
  }, [location?.state?.search]);

  function hendleChange(event) {
    setSearchParams({ movie: event.target.value });
  }
  async function onSubmit(event) {
    event.preventDefault();
    if (searchText.trim() === '') {
      setSearchParams({});
      setSearchedData([{ name: 'Enter movie title ' }]);
      return;
    }
    const data = await getSearchData(searchText);
    setSearchedData(data);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <h2>Search your favorite movies</h2>
          <input type="text" placeholder="search" onChange={hendleChange} />
        </label>
        <button className={css.searchButton} type="submit">
          search
        </button>
      </form>
      <ol className={css.list}>
        {serchedData.length ? (
          serchedData.map(({ name, id, title }) => {
            return (
              <Link to={`${id}`} key={id} className={css.link} state={location}>
                ☆ {title ?? name}
              </Link>
            );
          })
        ) : (
          <p className={css.link}>Not found</p>
        )}
      </ol>
    </>
  );
}

export default Search;
