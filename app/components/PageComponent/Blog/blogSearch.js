import React, { useCallback, useState, useEffect } from 'react';
import { Command } from 'cmdk';
import {
  SearachResultItem,
  getUniqueArray,
  isEmpty,
  removeEmptyElement,
  searchJsonForValueWithParent,
  stringToSlugyfy
} from '../../../helpers/helpers';
import { Main, OverLayDiv, PopUp } from '../../GuideNavbar/styles';
import BlogSearchList from './blogSearchList';
import SVGComponent from '../../../../public/images/svg/SVGComponent';

export default function BlogSearch({ articleData, onCloseSearch }) {
  const ref = React.useRef(null);
  const debounceTimerRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    // Update the body's CSS to set overflow to hidden
    document.body.style.overflow = 'hidden';

    // Clean up function to reset overflow and clear any pending debounce timer when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const highlighter = useCallback((inputValue, value) => {
    const term = inputValue.trim().toLowerCase();
    const searchTermsArray = term.split(/\s+/);
    const regex = new RegExp(searchTermsArray.map((term) => `(${term})`).join('|'), 'ig');

    // Use replace() to wrap the search term in <span> tags
    return value?.replace(regex, (match) => `<span class="blog-highlight">${match}</span>`);
  }, []);

  /**
   * Search ONLY by article title (item.title).
   * Keeps highlight + redirectLink behavior.
   */
  const performSearch = useCallback(
    (term) => {
      if (!term.trim()) {
        setFilteredList([]);
        return;
      }

      const searchTerm = term.trim().toLowerCase();
      const searchTermsArray = searchTerm.split(/\s+/);
      const searchRegex = new RegExp(searchTermsArray.map((t) => `(${t})`).join('|'), 'ig');

      // collect matches (title-only)
      let results = [];

      articleData?.forEach((item) => {
        const titleRaw = item?.title ?? '';
        const title = String(titleRaw);

        if (!title) return;

        // count regex matches in title
        const matches = title.match(searchRegex);
        const matchCount = matches ? matches.length : 0;

        if (matchCount > 0) {
          // simple score: occurrences + boost if startsWith
          const startsWithBoost = title.toLowerCase().startsWith(searchTermsArray[0]) ? 5 : 0;
          const score = matchCount * 10 + startsWithBoost;

          results.push({
            slug: item?.slug,
            value: title,
            score
          });
        }
      });

      // remove empties
      results = results.filter((r) => r?.slug && r?.value);

      // sort by score desc
      results.sort((a, b) => b.score - a.score);

      // unique by slug
      const seen = new Set();
      const unique = [];
      for (const r of results) {
        if (!seen.has(r.slug)) {
          seen.add(r.slug);
          unique.push(r);
        }
      }

      // map to final UI model (top 10)
      const finalResult = unique.slice(0, 10).map((r) => ({
        title: highlighter(term, r.value),
        redirectLink: `/blog/${r.slug}`
      }));

      setFilteredList(finalResult);
    },
    [articleData, highlighter]
  );

  /**
   * Debounced search handler - delays search execution by 500ms
   * Clears previous timeout if user types again before delay completes
   * This prevents excessive search operations on every keystroke
   */
  const handleSearch = useCallback(
    (term) => {
      setInputValue(term);

      // Clear the previous timeout if it exists (debounce logic)
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      // Set a new timeout to perform the search after 500ms
      debounceTimerRef.current = setTimeout(() => {
        performSearch(term);
      }, 500);
    },
    [performSearch]
  );

  //close model click on anywhere except search model
  const onClickOverlay = useCallback(
    (e) => {
      if (!isEmpty(e.target.className)) onCloseSearch();
    },
    [onCloseSearch]
  );

  return (
    <OverLayDiv onClick={onClickOverlay}>
      <Main>
        <PopUp isBlogSearch={true}>
          <div className='vercel'>
            <Command ref={ref} loop={true} shouldFilter={false}>
              <div className='search-icon'>
                <SVGComponent name='search-icon' width='20' height='20' viewBox='0 0 20 20' />
              </div>
              {!isEmpty(inputValue) && (
                <div className='close-icon' onClick={() => handleSearch('')}>
                  <SVGComponent name='search-close-icon' width='16' height='16' viewBox='0 0 16 16' />
                </div>
              )}
              <Command.Input
                autoFocus
                placeholder='Search'
                value={inputValue}
                onValueChange={(value) => {
                  handleSearch(value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    onCloseSearch();
                  }
                }}
              />
              {!isEmpty(inputValue) && isEmpty(filteredList) && (
                <Command.List>
                  <Command.Empty>
                    No results found for ‘{inputValue}’. <p> Try a different keyword?</p>
                  </Command.Empty>
                </Command.List>
              )}

              {!isEmpty(filteredList) && (
                <Command.List>
                  <BlogSearchList filteredList={filteredList} onCloseSearch={onCloseSearch} />
                </Command.List>
              )}
            </Command>
          </div>
        </PopUp>
      </Main>
    </OverLayDiv>
  );
}
