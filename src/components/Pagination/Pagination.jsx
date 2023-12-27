import Pagination from 'react-js-pagination';
import css from './Pagination.module.css';
const view = window.innerWidth;
const amountPage = view >= 500 ? 3 : 1;
function PaginationList({ handlePageChange, activePage }) {
  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={499}
        pageRangeDisplayed={amountPage}
        onChange={handlePageChange}
        prevPageText={'prev'}
        nextPageText={'next'}
        innerClass={css.pagination}
        activeLinkClass={css.active}
        itemClassPrev={css.changeState}
        itemClassNext={css.changeState}
        linkClass={css.page}
        itemClassLast={css.hidden}
        itemClassFirst={css.hidden}
      />
    </div>
  );
}

export default PaginationList;
