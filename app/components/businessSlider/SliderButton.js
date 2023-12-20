// RoundButtonSection.js
import React from 'react';

/**
 * RoundButtonSection Component
 * @param {Object} props - Component props
 * @param {number} props.count - The length of the data array
 * @param {number} props.currentIndex - The current index of the active round button
 * @param {Function} props.setCurrentIndex - Function to set the current index when a round button is clicked
 * @returns {JSX.Element} - JSX markup for the RoundButtonSection component
 */

const SliderButton = ({ count, currentIndex, setCurrentIndex }) => {
  return (
    <div className='roundbutton-section'>
      {[...Array(count).keys()].map((index) => (
        <div
          key={`slider_dot_${index}`}
          className={currentIndex === index ? 'active-round' : 'round'}
          onClick={() => {
            setCurrentIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default SliderButton;
