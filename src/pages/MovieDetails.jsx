import About from 'components/About/About';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function MovieDetails() {
  return (
    <>
      <About />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
