'use client';
import Image from 'next/image';
import { useEffect, useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { AppSliderLine, AppsAnimated, SliderInnerBox } from './styles';

const AppsHeroSlider = ({ data: dataList }) => {
  const featurecontentView = useMemo(() => {
    if (isEmpty(dataList)) return null;
    return dataList?.map((item, index) => {
      return (
        <>
          <SliderInnerBox
            // href={`/apps/directory/${item?.slug}`}
            key={`slider_index_${index}`}>
            <Image
              src={item?.icon.url}
              alt='main-logo'
              width={46}
              height={46}
              objectFit='contain'
              className='appshero-logo'
            />
          </SliderInnerBox>
        </>
      );
    });
  }, [dataList]);

  useEffect(() => {
    // Your code goes here
    const items = [...document.getElementsByClassName('list__item1')];
    const containerElem = document.getElementById('containerElem1');
    const leftSideOfContainer = containerElem.getBoundingClientRect().left;
    const listElem = document.getElementById('list1');
    let currentLeftValue = 0;

    // Kick off for the animation function.
    let intervalId = setInterval(animationLoop, 25);

    function animationLoop() {
      const firstListItem = listElem.querySelector('.list__item1:first-child');

      let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

      if (rightSideOfFirstItem === leftSideOfContainer) {
        currentLeftValue = -1;
        listElem.appendChild(firstListItem);
      }

      listElem.style.marginLeft = `${currentLeftValue}px`;
      currentLeftValue--;
    }

    // Cleanup the interval and remove event listeners on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const items = [...document.getElementsByClassName('list__item1')];
    const containerElem2 = document.getElementById('containerElem2');
    let rightSideOfContainer2 = containerElem2.getBoundingClientRect().right;
    const listElem2 = document.getElementById('list2');
    let currentLeftValue = -containerElem2.offsetWidth;

    // Kick off the animation function.
    let intervalId2 = setInterval(animationLoop2, 25);

    function animationLoop2() {
      const firstListItem = listElem2.querySelector('.list__item1:first-child');
      const leftSideOfFirstItem = firstListItem.getBoundingClientRect().left;

      if (leftSideOfFirstItem >= rightSideOfContainer2) {
        const lastListItem = listElem2.querySelector('.list__item1:last-child');
        const rightSideOfLastItem = lastListItem.getBoundingClientRect().right;

        if (rightSideOfLastItem <= rightSideOfContainer2) {
          currentLeftValue -= lastListItem.offsetWidth;
          listElem2.prepend(lastListItem);
        }
      }

      listElem2.style.marginLeft = `${currentLeftValue}px`;
      if (currentLeftValue >= -100) {
        currentLeftValue = -containerElem2.offsetWidth;
      } else {
        currentLeftValue++;
      }
    }

    function handleResize() {
      rightSideOfContainer2 = containerElem2.getBoundingClientRect().right;
    }

    // Listen for window resize to update the container width
    window.addEventListener('resize', handleResize);

    // Cleanup the interval, remove event listeners, and stop listening for resize on component unmount
    return () => {
      clearInterval(intervalId2);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Your code goes here
    const items = [...document.getElementsByClassName('list__item1')];
    const containerElem3 = document.getElementById('containerElem3');
    const leftSideOfContainer3 = containerElem3.getBoundingClientRect().left;
    const listElem3 = document.getElementById('list3');
    let currentLeftValue = 0;

    // Kick off for the animation function.
    let intervalId = setInterval(animationLoop, 25);

    function animationLoop() {
      const firstListItem = listElem3.querySelector('.list__item1:first-child');

      let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

      if (rightSideOfFirstItem === leftSideOfContainer3) {
        currentLeftValue = -1;
        listElem3.appendChild(firstListItem);
      }

      listElem3.style.marginLeft = `${currentLeftValue}px`;
      currentLeftValue = currentLeftValue - 1;
    }

    // Cleanup the interval and remove event listeners on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <AppsAnimated>
        <div class='wrap wrap--logobar' id='containerElem1'>
          <ul class='list1' id='list1'>
            <li class='list__item1'>
              <div className='card-gap'>{featurecontentView}</div>
            </li>
            <li class='list__item1'>
              <div className='card-gap'>{featurecontentView}</div>
            </li>
          </ul>
        </div>
        <AppSliderLine></AppSliderLine>
      </AppsAnimated>
      <AppsAnimated>
        <div class='wrap wrap--logobar' id='containerElem2'>
          <ul class='list1' id='list2'>
            <li class='list__item1'>
              <div className='card-gap'>{featurecontentView}</div>
            </li>
          </ul>
        </div>
        <AppSliderLine></AppSliderLine>
      </AppsAnimated>
      <AppsAnimated>
        <div class='wrap wrap--logobar' id='containerElem3'>
          <ul class='list1' id='list3'>
            <li class='list__item1'>
              <div className='card-gap'>{featurecontentView}</div>
            </li>
            <li class='list__item1'>
              <div className='card-gap'>{featurecontentView}</div>
            </li>
          </ul>
        </div>
        <AppSliderLine></AppSliderLine>
      </AppsAnimated>
    </>
  );
};

export default AppsHeroSlider;
