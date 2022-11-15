import Image from "next/image";
import Link from "next/link";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../../../styles/commonStyles";
import {
  HeroSection,
  SolutionWrap,
  LeftWrap,
  RightWrap,
  TextSection,
  BtnWrap,
  ImageView,
  LineIcon,
  MobileImg,
} from "./styles";

export default function SolutionHero() {
  return (
    <>
      <HeroSection>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection>
                <h2>
                  Run a modern<span>,</span> tech-enabled agency
                </h2>
                <p>
                  Build your healthcare app in a fraction of the time with
                  built-in HIPAA compliance, customizable modules to power
                  messaging, intake forms, file-sharing, and eSignatures, and
                  add fully.
                </p>
                <BtnWrap>
                  <PrimaryButton>
                    <Link href="/">Start Trial</Link>
                  </PrimaryButton>
                  <SecondryButton>
                    <Link href="/">Why Copilot</Link>
                  </SecondryButton>
                </BtnWrap>
              </TextSection>
            </LeftWrap>
            <RightWrap>
              <ImageView>
                <Image
                  src="/images/placeimg.png"
                  alt="main-logo"
                  width={479}
                  height={633}
                />
                <MobileImg>
                  <Image
                    src="/images/mobilecline.png"
                    alt="main-logo"
                    width={310}
                    height={655}
                  />
                </MobileImg>
                <LineIcon>
                  <Image
                    src="/images/soluline.svg"
                    width={816}
                    height={358.08}
                    alt="link-icon"
                  />
                </LineIcon>
              </ImageView>
            </RightWrap>
          </SolutionWrap>
        </Container>
      </HeroSection>
    </>
  );
}
