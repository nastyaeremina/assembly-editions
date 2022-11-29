import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import { Container, PrimaryButton } from "../../styles/commonStyles";
import {
  BrandHeroSection,
  BrandName,
  BrandImage,
  BrandImageLeft,
  HoverSection,
  BlackHover,
  BrandImageRight,
  CompanyIcon,
  HoverLink,
  Block1,
  ColorSection,
  BlockSub,
  BlockLight,
  BrandMain,
} from "../../styles/brandStyles";

export default function Brand() {
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <Navbar />
        <BrandMain>
          <Container>
            <BrandHeroSection>
              <h2>Copilot Brand Guidelines</h2>
              <p>
                Resources for presenting the Copilot brand consistently and
                professionally.
              </p>
              <PrimaryButton>
                <Link href="#">Download Brand Assets</Link>
              </PrimaryButton>
            </BrandHeroSection>
            <BrandName>
              <h4>Naming</h4>
              <p>
                “Copilot” is a single word that is always spelled with a capital
                “C”, lowercase “p”, and without a dash. It is the brand name of
                our company and product. The company legal name is Copilot
                Platforms Inc. On social media, you can refer to us with
                #copilot.
              </p>
            </BrandName>
            <BrandName>
              <h4>Wordmark</h4>
              <p>
                The Copilot wordmark should be used in all references to Copilot
                as space allows. Monochrome usage is also acceptable, preferably
                using the brand colors below.
              </p>
              <BrandImage>
                <BrandImageLeft className="effect-goliath">
                  <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={405}
                    height={90}
                    layout={"fixed"}
                  />
                  <HoverSection className="hover-name">
                    <p>Download</p>
                    <Image
                      src="/images/download.svg"
                      alt="download"
                      width={20}
                      height={20}
                      layout={"fixed"}
                    />
                  </HoverSection>
                </BrandImageLeft>
                <BrandImageRight className="effect-goliath">
                  <Image
                    src="/images/blacklogo.svg"
                    alt="logo"
                    width={405}
                    height={90}
                    layout={"fixed"}
                  />
                  <BlackHover className="hover-name">
                    <p>Download</p>
                    <Image
                      src="/images/whitedownload.svg"
                      alt="download"
                      width={20}
                      height={20}
                      layout={"fixed"}
                    />
                  </BlackHover>
                </BrandImageRight>
              </BrandImage>
            </BrandName>
            <BrandName>
              <h4>Logo</h4>
              <p>
                For tight layouts or logo-only grids, the Coplilot logomark is a
                concise way to refer to Copilot. Use with good judgment for your
                audience, as the Copilot wordmark has a stronger brand
                recognition.
              </p>
              <BrandImage>
                <BrandImageLeft className="effect-goliath">
                  <Image
                    src="/images/smalllogo.svg"
                    alt="logo"
                    width={133}
                    height={90}
                    layout={"fixed"}
                  />
                  <HoverSection className="hover-name">
                    <p>Download</p>
                    <Image
                      src="/images/download.svg"
                      alt="download"
                      width={20}
                      height={20}
                      layout={"fixed"}
                    />
                  </HoverSection>
                </BrandImageLeft>
                <BrandImageRight className="effect-goliath">
                  <Image
                    src="/images/blacklogo.svg"
                    alt="logo"
                    width={405}
                    height={90}
                    layout={"fixed"}
                  />
                  <BlackHover className="hover-name">
                    <p>Download</p>
                    <Image
                      src="/images/whitedownload.svg"
                      alt="download"
                      width={20}
                      height={20}
                      layout={"fixed"}
                    />
                  </BlackHover>
                </BrandImageRight>
              </BrandImage>
            </BrandName>
            <BrandName>
              <h4>Company icon</h4>
              <p>
                When referring to Copilot as a company, such as on social media,
                or where a “chip” design is required, it is acceptable to use
                this stylized icon with an appropriate corner radius.
              </p>
              <BrandImage>
                <CompanyIcon className="effect-goliath">
                  <Image
                    src="/images/primarylogo.svg"
                    alt="logo"
                    width={186}
                    height={186}
                    layout={"fixed"}
                  />
                  <HoverLink className="hover-name">
                    <p>Download</p>
                    <Image
                      src="/images/whitedownload.svg"
                      alt="download"
                      width={20}
                      height={20}
                      layout={"fixed"}
                    />
                  </HoverLink>
                </CompanyIcon>
                <CompanyIcon className="effect-goliath">
                  <Image
                    src="/images/primarylogo2.svg"
                    alt="logo"
                    width={200}
                    height={200}
                    layout={"fixed"}
                  />
                  <HoverLink className="hover-name">
                    <p>Download</p>
                    <Image
                      src="/images/whitedownload.svg"
                      alt="download"
                      width={20}
                      height={20}
                      layout={"fixed"}
                    />
                  </HoverLink>
                </CompanyIcon>
              </BrandImage>
            </BrandName>
            <BrandName>
              <h4>Colors</h4>
              <p>
                Copilot’s primary brand color is a cool green that’s been
                slightly desaturated and darkened.{" "}
              </p>
              <ColorSection>
                <Block1>
                  <BlockSub>
                    <p>Copy</p>
                    <span>#09AA6C</span>
                  </BlockSub>
                </Block1>

                <Block1 className="block2color">
                  <BlockSub>
                    <p>Copy</p>
                    <span>#E3FFEE</span>
                  </BlockSub>
                </Block1>

                <Block1 className="block3color">
                  <BlockLight>
                    <p>Copy</p>
                    <span>#00160E</span>
                  </BlockLight>
                </Block1>
              </ColorSection>
            </BrandName>
          </Container>
        </BrandMain>
      </Layout>
    </>
  );
}
