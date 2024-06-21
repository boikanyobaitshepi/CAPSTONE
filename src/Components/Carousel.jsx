import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const RandomImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows") // Update the API URL here
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of objects with "image" and "title" keys
        const imageItems = data.map((item) => ({
          image: item.image,
          title: item.title,
        }));
        setImages(imageItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mb-4 ps-5 ">
      <div
        id="randomImageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((imageItem, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Link
                className="link-underline link-underline-opacity-0 "
                to={`/podcasts/${imageItem.id}`}
              >
                <img
                  src={imageItem.image}
                  className="d-block  mx-auto d-block rounded"
                  width="400"
                  height="400"
                  alt={`Slide ${index}`}
                />
              </Link>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#randomImageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#randomImageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default RandomImageCarousel;
