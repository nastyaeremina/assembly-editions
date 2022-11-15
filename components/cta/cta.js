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
                <Link href="/">Start Trial</Link>
              </PrimaryButton>
              <CtaButton>
                <Link href="/request-demo">Book Demo</Link>
              </CtaButton>
            </CtaBtn>
          </CtaInner>
        </Container>
      </FcfeatureWrap>
    </>
  );
}
