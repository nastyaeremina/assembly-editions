import Layout from "/components/layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
  DetailVideoMain,
  DetailVideoHero,
  Backlink,
  VideoSection,
  VideoImage,
  VIdeoWrap,
  UniversityVideo,
  FeatureCard,
} from "../../styles/universityStyles";
import { Container } from "../../styles/commonStyles";
import Image from "next/image";

export default function UniversityDetail() {
  return (
    <>
      <NextSeo
        title="copilot blogs to keep you up with the  Sales Tactics!"
        description="Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs."
      />
      <Layout>
        <Navbar />
        <DetailVideoMain>
          <Container>
            <DetailVideoHero>
              <Link href="/university">
                <Backlink>
                  <Image
                    src="/images/leftarrow.svg"
                    alt="leftarrow"
                    width={12}
                    height={12}
                    layout={"fixed"}
                  />
                  <p>Back to Univeristy</p>
                </Backlink>
              </Link>
              <h3>How To Customize Your Portal</h3>
            </DetailVideoHero>
            <VideoSection>
              <Link href="#">
                <VideoImage>
                  <Image
                    src="/images/video.png"
                    alt="video"
                    width={1224}
                    height={689}
                    layout={"fixed"}
                  />
                  <Image
                    src="/images/youtube.svg"
                    alt="video"
                    width={196}
                    height={196}
                    layout={"fixed"}
                    className="mainimage"
                  />
                </VideoImage>
              </Link>
              <p>
                In this video, learn about best practices when customizing your
                portal. Specifically, learn about basic customizations (logo,
                login image, color scheme, etc), welcome messages, Module and
                Extensions settings, custom domains and custom email domains,
                and Automations.
              </p>
            </VideoSection>
            <VIdeoWrap>
              <h3>Related videos</h3>
              <UniversityVideo>
                <Link href="#">
                  <FeatureCard>
                    <Image
                      src="/images/video1.png"
                      alt="video"
                      width={270}
                      height={152}
                      layout={"fixed"}
                    />
                  </FeatureCard>
                </Link>
                <Link href="#">
                  <FeatureCard>
                    <Image
                      src="/images/video1.png"
                      alt="video"
                      width={270}
                      height={152}
                      layout={"fixed"}
                    />
                  </FeatureCard>
                </Link>
                <Link href="#">
                  <FeatureCard>
                    <Image
                      src="/images/video1.png"
                      alt="video"
                      width={270}
                      height={152}
                      layout={"fixed"}
                    />
                  </FeatureCard>
                </Link>
                <Link href="#">
                  <FeatureCard>
                    <Image
                      src="/images/video1.png"
                      alt="video"
                      width={270}
                      height={152}
                      layout={"fixed"}
                    />
                  </FeatureCard>
                </Link>
              </UniversityVideo>
            </VIdeoWrap>
          </Container>
        </DetailVideoMain>
      </Layout>
    </>
  );
}
