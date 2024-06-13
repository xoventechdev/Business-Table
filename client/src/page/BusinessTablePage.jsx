import React, { useEffect, useState } from "react";
import { TableList } from "../api/DataCaller";
import ItemList from "../components/ItemList";
import { useSelector } from "react-redux";
import PagePagination from "../components/PagePagination";
import SearchItem from "../components/SearchItem";
import FilterOptions from "../components/FilterOptions";

const BusinessTablePage = () => {
  const perPage = useSelector((state) => state.business.perPage);
  const searchKey = useSelector((state) => state.business.searchKeyword);

  useEffect(() => {
    TableList(1, perPage, searchKey);
  }, [perPage, searchKey]);

  return (
    <div className="container">
      <div className="row">
        <div className="card text-center">
          <div className="card-body text-dark-emphasis">
            <h2 className="card-title text-primary">Business List</h2>
            <div className="d-flex justify-content-end mt-3 py-3">
              <FilterOptions />
              <SearchItem />
            </div>
            <ItemList />
            <PagePagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTablePage;
