import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import { Container, PrimaryButton } from "../../styles/commonStyles";
import {
  JObMain,
  DetailLink,
  JobDetail,
  DetailLeft,
  DetailWrap,
  ImageWrap,
  DetailRight,
  DetailText,
  DeatilTextSub,
  DetailInner,
  DetailInnerSub,
  BulletImage
} from "../../styles/jobsStyles";

export default function JobsDetail() {
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <Navbar />
        <JObMain>
          <Container>
            <DetailLink>
              <Link href="#">
                <Image
                  src="/images/leftarrow.svg"
                  alt="bill-icon"
                  width={12}
                  height={12}
                  layout={"fixed"}
                />
              </Link>
              <p>Back to all Apps</p>
            </DetailLink>

            <JobDetail>
              <DetailLeft>
                <h3>Recruiter</h3>
                <DetailWrap>
                  <p>Department</p>
                  <span>Talent</span>
                </DetailWrap>
                <DetailWrap>
                  <p>Location</p>
                  <span>New York</span>
                </DetailWrap>
                <DetailWrap>
                <p>Work with</p>
                <ImageWrap>
                  <Image
                    src="/images/profile.svg"
                    alt="bill-icon"
                    width={30}
                    height={30}
                    layout={"fixed"}
                    className="billimage"
                  />
                  <Image
                    src="/images/profile.svg"
                    alt="bill-icon"
                    width={30}
                    height={30}
                    layout={"fixed"}
                    className="billimage"
                  />
                  <Image
                    src="/images/profile.svg"
                    alt="bill-icon"
                    width={30}
                    height={30}
                    layout={"fixed"}
                    className="billimage"
                  />
                </ImageWrap>
                </DetailWrap>
                <PrimaryButton>
                  <Link href="#">Apply now</Link>
                </PrimaryButton>
              </DetailLeft>
              <DetailRight>
                <DetailText>
                  <h4>Who we are</h4>
                  <DeatilTextSub>
                    <p>
                      At Copolot, we're building Shopify for Service Businesses.
                      Our goal is to make it easy for entrepreneurs anywhere to
                      start and scale service businesses: marketing agencies,
                      bookkeeping firms, recruiting agencies, and thousands of
                      others.
                    </p>
                    <p>
                      While it is straightforward to set up a Shopify store and
                      sell a physical product on the Internet, entrepreneurs
                      that want to provide a service on the Internet have to
                      stitch together apps and are unable to offer clients a
                      streamlined experience under their own brand. We want to
                      change this by giving service businesses the building
                      blocks (messaging, payments, etc.) to design their own
                      product and offer their clients a modern streamlined
                      experience.
                    </p>
                    <p>
                      In February 2022, we raised a $10M seed round led by Ali
                      Rowghani at <span>YC Continuity</span> and{" "}
                      <span>Lachy Groom</span>. Other investors include{" "}
                      <span>Y Combinator</span>, <span>Liquid 2</span>,
                      <span>Tribe</span>, <span>Addition</span>,
                      <span>Slope</span>, YC partner and Scribd founders{" "}
                      <span>Jared Friedman</span>, former SVP Product at Lyft{" "}
                      <span>Ran Makavy</span>, and Pipe founders{" "}
                      <span>Zain Allarakhia</span> and <span>Josh Mangel</span>.
                    </p>
                  </DeatilTextSub>
                  <DetailInner>
                    <h4>About this role</h4>
                    <DeatilTextSub>
                      <p className="textcolor">
                        In this role you’ll work directly with the founding
                        team, help set our hiring goals, source candidates,
                        interview candidates, and help establish our hiring
                        brand.
                      </p>
                    </DeatilTextSub>
                  </DetailInner>
                  <DetailInner>
                    <h4>Who you are</h4>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You're entrepreneurial.</span> You are comfortable
                        with ambiguity and thrive in fast-pasted environments.
                        You've likely worked at startups before or might want to
                        start one in the future.
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You're experienced.</span> You have 2+ years of recruiting or sourcing experience. Startup experience is ideal but not required. 
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You're hardworking.</span> You understand that building a category-defining company requires people that work smart and that also work hard.
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You're creative.</span> In a hiring environment that is more competitive that it ever has been, you enjoy coming up with creative solutions. 
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You’re analytical.</span> You understand why it is important to have an analytical approach to hiring and rigorously test out new ideas. 
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p  className="mr0">
                        <span>You’re organized.</span> You have a clear approach in reporting recruiting metrics back to team, using these data points to speak to your work and overall outcomes.
                      </p>
                    </DetailInnerSub>
                  
                  </DetailInner>
                  <DetailInner>
                    <h4>What you'll do</h4>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You’ll source.</span> You’ll help improve our top-of-funnel pipeline of high-caliber candidates. 
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You’ll screen.</span> You’ll do the 1st interview with most candidates and assess if there is a good initial fit.
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You’ll help establish our hiring brand.</span> Companies that consistently hire great people tell the world about it and loudly celebrate when new employees join. You’ll help us set up those processes.
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p>
                        <span>You’ll define processes.</span> From job description to interviews pipelines, you’ll set up with processes that work.
                      </p>
                    </DetailInnerSub>
                    <DetailInnerSub>
        <BulletImage></BulletImage>

                      <p className="mr0">
                        <span>You’ll play the long game.</span> It’s not unusual for the best hires to take 1 year to close. You’ll  maintain a network of potential candidates through proactive market research and ongoing relationship management
                      </p>
                    </DetailInnerSub>
                  </DetailInner>
                </DetailText>
              </DetailRight>
            </JobDetail>
          </Container>
        </JObMain>
      </Layout>
    </>
  );
}
