'use client';

import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { Icon, SearchList, SearchListText } from '../../GuideNavbar/styles';
import { ArticleText } from '../../../styles/blogstyles';

export default function BlogSearchList({ filteredList, onCloseSearch }) {
  const router = useRouter();

  return (
    <>
      <ArticleText>Articles</ArticleText>
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
                    <SearchListText>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: item?.title
                        }}
                        className='blog-h4'
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
