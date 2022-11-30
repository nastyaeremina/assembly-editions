import Link from "next/link";
import {
  Container,
  CtaButton,
  FcfeatureWrap,
  PrimaryButton,
} from "../../styles/commonStyles";
import { CtaInner, CtaBtn, CtaAnimation, CtaSection, CtaImage } from "./styles";
import { Gradient } from "../../public/js/Gradient.js";
import { useEffect } from "react";
import Image from "next/image";

export default function CTA() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <CtaAnimation>
        <canvas id="gradient-canvas" data-transition-in />
        <CtaImage>
          <Image
            src="/images/ctabg.svg"
            alt="red-icon"
            width={1440}
            height={287}
            // layout={"fixed"}
          />
        </CtaImage>
        <CtaInner>
          <h2>Start, run, and grow your business</h2>
          <CtaBtn>
            <PrimaryButton>
              <Link
                className="paddingbtn"
                href="https://dashboard.copilot.com/onboarding"
              >
                Start Trial
              </Link>
            </PrimaryButton>
            <CtaButton>
              <Link href="/book-demo">Book Demo</Link>
            </CtaButton>
          </CtaBtn>
        </CtaInner>
      </CtaAnimation>
      {/* <FcfeatureWrap>
        <Container>
          <CtaInner>
            <h2>
              Start<span>,</span> run<span>,</span> and grow your business
            </h2>
            <CtaBtn>
              <PrimaryButton>
                <Link
                  className="paddingbtn"
                  href="https://dashboard.copilot.com/onboarding"
                >
                  Start Trial
                </Link>
              </PrimaryButton>
              <CtaButton>
                <Link href="/book-demo">Book Demo</Link>
              </CtaButton>
            </CtaBtn>
          </CtaInner>
        </Container>
      </FcfeatureWrap> */}
    </>
  );
}
