import React from "react";

import SearchResults from "./SearchResults";

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Function to handle the search action when the search button is clicked
  const handleSearchButtonClick = () => {
    setSearchTerm(searchTerm.trim()); // Remove leading and trailing spaces from searchTerm
  };

  return (
    <nav className="navbar ">
      <div className="container-fluid ">
        <form className="d-flex mx-auto ">
          <input
            className="form-control  rounded-pill border border-5  ms-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            data-bs-theme="dark"
          />
          <button
            className="btn btn-outline-secondary ms-2"
            type="button"
            onClick={handleSearchButtonClick} // Handle the search action when the search button is clicked
          >
            Search
          </button>
        </form>
      </div>
      {searchTerm && <SearchResults searchTerm={searchTerm} />}
    </nav>
  );
}

export default Search;
