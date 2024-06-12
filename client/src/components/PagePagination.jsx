import React from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { TableList } from "../api/DataCaller";

const PagePagination = () => {
  const totalItem = useSelector((state) => state.business.totalBusiness);
  const perPage = useSelector((state) => state.business.perPage);
  const searchKey = useSelector((state) => state.business.searchKeyword);

  const handlePageClick = (event) => {
    TableList(event.selected + 1, perPage, searchKey);
  };

  return (
    <div className="col-12 mt-5">
      <nav aria-label="Page navigation example">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={totalItem / perPage}
          margin
          Pages
          Displayed={2}
          pageRange
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
        />
      </nav>
    </div>
  );
};

export default PagePagination;
