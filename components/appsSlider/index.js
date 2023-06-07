import Image from 'next/image';
import { useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import featurelogo from '../../public/images/featurelogo.svg';
import { isEmpty } from '../../helpers/helpers';
import { CardEnd, CardText, FeatureImg } from '../../styles/appsStyles';
import { Animated, SliderInner, SliderLine } from './styles';

const AppsSlider = ({ data, isDetailSlider }) => {
  const featurecontentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <>
          <SliderInner href={`/apps/directory/${item.slug}`} key={`slider_index_${index}`}>
            <FeatureImg>
              <Image
                src={item?.logo?.url}
                alt='main-logo'
                width={236}
                height={56}
                objectFit='contain'
                className='logo'
              />
            </FeatureImg>
            <CardText>
              <h3>{'Airtable'}</h3>
              <p>{'Lets clients to submit forms by surfacing a form created in Jotform. '}</p>
            </CardText>
            <CardEnd>
              <p>{'Scheduling'}</p>
            </CardEnd>
          </SliderInner>
        </>
      );
    });
  }, [data]);

  useEffect(() => {
    // Your code goes here
    const items = [...document.getElementsByClassName('list__item')];
    const containerElem = document.getElementById('containerElem');
    const leftSideOfContainer = containerElem.getBoundingClientRect().left;
    const listElem = document.getElementById('list');
    let currentLeftValue = 0;

    // Kick off for the animation function.
    let intervalId = setInterval(animationLoop, 10);

    // Add hover event listener to pause animation on hover
    containerElem.addEventListener('mouseenter', handleHover);
    containerElem.addEventListener('mouseleave', handleHover);

    function animationLoop() {
      const firstListItem = listElem.querySelector('.list__item:first-child');

      let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

      if (rightSideOfFirstItem === leftSideOfContainer) {
        currentLeftValue = -1;
        listElem.appendChild(firstListItem);
      }

      listElem.style.marginLeft = `${currentLeftValue}px`;
      currentLeftValue--;
    }

    function handleHover(event) {
      if (event.type === 'mouseenter') {
        clearInterval(intervalId); // Pause animation on hover
      } else if (event.type === 'mouseleave') {
        intervalId = setInterval(animationLoop, 10); // Resume animation on mouse leave
      }
    }

    // Cleanup the interval and remove event listeners on component unmount
    return () => {
      clearInterval(intervalId);
      containerElem.removeEventListener('mouseenter', handleHover);
      containerElem.removeEventListener('mouseleave', handleHover);
    };
  }, []);

  return (
    <>
      <Animated isDetailSlider={isDetailSlider}>
        <div class='wrap wrap--logobar' id='containerElem'>
          <ul class='list' id='list'>
            <li class='list__item'>
              <div className='card-gap'>{featurecontentView}</div>
            </li>
            <li class='list__item'>
              <div className='card-gap'>{featurecontentView}</div>
            </li>
            <li class='list__item'>
              <div className='card-gap'>{featurecontentView}</div>
            </li>
          </ul>
        </div>
        <SliderLine></SliderLine>
      </Animated>
    </>
  );
};

export default AppsSlider;
