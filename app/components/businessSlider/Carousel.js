import { useState } from 'react';

/**
 * Carousel Component for handling touch-based carousel navigation
 * @param {Object} props - Component props
 * @param {Array} props.children - Array of carousel items
 * @param {number} props.currentIndex - Index of the current carousel item
 * @param {Function} props.setCurrentIndex - Function to update the current index
 * @returns {JSX.Element} - JSX markup for the carousel component
 */
export default function Carousel({ children, currentIndex, setCurrentIndex }) {
  // State to track touch start position and velocity

  const [startX, setStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);

  // Event handler for touch start
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setVelocity(0); // Reset velocity on touch start
  };
  // Event handler for touch move

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const difference = startX - touch.clientX;

    // Calculate velocity based on the touch movement
    const currentVelocity = difference / window.innerWidth;
    setVelocity(currentVelocity);

    // Calculate the new translation based on the touch movement
    const newTranslateX = -currentIndex * 100 - currentVelocity * 100;
    // Apply the new translation to the carousel inner container
    const carouselInner = document.querySelector('.carousel-inner');
    if (currentIndex === children.length - 1 && velocity > 0.1) {
      carouselInner.style.transition = 'transform 0s'; // Disable transition during touch move
    } else if (currentIndex === 0 && velocity < -0.1) {
      carouselInner.style.transition = 'transform 0s'; // Disable transition during touch move
    } else {
      carouselInner.style.transition = 'transform 0.2s ease'; // Disable transition during touch move
    }
    carouselInner.style.transform = `translate3d(${newTranslateX}%,0px,0px)`;
  };

  // Event handler for touch end
  const handleTouchEnd = () => {
    // Enable transition and apply final translation based on velocity
    const carouselInner = document.querySelector('.carousel-inner');

    if (velocity > 0.1) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
      carouselInner.style.transform = `translate3d(${-currentIndex * 100}%,0px,0px)`; // Update translation without animation
    } else if (velocity < -0.1) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
      carouselInner.style.transform = `translate3d(${-currentIndex * 100}%,0px,0px)`; // Update translation without animation
    } else {
      // Stay on the current slide
      carouselInner.style.transition = 'transform 0.2s ease'; // Re-enable transition
      carouselInner.style.transform = `translate3d(${-currentIndex * 100}%,0px,0px)`;
    }

    setVelocity(0); // Reset velocity on touch end
  };
  return (
    <div
      className='carousel-container'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <div className='carousel-inner' style={{ transform: `translate3d(${-currentIndex * 100}%,0px,0px)` }}>
        {children}
        {children[0]}
      </div>
    </div>
  );
}
