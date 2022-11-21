import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import CopilotLogos from "../../public/images/blacklogo.svg";
import GreenLogos from "../../public/images/greenlogo.svg";
import WhiteLogos from "../../public/images/whitelogo.svg";

import {
  BlackButton,
  Container,
  PrimaryButton,
} from "../../styles/commonStyles";
import { HEADER_LIST, NAVBAR_COLOR_LIST } from "../../constants/constant";
import useMobileDevice from "../../hooks/useMobileDevice";
import {
  NavbarWrapper,
  NavbarInner,
  SalescampLogo,
  CopilotLogo,
  NavMenu,
  NavigationBlock,
  SpanLink,
  HeaderBtnGroup,
  SignInSignUpBtn,
  SignIn,
  MobileMenu,
  FirstLine,
  SecondLine,
  ThirdLine,
  OverLayBlock,
  TrySalescampBlock,
  DropDownLink,
  DropdownMenu,
  DropdownSpan,
  DropDownToggle,
  InnerList,
  ListLi,
  LeftImg,
  MenuWrap,
  RightText,
  LineMenuImg,
} from "./styles";

export default function Navbar({
  BlogDetails,
  isModule,
  headerIndex,
  isEnterPrice,
}) {
  const mobile = useMobileDevice();
  const router = useRouter();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [colorList, setColorList] = useState(NAVBAR_COLOR_LIST[0]);

  const handleMobileMenu = useCallback(() => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  }, [isOpenMobileMenu]);
  let isScrollPage;
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (clientWindowHeight > 10) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }
  const DropDownList = () => {
    return (
      <>
        {mobile && (
          <DropDownToggle>
            <DropdownSpan>Resources</DropdownSpan>
          </DropDownToggle>
        )}
        <DropdownMenu>
          <DropDownLink
            className={router.pathname === "/blogs" ? "active" : ""}
          >
            <Link href="copilot.com/blog">Blogs</Link>
          </DropDownLink>
          <DropDownLink
            className={router.pathname === "/updates" ? "active" : ""}
          >
            <Link href="/updates">Updates</Link>
          </DropDownLink>
          <DropDownLink className={router.pathname === "/help" ? "active" : ""}>
            <Link href="/help">Help Center</Link>
          </DropDownLink>
          <DropDownLink>
            <Link href="/">
              Roadmap
              {/* <a data-nolt="button"></a> */}
            </Link>
          </DropDownLink>
          <DropDownLink
            className={router.pathname === "/free-sales-tools" ? "active" : ""}
          >
            <Link href="/free-sales-tools">Sales Tools</Link>
          </DropDownLink>
        </DropdownMenu>
      </>
    );
  };

  const Navigation = () => {
    return (
      <>
        <NavMenu
          BlogDetails={BlogDetails}
          isOpenMobileMenu={isOpenMobileMenu}
          mobile={mobile}
        >
          <NavigationBlock>
            <SpanLink
              textColor={colorList?.fontColor}
              hoverColor={colorList?.primaryColor}
              className={router.pathname === "/pricing" ? "active" : ""}
            >
              <Link href="/pricing">Pricing</Link>
            </SpanLink>
            <SpanLink
              className={router.pathname === "/modulebilling" ? "active" : ""}
              textColor={colorList?.fontColor}
              hoverColor={colorList?.primaryColor}
            >
              <Link href="/modulebilling">Features</Link>
              <InnerList features className="innerlist">
                <ListLi>
                  <MenuWrap msghover href="/modules/message">
                    <LeftImg>
                      <Image
                        src="/images/menumsg.svg"
                        alt="msg-icon"
                        width={32}
                        height={32}
                      />
                    </LeftImg>
                    <RightText>
                      <h5>Messaging</h5>
                      <span>Communicate with clients securely</span>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap billhover href="/modules/billing">
                    <LeftImg>
                      <Image
                        src="/images/billmenuicon.svg"
                        alt="bill-icon"
                        width={32}
                        height={32}
                      />
                    </LeftImg>
                    <RightText>
                      <h5>Billing</h5>
                      <span>Create invoices and subscriptions</span>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap filehover href="/modules/file">
                    <LeftImg>
                      <Image
                        src="/images/filemenuicon.svg"
                        alt="file-icon"
                        width={32}
                        height={32}
                      />
                    </LeftImg>
                    <RightText>
                      <h5>Files & eSignatures</h5>
                      <span>Share files and sign contracts</span>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap formhover href="/modules/form">
                    <LeftImg>
                      <Image
                        src="/images/formmenuicon.svg"
                        alt="form-icon"
                        width={32}
                        height={32}
                      />
                    </LeftImg>
                    <RightText>
                      <h5>Forms</h5>
                      <span>Streamline data collection</span>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap helphover href="/modules/knowledge">
                    <LeftImg>
                      <Image
                        src="/images/deskmenuicon.svg"
                        alt="desk-icon"
                        width={32}
                        height={32}
                      />
                    </LeftImg>
                    <RightText>
                      <h5>Helpdesk</h5>
                      <span>Improve customer support</span>
                    </RightText>
                  </MenuWrap>
                </ListLi>
              </InnerList>
              <LineMenuImg className="img-line">
                <Image
                  src="/images/featurelinemenu.svg"
                  alt="line-icon"
                  width={92}
                  height={30}
                />
              </LineMenuImg>
            </SpanLink>
            {/* <SpanLink
              className={router.pathname === "/solution" ? "active" : ""}
            >
              <Link href="/solution">Solution</Link>
            </SpanLink> */}
            <SpanLink
              textColor={colorList?.fontColor}
              hoverColor={colorList?.primaryColor}
              className={router.pathname === "/apps" ? "active" : ""}
            >
              <Link href="/apps">Apps</Link>
            </SpanLink>
            <SpanLink
              textColor={colorList?.fontColor}
              hoverColor={colorList?.primaryColor}
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">Company</Link>
              <InnerList company className="innerlist">
                <ListLi>
                  <MenuWrap href="/enterprise">
                    <LeftImg>
                      <Image
                        src="/images/enterlogo.svg"
                        alt="enter-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText>
                      <h6>Enterprise</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap href="/jobs">
                    <LeftImg>
                      <Image
                        src="/images/jobicon.svg"
                        alt="job-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText>
                      <h6>Jobs</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap href="/brands">
                    <LeftImg>
                      <Image
                        src="/images/brand.svg"
                        alt="file-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText>
                      <h6>Brand</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
              </InnerList>
              <LineMenuImg className="img-line">
                <Image
                  src="/images/companyline.svg"
                  alt="line-icon"
                  width={100}
                  height={30}
                />
              </LineMenuImg>
            </SpanLink>
            <SpanLink
              textColor={colorList?.fontColor}
              hoverColor={colorList?.primaryColor}
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">Resources</Link>
              <InnerList company className="innerlist">
                <ListLi>
                  <MenuWrap href="http://copilot.com/blog">
                    <LeftImg>
                      <Image
                        src="/images/penicon.svg"
                        alt="pen-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText resourcetext>
                      <h6>Blog</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap href="http://security.copilot.com">
                    <LeftImg>
                      <Image
                        src="/images/secure.svg"
                        alt="secure-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText resourcetext>
                      <h6>Security</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap href="http://copilot.com/updates">
                    <LeftImg>
                      <Image
                        src="/images/refresh.svg"
                        alt="refresh-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText resourcetext>
                      <h6>What’s New</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap href="#">
                    <LeftImg>
                      <Image
                        src="/images/headphone.svg"
                        alt="help-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText resourcetext>
                      <h6>Help Center</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap href="/university">
                    <LeftImg>
                      <Image
                        src="/images/videoicon.svg"
                        alt="video-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText resourcetext>
                      <h6>Video Tutorials</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap href="http://docs.copilot.com/">
                    <LeftImg>
                      <Image
                        src="/images/apiicon.svg"
                        alt="api-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText resourcetext>
                      <h6>API Reference</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
                <ListLi>
                  <MenuWrap href="https://status.copilot.com/">
                    <LeftImg>
                      <Image
                        src="/images/headphone.svg"
                        alt="system-icon"
                        width={16}
                        height={16}
                      />
                    </LeftImg>
                    <RightText resourcetext>
                      <h6>System Status</h6>
                    </RightText>
                  </MenuWrap>
                </ListLi>
              </InnerList>
              <LineMenuImg className="img-line">
                <Image
                  src="/images/resourceline.svg"
                  alt="line-icon"
                  width={108}
                  height={30}
                />
              </LineMenuImg>
            </SpanLink>

            {mobile && <DropDownList />}
            {/* <HorizontalLine></HorizontalLine> */}
          </NavigationBlock>
          <HeaderBtnGroup>
            <SignInSignUpBtn>
              <>
                <SignIn
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                >
                  <Link href="https://dashboard.copilot.com/login?step=signIn">
                    Login
                  </Link>
                </SignIn>
                <SignIn
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                >
                  <Link href="/">Book demo</Link>
                </SignIn>
                <BlackButton
                  textColor={isModule ? colorList?.fontColor : "#FFFFFF"}
                  backgroundColor={colorList?.buttonColor}
                >
                  <Link href="https://dashboard.copilot.com/onboarding">
                    Start trial
                  </Link>
                </BlackButton>
              </>
            </SignInSignUpBtn>
          </HeaderBtnGroup>
        </NavMenu>
        <TrySalescampBlock BlogDetails={BlogDetails} mobile={mobile}>
          <PrimaryButton>
            <Link href="/">Try copilot</Link>
          </PrimaryButton>
        </TrySalescampBlock>
      </>
    );
  };

  useEffect(() => {
    if (headerIndex) setColorList(NAVBAR_COLOR_LIST[headerIndex]);
    else setColorList(NAVBAR_COLOR_LIST[HEADER_LIST.DEFAULT]);
  }, [headerIndex]);

  return (
    <>
      <NavbarWrapper isScrollPage={isScrollPage} colorList={colorList}>
        <Container>
          <NavbarInner>
            <Link href="/">
              {isModule ? (
                <SalescampLogo
                  loading="lazy"
                  width="143"
                  height="31"
                  src={WhiteLogos.src}
                />
              ) : isEnterPrice ? (
                <SalescampLogo
                  loading="lazy"
                  width="143"
                  height="31"
                  src={GreenLogos.src}
                />
              ) : (
                <SalescampLogo
                  loading="lazy"
                  width="143"
                  height="31"
                  src={CopilotLogos.src}
                ></SalescampLogo>
              )}
            </Link>
            {mobile ? (
              <OverLayBlock
                onClick={() => {
                  setIsOpenMobileMenu(false);
                }}
                isScrollPage={isScrollPage}
                isOpenMobileMenu={isOpenMobileMenu}
              >
                <Navigation />
              </OverLayBlock>
            ) : (
              <Navigation />
            )}

            <MobileMenu onClick={handleMobileMenu}>
              <FirstLine
                isOpenMobileMenu={isOpenMobileMenu}
                BlogDetails={BlogDetails}
                isScrollPage={isScrollPage}
              ></FirstLine>
              <SecondLine
                isOpenMobileMenu={isOpenMobileMenu}
                BlogDetails={BlogDetails}
                isScrollPage={isScrollPage}
              ></SecondLine>
              <ThirdLine
                isOpenMobileMenu={isOpenMobileMenu}
                BlogDetails={BlogDetails}
                isScrollPage={isScrollPage}
              ></ThirdLine>
            </MobileMenu>
          </NavbarInner>
        </Container>
      </NavbarWrapper>
    </>
  );
}
