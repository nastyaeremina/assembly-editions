'use client';
import { Input, AppInputWrap, SearchIcon, InputWrapper, CloseIcon } from '../../../styles/appsStyles';
import { useEffect } from 'react';
import SVGComponent from '../../../../public/images/svg/SVGComponent';

export default function SearchInput({ onSubmit, value, onChangeValue, placeholder = 'Find an app' }) {
  // for focus and focus visible
  useEffect(() => {
    const onPointerDown = () => {
      document.body.classList.add('using-mouse');
      document.body.classList.remove('using-keyboard');
    };
    const onKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
        document.body.classList.remove('using-mouse');
      }
    };

    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('keydown', onKeyDown, true);

    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, []);

  // Handle clear input
  const handleClearInput = () => {
    onChangeValue({ target: { value: '' } });
  };
  return (
    <>
      <AppInputWrap onSubmit={onSubmit}>
        <InputWrapper>
          <SearchIcon>
            <SVGComponent name='search-icon' width='20' height='20' viewBox='0 0 20 20' className='search-icon' />
          </SearchIcon>
          <Input
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              onChangeValue(e);
            }}
            type='search'
            className='app-search-input'
          />
          {value && value.trim() !== '' && (
            <CloseIcon onClick={handleClearInput} style={{ cursor: 'pointer' }}>
              <SVGComponent name='search-close-icon' width='16' height='16' viewBox='0 0 16 16' />
            </CloseIcon>
          )}
        </InputWrapper>
      </AppInputWrap>
    </>
  );
}
