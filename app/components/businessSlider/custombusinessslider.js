import { Animated, HomeSlider } from '../../components/businessSlider/customstyles';
import { SliderWrap } from './styles';

/**
 * BusinessSlider Component for Desktop
 * @param {Object} props - Component props
 * @param {Function} props.renderSliderView - Function that renders the view for each slider item.
 * @param {boolean} [props.isPauseOnHover=true] - Flag indicating whether slider auto-play pauses on hover.
 * @returns {JSX.Element} - JSX markup for the CustomBusinessSlider component
 */
const CustomBusinessSlider = ({ renderSliderView, isPauseOnHover = true }) => {
  /**
   * Generates the view for each data item in the slider.
   * @returns {Array} - Array of JSX elements representing each data item in the slider
   */

  // JSX markup for the CustomBusinessSlider component
  return (
    <>
      {/* Animated container for the slider */}
      <Animated>
        <SliderWrap>
          {/* HomeSlider container for styling */}
          <HomeSlider isPauseOnHover={isPauseOnHover}>
            <div id='container' data-animated>
              {/* List container for the slider items */}
              <ul id='list'>
                {/* List item containing the generated view for each data item */}
                <li>{renderSliderView}</li>
                {/* Duplicates the items in the list to create a continuous looping effect. */}
                <li aria-hidden='true'>{renderSliderView}</li>
                <li aria-hidden='true'>{renderSliderView}</li>
              </ul>
            </div>
          </HomeSlider>
        </SliderWrap>
      </Animated>
    </>
  );
};

export default CustomBusinessSlider;
