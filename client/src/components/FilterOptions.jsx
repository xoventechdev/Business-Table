import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setPerPage } from "../redux/state/BusinessSlice";

const FilterOptions = () => {
  let dispatch = useDispatch();
  const perPages = (e) => {
    dispatch(setPerPage(e));
  };

  return (
    <div>
      <select
        onChange={(e) => perPages(e.target.value)}
        className="form-select"
        aria-label="Default select example"
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={25}>25 per page</option>
        <option value={50}>50 per page</option>
        <option value={100}>100 per page</option>
      </select>
    </div>
  );
};

export default FilterOptions;
