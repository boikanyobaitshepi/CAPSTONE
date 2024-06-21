import React from 'react';
import ShowList from './ShowList';
import Header from '../Header'
import RandomImageCarousel from '../Carousel'

const Home = () => {

    const [shows, setShows] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    
  
    React.useEffect(() => {
      // Fetch the list of shows from the API
      fetch('https://podcast-api.netlify.app/shows')
        .then((response) => response.json())
        .then((data) => {
          setShows(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching shows:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
  

  return (
    <div className='bg-dark '>
      <Header />
      <RandomImageCarousel />
      <ShowList shows={shows} />
    </div>
  );
};

export default Home;
