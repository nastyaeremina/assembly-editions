import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import { isEmpty } from '../../helpers/helpers';
import { Animated, SliderIcon, SliderInner, SliderLine, SliderSub } from './styles';

export default function FeatureAnimated({ data, isDetailSlider }) {
  const featurecontentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <>
          <SliderInner href={`/automations/directory/${item?.slug}`} key={`slider_index_${index}`}>
            <SliderSub>
              <h4>{item?.name}</h4>
              <p>{item?.description}</p>
            </SliderSub>
            <SliderIcon>
              {item?.productLogosCollection?.items?.map((logo, index) => {
                return (
                  <Image
                    key={`automation_logo_${index}`}
                    src={logo?.url}
                    alt='logo'
                    width={40}
                    height={40}
                    className='logo'
                  />
                );
              })}
            </SliderIcon>
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
      currentLeftValue -= 1;
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
          <li class='list__item'>
            <div className='card-gap'>{featurecontentView}</div>
          </li>
        </ul>
      </div>
      <SliderLine></SliderLine>
    </Animated>
  );
}
