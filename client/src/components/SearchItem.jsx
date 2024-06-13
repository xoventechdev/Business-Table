import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKeyword } from "../redux/state/BusinessSlice";

const SearchItem = () => {
  const searchString = useRef();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const value = searchString.current.value;
    if (value.trim() === "") {
      dispatch(setSearchKeyword("0"));
    } else {
      dispatch(setSearchKeyword(value));
    }
  };

  return (
    <div className="ms-2 d-flex">
      <input
        ref={searchString}
        className="form-control me-2"
        type="search"
        placeholder="Search by name and owner"
        name="search"
        aria-label="Search"
      />
      <button
        onClick={handleSubmit}
        className="btn btn-outline-success"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default SearchItem;
