import Link from "next/link";
import Image from "next/image";
import { Container } from "../../styles/commonStyles";
import {
  ContentMain,
  BottomFunction,
  TabRow,
  TabBox,
  ContainWrap,
  LeftDetail,
  TopFunctionWrap,
  RightDetail,
} from "./styles";
// import { RightDetail } from "../../styles/homepageStyles";

export default function Content() {
  return (
    <ContentMain>
      <Container>
        <TopFunctionWrap>
          <h3>
            Powerful out-of-the box functionality<span>,</span>
            <br />
            ready to go<span>.</span>
          </h3>
          <p>
            Provide clients a uniform experience with on-brand design, combined
            in-product notifications, and consistent email notifications. And
            with modularily built-in, start with just one module and add more
            when the time is right.
          </p>
        </TopFunctionWrap>
        <BottomFunction>
          <TabRow>
            <TabBox>
              <Link href={"#"} className="activetab">
                Create invoices
              </Link>
            </TabBox>
            <TabBox>
              <Link href={"#"}>Mobile-first</Link>
            </TabBox>
            <TabBox>
              <Link href={"#"}>Channels</Link>
            </TabBox>
            <TabBox>
              <Link href={"#"}>Rich text</Link>
            </TabBox>
            <TabBox>
              <Link href={"#"}>Interactivity</Link>
            </TabBox>
            <TabBox>
              <Link href={"#"}>Unified notifications</Link>
            </TabBox>
          </TabRow>
          <ContainWrap>
            <LeftDetail>
              <h4>Seamless Checkout</h4>
              <p>
                Make it easy for clients to pay for invoices on mobile and
                desktop. Supports credit cards, ACH, and 100+ currencies.
              </p>
            </LeftDetail>
            <RightDetail>
              <Image
                src="/images/msgscreen.png"
                width={881}
                height={550}
                alt="msg-screen"
              />
            </RightDetail>
          </ContainWrap>
        </BottomFunction>
      </Container>
    </ContentMain>
  );
}
