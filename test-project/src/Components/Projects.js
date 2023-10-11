import React, { useState } from 'react';
import '../Styles/Projects.css'
import firstPhoto from '../Images/1.jpg';
import secondPhoto from '../Images/2.jpg';
import thirdPhoto from '../Images/3.jpg';
import fourthPhoto from '../Images/4.jpg';

const images = [
    firstPhoto,
    secondPhoto,
    thirdPhoto,
    fourthPhoto
];

const ImageGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const currentImage = images[currentImageIndex];

    return (
            <div className="image-gallery">
                <h2 id="projects">Portfolio</h2>
                <div className="navigation">
                    <button className="prev-button" onClick={handlePrevClick}>&#9664;</button>
                    <img src={currentImage} alt={`Image ${currentImageIndex + 1}`} />
                    <button className="next-button" onClick={handleNextClick}>&#9654;</button>
                </div>
            </div>
    );
};

export default ImageGallery;
