import Link from "next/link";
import { useRouter } from "next/router";
import { StatefulPopover } from "baseui/popover";
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
} from "./styles";

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
            <Link href="/blogs">
            Blogs
            </Link>
          </DropDownLink>
          <DropDownLink
            className={router.pathname === "/updates" ? "active" : ""}
          >
            <Link href="/updates">
              Updates
            </Link>
          </DropDownLink>
          <DropDownLink className={router.pathname === "/help" ? "active" : ""}>
            <Link href="/help">
             Help Center
            </Link>
          </DropDownLink>
          <DropDownLink>
            <Link href="/">Roadmap
              {/* <a data-nolt="button"></a> */}
            </Link>
          </DropDownLink>
          <DropDownLink
            className={router.pathname === "/free-sales-tools" ? "active" : ""}
          >
            <Link href="/free-sales-tools">
              Sales Tools
            </Link>
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
            </SpanLink>
            <SpanLink
              className={router.pathname === "/extensions" ? "active" : ""}
            >
              <Link href="/extensions">Apps</Link>
            </SpanLink>
            <SpanLink
              className={router.pathname === "/features" ? "active" : ""}
            >
              <Link href="/features">Company</Link>
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
