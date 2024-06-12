import React from "react";

import { useSelector } from "react-redux";

const FilterOptions = () => {
  return (
    <div>
      <select className="form-select" aria-label="Default select example">
        <option value={5}>5 per page</option>
        <option value={10}>15 per page</option>
        <option value={25}>25 per page</option>
        <option value={50}>50 per page</option>
        <option value={100}>100 per page</option>
      </select>
    </div>
  );
};

export default FilterOptions;
