import Link from "next/link";
import {
  Container,
  CtaButton,
  FcfeatureWrap,
  PrimaryButton,
} from "../../styles/commonStyles";
import { CtaInner, CtaBtn } from "./styles";

export default function CTA() {
  return (
    <>
      <FcfeatureWrap>
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
      </FcfeatureWrap>
    </>
  );
}
