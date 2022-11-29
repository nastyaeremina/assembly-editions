import Image from "next/image";
import Link from "next/link";
import { Container, SecondryButton } from "../../../styles/commonStyles";
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
} from "./styles";

export default function ExploreTab() {
  return (
    <>
      <ExploreSection>
        <Container>
          <TopView>
            <h3>
              Explore the client experience<span>.</span>
            </h3>
            <p>
              Provide clients a uniform experience with on-brand design,
              combined in-product notifications, and consistent email
              notifications. And with modularily built-in, start with just one
              module and add more when the time is right.
            </p>
            <SecondryButton>
              <Link href="#">
                Create client account in a demo portal
                <Image
                  src="/images/helpicon.svg"
                  alt="main-logo"
                  width={22}
                  height={22}
                />
              </Link>
            </SecondryButton>
          </TopView>
        </Container>
        <BottomSection>
          <Container>
            <SignatureSection>
              <LeftWrap>
                <h4>eSignatures</h4>
                <p>
                  A delightful eSignature experience omg there are two lines and
                  woah here comes the third line
                </p>
              </LeftWrap>
              <RightWrap>
                <TabWrap>
                  <TabView className="activetab">
                    <span>01</span>
                    <ActiveTab>
                      <Image
                        src="/images/verticalline.svg"
                        alt="line-icon"
                        width={1}
                        height={51}
                      />
                    </ActiveTab>
                  </TabView>
                  <TabView>
                    <span>02</span>
                  </TabView>
                  <TabView>
                    <span>03</span>
                  </TabView>
                </TabWrap>
              </RightWrap>
            </SignatureSection>
          </Container>
        </BottomSection>
        <LastSection>
          <Container>
            <SignBox>
              <SignImgView>
                <Image
                  src="/images/esignature.png"
                  alt="main-logo"
                  width={1154}
                  height={725}
                />
              </SignImgView>
            </SignBox>
          </Container>
        </LastSection>
      </ExploreSection>
    </>
  );
}
