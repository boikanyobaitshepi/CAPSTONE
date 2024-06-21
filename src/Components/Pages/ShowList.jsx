import React from 'react';


const ShowList = (props) => {
    const [showAll, setShowAll] = React.useState(false);
    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
      };
      const showsToDisplay = showAll ? props.shows : props.shows.slice(0, 8);
      const hasMoreShows = props.shows.length > showsToDisplay.length;
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
      
  return (
    <div className="container border border-secondary  border-2 rounded ">
      <h2>All Shows</h2>
      <div className="row">
        {showsToDisplay.map((show) => (
          <div key={show.id} className="col-md-3 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={show.image} alt={show.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{show.title}</h5>
                <p className="card-text">{show.description.length > 100 ? show.description.slice(0, 100) + '...' : show.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Seasons: {show.seasons}</li>
                <li className="list-group-item">Last Updated: {formatUpdatedAt(show.updated)}</li>
                <li className="list-group-item">Genres: {show.genres.map(genreId => genreMapping[genreId]).join(', ')}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {hasMoreShows && props.shows.length > 8 && (
        <div className='d-grid  p-4' >
        <button className="btn btn-secondary " type="button" onClick={toggleShowAll}>
          Show More
        </button>
        </div>
      )}
    </div>
    
  );
};

export default ShowList;


