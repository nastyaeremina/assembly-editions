'use client';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ReactMarkdown from 'react-markdown';
import { isEmpty, separateSpecialChar } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import ZoomImg from '../../zoomImage';
import ButtonGroup from '../../ButtonGroup/buttonGroup';
import {
  ExploreSection,
  TopView,
  BottomSection,
  SignatureSection,
  LeftWrap,
  RightWrap,
  TabWrap,
  TabView,
  LastSection,
  SignBox,
  SignImgView,
  ActiveTab,
  BtnWrap
} from './styles';

const defaltDescription =
  ' If you’d like to see what the user experience can be like for your clients, you can create a client account in a demo portal we have set up. We’ve customized this demo portal to highlight some of the features that are most relevant.';

/**
 * ExploreTab Component
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data for tabs
 * @param {string} props.title - Title of the section
 * @param {string} props.description - Description of the section
 * @param {string} props.secondaryButtonLink - URL for the secondary button
 * @param {string} props.primaryButtonLink - URL for the primary button
 * @param {string} props.secondaryButtonText - Text for the secondary button
 * @param {string} props.primaryButtonText - Text for the primary button
 * @param {boolean} props.isRichText - Flag indicating if the description is rich text
 * @param {boolean} props.isStandardPage - Flag indicating if it is a standard page
 * @returns {JSX.Element} - JSX markup for the ExploreTab component
 */

export default function ExploreTab({
  data,
  title = 'Explore the client experience.',
  description = defaltDescription,
  secondaryButtonLink,
  primaryButtonLink,
  secondaryButtonText = 'Create client account in a demo portal',
  primaryButtonText,
  isRichText = false,
  isStandardPage = false
}) {
  const [selectedTabIbndex, setSelectedTabIbndex] = useState(0);
  const onClickTab = useCallback((index) => {
    setSelectedTabIbndex(index);
  }, []);

  const tabListView = useMemo(() => {
    return data?.map((item, index) => {
      return (
        <TabView
          className={index === selectedTabIbndex ? 'activetab' : ''}
          key={`tablist_index_${index}`}
          onClick={() => onClickTab(index)}>
          <span>{`${index < 9 ? '0' : ''}${index + 1}`}</span>
          {index === selectedTabIbndex && (
            <ActiveTab>
              <Image src='/images/verticalline.svg' alt='line-icon' width={1} height={51} />
            </ActiveTab>
          )}
        </TabView>
      );
    });
  }, [data, onClickTab, selectedTabIbndex]);

  const tabDetailView = useMemo(() => {
    if (isEmpty(data?.[selectedTabIbndex])) return null;
    return (
      <LeftWrap>
        <h3>{data?.[selectedTabIbndex]?.title}</h3>
        <p>{data?.[selectedTabIbndex]?.description}</p>
      </LeftWrap>
    );
  }, [data, selectedTabIbndex]);

  const tabImageView = useMemo(() => {
    if (isEmpty(data?.[selectedTabIbndex]?.image?.url)) return null;
    return (
      <Container>
        <SignBox>
          <SignImgView>
            {/* <Image src={data?.[selectedTabIbndex]?.image?.url} alt='main-logo' width={1154} height={725} /> */}
            <ZoomImg src={data?.[selectedTabIbndex]?.image?.url} alt='main-logo' width={1154} height={725} />
          </SignImgView>
        </SignBox>
      </Container>
    );
  }, [data, selectedTabIbndex]);

  return (
    <>
      <ExploreSection isStandardPage={isStandardPage}>
        <Container>
          <TopView>
            <h2>
              {title && (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: separateSpecialChar(title)
                    }}
                  />
                </>
              )}
            </h2>
            {description && isRichText ? (
              documentToReactComponents(description)
            ) : (
              <ReactMarkdown>{description}</ReactMarkdown>
            )}
            <ButtonGroup
              primaryButtonLink={primaryButtonLink}
              primaryButtonText={primaryButtonText}
              secondaryButtonLink={secondaryButtonLink}
              secondaryButtonText={secondaryButtonText}
            />
          </TopView>
        </Container>
        <BottomSection>
          <Container>
            <SignatureSection>
              {tabDetailView}
              <RightWrap>
                <TabWrap>{tabListView}</TabWrap>
              </RightWrap>
            </SignatureSection>
          </Container>
        </BottomSection>
        <LastSection>{tabImageView}</LastSection>
      </ExploreSection>
    </>
  );
}
