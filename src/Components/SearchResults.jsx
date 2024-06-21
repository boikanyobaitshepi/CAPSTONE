import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ searchTerm }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of shows from the API
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
        setLoading(false);
      });
  }, []);

  const filteredShows = shows.filter((show) =>
    show.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const genreMapping = {
    1: "Personal Growth",
    2: "True Crime and Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  };

  const formatUpdatedAt = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  if (loading) {
    return <div>Loading Shows...</div>;
  }

  return (
    <div className="container p-3">
      <h2>Search Results</h2>
      <div className="row">
        {filteredShows.length > 0 ? (
          filteredShows.map((show) => (
            <div key={show.id} className="col-md-3 mb-4 p-3">
              <Link
                className="link-underline link-underline-opacity-0 "
                to={`/podcasts/${show.id}`}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={show.image}
                    alt={show.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{show.title}</h5>
                    <p className="card-text">
                      {show.description.length > 100
                        ? show.description.slice(0, 100) + "..."
                        : show.description}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Seasons: {show.seasons}</li>
                    <li className="list-group-item">
                      Last Updated: {formatUpdatedAt(show.updated)}
                    </li>
                    <li className="list-group-item">
                      Genres:{" "}
                      {show.genres
                        .map((genreId) => genreMapping[genreId])
                        .join(", ")}
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
