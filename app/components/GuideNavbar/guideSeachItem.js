'use client';

import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { Icon, SearchList, SearchListText } from './styles';

export default function GuideSearchList({ filteredList, onCloseSearch }) {
  const router = useRouter();

  return (
    <>
      {filteredList?.map((item, index) => {
        return (
          <>
            <Command.Item
              value={`item_index${index}`}
              onSelect={() => {
                router.push(item?.redirectLink);
                onCloseSearch();
              }}>
              <SearchList>
                <div>
                  <div key={index} className='list'>
                    <Icon className='svgicon'>
                      <div dangerouslySetInnerHTML={{ __html: item?.iconCode }} />
                    </Icon>
                    <SearchListText>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: item?.title
                        }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.value
                        }}
                        className='text'
                      />
                    </SearchListText>
                  </div>
                </div>
              </SearchList>
            </Command.Item>
          </>
        );
      })}
    </>
  );
}
