import React from 'react';
import Slider from 'react-slick';
import './Birds.css'; // Ensure to import your CSS

const importAll = (r) => {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item)); // Store each image as an individual entry
  });
  return images; // Return an array of images
};

// Adjust the path to your images folder
const images = importAll(require.context('../images/birds', false, /\.(png|jpe?g|svg|JPEG)$/));

const Birds = () => {
  const settings = {
    dots: false, // Set to false to hide bullet points
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, // Adjust height based on the current slide
    arrows:false
  };

  return (
    <div className="slider-container"> {/* Add a container for overflow */}
      <h1>Birds</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image} 
              alt={`Bird ${index + 1}`} 
              className="image" 
              loading="lazy" // Add this line
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Birds;
