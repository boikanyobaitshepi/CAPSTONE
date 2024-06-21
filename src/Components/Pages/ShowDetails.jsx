import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ShowDetails() {
  const [podcast, setPodcast] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const params = useParams();

  React.useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPodcast(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [params.id]);

 
  return (
    <div className='bg-dark '>
    <div className="container p-3  ">
      <div className="row">
        {loading ? (
          <h2>Loading...</h2>
          
        ) : podcast ? (
          
          <div key={podcast.id} className="col-md-3  mx-auto ">
            
            <div className="card p-4 " style={{ width: '30rem' }}>
              <img src={podcast.image} alt={podcast.title} className="card-img-top" />
              <div className="card-body ">
                <h5 className="card-title">{podcast.title}</h5>
                <button
                      className="btn btn-outline-light rounded-pill mb-2 d-block"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#description-${podcast.id}`}
                      aria-expanded="false"
                      aria-controls={`description-${podcast.id}`}
                    >
                      Show Description
                    </button>
                    <div className="collapse" id={`description-${podcast.id}`}>
                      <p className="fw-semibold ">{podcast.description}</p>
                    </div>
              
              <Link to={`/showDetails/${podcast.id}`} className="btn btn-outline-light rounded-pill"> Seasons</Link>
              <Link to={'/podcasts'} className="btn btn-outline-light rounded-pill d-block mt-3"> Back to Podcasts</Link>
              </div>
              
            </div>
          </div>

        ) : (
          <h2 className=''>Podcast not found.</h2>
        )}
      </div>
      
    </div>
    </div>
  );
}

export default ShowDetails;
