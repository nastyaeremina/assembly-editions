import React from 'react';
import { Responsive } from '../../styles/homepageStyles';
import BusinessSlider from './businessslider';
import CustomBusinessSlider from './custombusinessslider';

/**
 * Slider Component
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data to be passed to both slider components
 * @returns {JSX.Element} - JSX markup for the Slider component
 */
const Slider = ({ data }) => {
  return (
    <>
      {/* For mobile device*/}
      <Responsive>
        <BusinessSlider data={data} />
      </Responsive>
      {/* For Desktop and tablet */}
      <CustomBusinessSlider data={data} />
    </>
  );
};

export default Slider;
