import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import { HEADER_LIST } from "../../constants/constant";
import { Container, GreenButton } from "../../styles/commonStyles";
import {
  EnterPriseHero,
  MainWrap,
  LeftHero,
  TitleSec,
  BtnWrap,
} from "../../styles/enterpriseStyles";

export default function Enterprise() {
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <MainWrap>
          <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
          <EnterPriseHero>
            <Container>
              <LeftHero>
                <TitleSec>
                  <h2>Designed for the most ambitious businesses </h2>
                  <p>
                    Copilot Plus is a tailormade solution for businesses with
                    custom requirements, enterprise-level compliance needs, more
                    customizability, and support for white-label native apps.{" "}
                  </p>
                  <BtnWrap>
                    <GreenButton>
                      <Link href="#">Let's talk </Link>
                    </GreenButton>
                  </BtnWrap>
                </TitleSec>
              </LeftHero>
            </Container>
          </EnterPriseHero>
        </MainWrap>
      </Layout>
    </>
  );
}
