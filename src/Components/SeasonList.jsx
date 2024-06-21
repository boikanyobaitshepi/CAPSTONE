import React from "react";
import { Link, useParams } from "react-router-dom";

function Seasons() {
  const [season, setSeasons] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const params = useParams();

  React.useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setSeasons(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [params.id]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div key={season.id} className="col-md-3 mb-4 mx-auto mt-3 ">
          <div className="card p-3 " style={{ width: "30rem" }}>
            <img src={season.image} alt="image" />
            <div className="card-body">
              <h5 className="card-title">{season.title}</h5>
              {season.seasons.map((show, index) => (
                <div key={index}>
                  <button
                    className="btn btn-outline-secondary mb-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#season-${index}`}
                    aria-expanded="false"
                    aria-controls={`season-${index}`}
                  >
                    Season: {show.title}
                  </button>

                  <div className="collapse" id={`season-${index}`}>
                    {show.episodes.map((episode, idx) => (
                      <Link
                        to={`/seasonList/${season.id}`}
                        className="d-block link-underline link-underline-opacity-0 text-white fw-lighter "
                        key={idx}
                      >
                        {episode.title}
                      </Link>
                    ))}
                  </div>
                  
                </div>
              ))}
              <Link to={`/podcasts`} className="btn btn-outline-light rounded-pill d-block mt-3"> Back to Podcasts</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Seasons;
