import Pagination from 'react-js-pagination';
import css from './Pagination.module.css';

function PaginationList({ handlePageChange, activePage }) {
  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={499}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        prevPageText={'prev'}
        nextPageText={'next'}
        innerClass={css.pagination}
        activeLinkClass={css.active}
        itemClassPrev={css.changeState}
        itemClassNext={css.changeState}
        linkClass={css.page}
      />
    </div>
  );
}

export default PaginationList;
