import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Container, SecondryButton } from '../../../styles/commonStyles';
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
  BtnWrap,
  IconView,
  Tooltip
} from './styles';

export default function ExploreTab({ data }) {
  const [selectedTabIbndex, setSelectedTabIbndex] = useState(0);

  const onClickTab = useCallback((index) => {
    setSelectedTabIbndex(index);
  }, []);

  const tabListView = useMemo(() => {
    return data?.map((item, index) => {
      return <TabView className={index === selectedTabIbndex ? 'activetab' : ""} key={`tablist_index_${index}`} onClick={() => onClickTab(index)}>
        <span>{`${index < 9 ? "0" : ""}${index + 1}`}</span>
        {index === selectedTabIbndex &&
          <ActiveTab>
            <Image src='/images/verticalline.svg' alt='line-icon' width={1} height={51} />
          </ActiveTab>}
      </TabView>
    })
  }, [data, onClickTab, selectedTabIbndex])

  const tabDetailView = useMemo(() => {
    if (isEmpty(data?.[selectedTabIbndex])) return null
    return <LeftWrap>
      <h4>{data?.[selectedTabIbndex]?.title}</h4>
      <p>{data?.[selectedTabIbndex]?.description}</p>
    </LeftWrap>
  }, [data, selectedTabIbndex])

  const tabImageView = useMemo(() => {
    if (isEmpty(data?.[selectedTabIbndex]?.image?.url)) return null
    return <Container>
      <SignBox>
        <SignImgView>
          <Image src={data?.[selectedTabIbndex]?.image?.url} alt='main-logo' width={1154} height={725} />
        </SignImgView>
      </SignBox>
    </Container>
  }, [data, selectedTabIbndex])

  return (
    <>
      <ExploreSection>
        <Container>
          <TopView>
            <h3>
              Explore the client experience<span>.</span>
            </h3>
            <p>
              Provide clients a uniform experience with on-brand design, combined in-product notifications, and
              consistent email notifications. And with modularily built-in, start with just one module and add more when
              the time is right.
            </p>
            <BtnWrap>
              <SecondryButton>
                <Link href='#'>Create client account in a demo portal</Link>
              </SecondryButton>
              <IconView className='tooltip'>
                <Image src='/images/helpicon.svg' alt='main-logo' width={22} height={22} />
                <Tooltip className='tooltiptext'>
                  If you’d like to see what the user experience can be like for your clients, you can create a client
                  account in a demo portal we have set up. We’ve customized this demo portal to highlight some of the
                  features that are most relevant.
                </Tooltip>
              </IconView>
            </BtnWrap>
          </TopView>
        </Container>
        <BottomSection>
          <Container>
            <SignatureSection>
              {tabDetailView}
              <RightWrap>
                <TabWrap>
                  {tabListView}
                  {/* <TabView className='activetab'>
                    <span>01</span>
                    <ActiveTab>
                      <Image src='/images/verticalline.svg' alt='line-icon' width={1} height={51} />
                    </ActiveTab>
                  </TabView>
                  <TabView>
                    <span>02</span>
                  </TabView>
                  <TabView>
                    <span>03</span>
                  </TabView> */}
                </TabWrap>
              </RightWrap>
            </SignatureSection>
          </Container>
        </BottomSection>
        <LastSection>
          {tabImageView}
        </LastSection>
      </ExploreSection>
    </>
  );
}
