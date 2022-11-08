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
              Start, run, and grow <span>your business</span>
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
