import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch images from the API
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setImages(data.products);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.thumbnail}
          alt="Carousel"
          style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          width='900px'
           height="500px"
        />
      ))}
    </div>
  );
};

export default ImageSlider;
