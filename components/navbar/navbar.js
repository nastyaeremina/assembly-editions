import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import CopilotLogos from "../../public/images/blacklogo.svg";
import {
  BlackButton,
  Container,
  PrimaryButton,
} from "../../styles/commonStyles";
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
import Image from "next/image";

export default function Navbar({ BlogDetails }) {
  const mobile = useMobileDevice();
  const router = useRouter();

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
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
            <Link href="/blogs">Blogs</Link>
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
              className={router.pathname === "/pricing" ? "active" : ""}
            >
              <Link href="/pricing">Pricing</Link>
            </SpanLink>
            <SpanLink
              className={router.pathname === "/modulebilling" ? "active" : ""}
            >
              <Link href="/modulebilling">Features</Link>
              <InnerList features className="innerlist">
                <ListLi>
                  <MenuWrap msghover href="/modules/messege">
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
                  <MenuWrap billhover href="#">
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
                  <MenuWrap filehover href="#">
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
                  <MenuWrap formhover href="#">
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
                  <MenuWrap helphover href="#">
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
            <SpanLink className={router.pathname === "/apps" ? "active" : ""}>
              <Link href="/apps">Apps</Link>
            </SpanLink>
            <SpanLink
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">Company</Link>
              <InnerList company className="innerlist">
                <ListLi>
                  <MenuWrap href="#">
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
                  <MenuWrap href="#">
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
                  <MenuWrap href="#">
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
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">Resources</Link>
            </SpanLink>

            {mobile && <DropDownList />}
            {/* <HorizontalLine></HorizontalLine> */}
          </NavigationBlock>
          <HeaderBtnGroup>
            <SignInSignUpBtn>
              <>
                <SignIn>
                  <Link href="/">Login</Link>
                </SignIn>
                <SignIn>
                  <Link href="/">Book demo</Link>
                </SignIn>
                <BlackButton>
                  <Link href="/">Start trial</Link>
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

  return (
    <>
      <NavbarWrapper isScrollPage={isScrollPage}>
        <Container>
          <NavbarInner>
            <Link href="/">
              {isScrollPage && BlogDetails ? (
                <CopilotLogo
                  loading="lazy"
                  width="143"
                  height="31"
                  src={CopilotLogos.src}
                ></CopilotLogo>
              ) : BlogDetails ? (
                <SalescampLogo
                  loading="lazy"
                  width="143"
                  height="31"
                  src={CopilotLogos.src}
                ></SalescampLogo>
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
