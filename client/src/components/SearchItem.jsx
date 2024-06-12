import React from "react";
import { useSelector } from "react-redux";

const SearchItem = () => {
  const totalItem = useSelector((state) => state.business.totalBusiness);
  const perPage = useSelector((state) => state.business.perPage);
  const pagNumber = useSelector((state) => state.business.pageNumber);
  const searchKey = useSelector((state) => state.business.searchKeyword);

  const handleSubmit = (e) => {
    e.preventDefault();
    TableList(pagNumber, perPage, e.target.search);
  };

  return (
    <div className="ms-2">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          name="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          onClick={() => handleSubmit}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchItem;
