import Nav from 'components/Nav/Nav';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

function Layout() {
  return (
    <div className={css.wrapper}>
      <header>
        <Nav />
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
