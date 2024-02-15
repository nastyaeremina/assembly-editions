import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import {
  SearachResultItem,
  getUniqueArray,
  isEmpty,
  removeEmptyElement,
  searchFAQForValueWithParent,
  searchJsonForValueWithParent,
  stringToSlugyfy,
  trimParagraphToSentence
} from '../../helpers/helpers';
import { Main, OverLayDiv, PopUp } from './styles';
import GuideSearchList from './guideSeachItem';
export default function GuideSearch({ articleData, onCloseSearch }) {
  const ref = React.useRef(null);
  const [inputValue, setInputValue] = React.useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    // Update the body's CSS to set overflow to hidden
    document.body.style.overflow = 'hidden';

    // Clean up function to reset overflow to its original value when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const searchInRichText = (richText, searchTerms) => {
    if (!richText) {
      return false;
    }

    if (typeof richText === 'string') {
      return searchTerms.every((term) => richText.toLowerCase().includes(term));
    }

    if (Array.isArray(richText.content)) {
      return richText.content.some((item) => searchInRichText(item, searchTerms));
    }

    return false;
  };

  const getTextFromNode = (node) => {
    if (!node || !node.content || node?.value) {
      return [node?.value];
    }

    return node.content.map((contentNode) => getTextFromNode(contentNode)).join('');
  };

  const searchInNode = (node, query) => {
    if (node.value && node.value.toLowerCase().includes(query.toLowerCase())) {
      return node.value;
    }

    if (node.content && node.content.length > 0) {
      for (const child of node.content) {
        const result = searchInNode(child, query); // Recursively search child nodes
        if (result) {
          if (node.nodeType.startsWith('heading-')) {
            return result; // Return the first matching node
          }
        }
      }
    }

    return null; // Return null if no match is found in the current node or its children
  };

  const highlighter = useCallback((inputValue, value, isConverted = false) => {
    const term = inputValue.trim().toLowerCase();
    const searchTermsArray = term.split(/\s+/);
    const regex = new RegExp(searchTermsArray.map((term) => `(${term})`).join('|'), 'ig');

    let sentence = value;
    if (isConverted && value) {
      sentence = trimParagraphToSentence(value, [term, ...searchTermsArray]);
    }
    // Use replace() to wrap the search term in <span> tags
    return sentence?.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  }, []);

  const handleSearch = useCallback(
    (term) => {
      setInputValue(term);
      setTimeout(() => {
        if (!term.trim()) {
          setFilteredList([]);
          return;
        }

        const searchTerm = term.trim().toLowerCase();
        //split the search term
        const searchTermsArray = searchTerm.split(/\s+/);
        // Create a regular expression for searching based on the individual terms in the search query
        const searchRegex = new RegExp(searchTermsArray.map((term) => `(${term})`).join('|'), 'ig');
        let result = [];

        articleData?.forEach((item) => {
          //search for the article detail content
          let detail = searchJsonForValueWithParent({
            json: item?.content?.json,
            query: searchTerm,
            slug: item?.slug,
            searchRegex
          });

          //search for the article title
          const searchArticleNameItem = SearachResultItem({
            value: item?.header,
            slug: item?.slug,
            parentType: 'heading-1',
            query: searchTerm,
            searchRegex,
            searchValue: item?.name
          });
          if (!isEmpty(searchArticleNameItem)) detail.push(searchArticleNameItem);

          //search for the article description
          const searchArticleDescriptionItem = SearachResultItem({
            value: item?.header,
            slug: item?.slug,
            parentType: 'page-description',
            query: searchTerm,
            searchRegex
          });
          if (!isEmpty(searchArticleDescriptionItem)) detail.push(searchArticleDescriptionItem);

          //search for the article FAQ section
          const faqDetail = searchFAQForValueWithParent({
            array: item?.faQsCollection?.items,
            query: searchTerm,
            slug: item?.slug,
            searchRegex
          });
          if (!isEmpty(faqDetail)) detail = detail.concat(faqDetail);
          // add faq result in main result array
          if (!isEmpty(detail)) result = result.concat(detail);
        });

        //removeempty items
        const filteredResult = removeEmptyElement(result);

        // Sort the array based on score in descending order
        filteredResult?.sort((a, b) => b.score - a.score);

        // Obtain unique results based on the 'slug' and 'value' fields
        const uniqueResult = getUniqueArray({ data: filteredResult, consideredFields: ['slug', 'value'] });

        // Create the final result by mapping over the unique results and enriching data
        const finalResult = uniqueResult?.slice(0, 10)?.map((item) => {
          // Find the corresponding article in the article data using its slug
          const article = articleData?.find((articleItem) => articleItem?.slug === item?.slug);
          // Determine if the item is converted based on its parentType(Big string)
          const isConverted = item?.parentType === 'paragraph' || item?.parentType === 'faqAnswer';

          // Construct the redirect link for the item, including potential parentValue
          let redirectLink = `/guide/${item?.slug}`;
          if (item?.parentValue) {
            redirectLink += `#${stringToSlugyfy(item?.parentValue)}`;
          }
          // Enrich the item with additional properties like title, value, iconCode, and redirectLink
          return {
            ...item,
            title: highlighter(term, `${article?.name}${item?.parentValue ? ` - ${item?.parentValue}` : ''}`),
            value: highlighter(term, item.value, isConverted),
            iconCode: article?.iconCode,
            redirectLink
          };
        });
        //sett the final result in state
        setFilteredList(finalResult);
      }, 500);
    },
    [articleData, highlighter]
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
        <PopUp>
          <div className='vercel'>
            <Command ref={ref} loop={true} shouldFilter={false}>
              <div className='search-icon'>
                <svg
                  class='sc-1cffe3d4-12 bUXUSd'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='#8A8F98'
                  role='img'
                  focusable='false'
                  aria-hidden='true'>
                  <path d='M9.8 6.8C9.8 5.14315 8.45685 3.8 6.8 3.8C5.14315 3.8 3.8 5.14315 3.8 6.8C3.8 8.45685 5.14315 9.8 6.8 9.8C8.45685 9.8 9.8 8.45685 9.8 6.8ZM9.49786 10.7707C8.72901 11.2941 7.80023 11.6 6.8 11.6C4.14903 11.6 2 9.45097 2 6.8C2 4.14903 4.14903 2 6.8 2C9.45097 2 11.6 4.14903 11.6 6.8C11.6 7.80023 11.2941 8.72901 10.7707 9.49786L13.7364 12.4636C14.0879 12.8151 14.0879 13.3849 13.7364 13.7364C13.3849 14.0879 12.8151 14.0879 12.4636 13.7364L9.49786 10.7707Z'></path>
                </svg>
              </div>
              <Command.Input
                autoFocus
                placeholder='Search guide…'
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
                  <Command.Empty>No results found for {inputValue}.</Command.Empty>
                </Command.List>
              )}

              {!isEmpty(filteredList) && (
                <Command.List>
                  <GuideSearchList filteredList={filteredList} onCloseSearch={onCloseSearch} />
                </Command.List>
              )}
            </Command>
          </div>
        </PopUp>
      </Main>
    </OverLayDiv>
  );
}
