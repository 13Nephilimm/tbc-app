import React from "react";
import "./searchbar.css";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="search-section">
      <div className="search-container">
        <MdSearch size="3.6rem" className="search-icon" />
        <input className="search-input" type="text" placeholder="Search..." />
      </div>
      <button className="secondary-btn">Search</button>
    </div>
  );
};

export default SearchBar;
