import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import { HEADER_LIST } from "../../constants/constant";
import { Container, PrimaryButton } from "../../styles/commonStyles";
import {
  MainSection,
  PrivacuHero,
  PostContent,
  PrivacyContent,
} from "../../styles/resourcesStyles";

export default function Privacy() {
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      {/* <Layout> */}
      <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
      <MainSection>
        <PrivacuHero>
          <Container>
            <h2>Privacy Policy</h2>
          </Container>
        </PrivacuHero>
        <PostContent>
          <Container>
            <p className="mr0">Effective date: 11/23/2022</p>
            <PrivacyContent>
              <h4>1. Introduction</h4>
              <p>Welcome to Copilot Platforms Inc.</p>
              <p>
                Copilot Platforms Inc. (“us”, “we”, or “our”) operates
                https://www.copilot.com/ (hereinafter referred to as “Service”).
              </p>
              <p>
                Our Privacy Policy governs your visit to
                https://www.copilot.com/, and explains how we collect, safeguard
                and disclose information that results from your use of our
                Service.
              </p>
            </PrivacyContent>
          </Container>
        </PostContent>
      </MainSection>
      {/* </Layout> */}
    </>
  );
}
