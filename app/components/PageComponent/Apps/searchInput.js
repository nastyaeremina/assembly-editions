'use client';
import Image from 'next/image';
import { Input, InputWrap } from '../../../styles/appsStyles';

export default function SearchInput({ onSubmit, value, onChangeValue }) {
  return (
    <>
      <InputWrap onSubmit={onSubmit} isSearchbar={true}>
        <div>
          <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
          <Input
            placeholder='Find an app'
            value={value}
            onChange={(e) => {
              onChangeValue(e);
            }}
            type='search'
          />
        </div>
      </InputWrap>
    </>
  );
}
