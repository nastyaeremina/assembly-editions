import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../../styles/commonStyles';
import {
  FooterSection,
  FooterInnerBlock,
  FooterSocialItem,
  FooterSocialList,
  FooterFirst,
  FooterRight,
  FooterMenu,
  FotterMenuLeft,
  FooterMenuList,
  FooterMobile,
  FotterMenuMobile
} from './styles';

export default function Footer({ isEnterPrice }) {
  return (
    <>
      <FooterSection isEnterPrice={isEnterPrice}>
        <Container>
          <FooterInnerBlock>
            <FooterFirst isEnterPrice={isEnterPrice}>
              <Link href='/'>
                {isEnterPrice ? (
                  <Image src='/images/footerenter.svg' alt='main-logo' height={31} width={143} />
                ) : (
                  <Image src='/images/blacklogo.svg' alt='main-logo' height={31} width={143} />
                )}
              </Link>

              <p>The new standard for modern services business.</p>
              <FooterSocialList>
                <Link href='https://twitter.com/copilot'>
                  <FooterSocialItem isEnterPrice={isEnterPrice}>
                    {isEnterPrice ? (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_3001_7105)'>
                          <path
                            d='M21.6462 6.29353C20.9527 6.59769 20.2139 6.7993 19.4436 6.8972C20.236 6.42405 20.8409 5.68053 21.1252 4.78435C20.3864 5.22487 19.5706 5.53603 18.7012 5.70967C17.9997 4.96266 16.9998 4.5 15.909 4.5C13.7926 4.5 12.0888 6.21778 12.0888 8.32363C12.0888 8.62663 12.1145 8.91797 12.1774 9.19533C8.9994 9.04034 6.18733 7.51718 4.29824 5.1969C3.96843 5.7691 3.77498 6.42405 3.77498 7.12911C3.77498 8.45298 4.45673 9.62653 5.47295 10.3059C4.85879 10.2943 4.25628 10.116 3.74585 9.83513C3.74585 9.84678 3.74585 9.86193 3.74585 9.87708C3.74585 11.7347 5.07089 13.2777 6.80848 13.6331C6.49732 13.7182 6.15819 13.759 5.80625 13.759C5.56151 13.759 5.31445 13.745 5.08254 13.6937C5.57783 15.2076 6.98328 16.3205 8.65445 16.3566C7.35388 17.374 5.70253 17.987 3.91483 17.987C3.60134 17.987 3.30067 17.973 3 17.9346C4.6933 19.0265 6.7001 19.65 8.86421 19.65C15.8985 19.65 19.7442 13.8231 19.7442 8.7723C19.7442 8.60332 19.7384 8.44017 19.7303 8.27818C20.4889 7.73977 21.1264 7.06734 21.6462 6.29353Z'
                            fill='#E3FFEE'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_3001_7105'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_677_25138)'>
                          <path
                            d='M21.6462 6.29353C20.9527 6.59769 20.2139 6.7993 19.4436 6.8972C20.236 6.42405 20.8409 5.68053 21.1252 4.78435C20.3864 5.22487 19.5706 5.53603 18.7012 5.70967C17.9997 4.96266 16.9998 4.5 15.909 4.5C13.7926 4.5 12.0888 6.21778 12.0888 8.32363C12.0888 8.62663 12.1145 8.91797 12.1774 9.19533C8.9994 9.04034 6.18733 7.51718 4.29824 5.1969C3.96843 5.7691 3.77498 6.42405 3.77498 7.12911C3.77498 8.45298 4.45673 9.62653 5.47295 10.3059C4.85879 10.2943 4.25628 10.116 3.74585 9.83513C3.74585 9.84678 3.74585 9.86193 3.74585 9.87708C3.74585 11.7347 5.07089 13.2777 6.80848 13.6331C6.49732 13.7182 6.15819 13.759 5.80625 13.759C5.56151 13.759 5.31445 13.745 5.08254 13.6937C5.57783 15.2076 6.98328 16.3205 8.65445 16.3566C7.35388 17.374 5.70253 17.987 3.91483 17.987C3.60134 17.987 3.30067 17.973 3 17.9346C4.6933 19.0265 6.7001 19.65 8.86421 19.65C15.8985 19.65 19.7442 13.8231 19.7442 8.7723C19.7442 8.60332 19.7384 8.44017 19.7303 8.27818C20.4889 7.73977 21.1264 7.06734 21.6462 6.29353Z'
                            fill='#757575'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_677_25138'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </FooterSocialItem>
                </Link>
                <Link href='https://www.facebook.com/copilotplatforms'>
                  <FooterSocialItem isEnterPrice={isEnterPrice}>
                    {isEnterPrice ? (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_1315_4425)'>
                          <path
                            d='M14.367 5.7895H15.9007V3.1183C15.6361 3.0819 14.7261 3 13.6663 3C11.455 3 9.9402 4.3909 9.9402 6.9473V9.3H7.5V12.2862H9.9402V19.8H12.932V12.2869H15.2735L15.6452 9.3007H12.9313V7.2434C12.932 6.3803 13.1644 5.7895 14.367 5.7895V5.7895Z'
                            fill='#E3FFEE'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1315_4425'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_2520_89822)'>
                          <path
                            d='M14.367 5.7895H15.9007V3.1183C15.6361 3.0819 14.7261 3 13.6663 3C11.455 3 9.9402 4.3909 9.9402 6.9473V9.3H7.5V12.2862H9.9402V19.8H12.932V12.2869H15.2735L15.6452 9.3007H12.9313V7.2434C12.932 6.3803 13.1644 5.7895 14.367 5.7895Z'
                            fill='#757575'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_2520_89822'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </FooterSocialItem>
                </Link>
                <Link href='https://www.linkedin.com/company/copilotplatforms/'>
                  <FooterSocialItem isEnterPrice={isEnterPrice}>
                    {isEnterPrice ? (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_3001_7112)'>
                          <path
                            d='M19.7949 19.7951V19.7944H19.7991V13.633C19.7991 10.6188 19.1502 8.29688 15.6264 8.29688C13.9324 8.29688 12.7956 9.22648 12.3315 10.1078H12.2825V8.57827H8.94141V19.7944H12.4204V14.2406C12.4204 12.7783 12.6976 11.3643 14.5085 11.3643C16.2928 11.3643 16.3194 13.0331 16.3194 14.3344V19.7951H19.7949Z'
                            fill='#E3FFEE'
                          />
                          <path d='M3.27734 8.58594H6.76054V19.802H3.27734V8.58594Z' fill='#E3FFEE' />
                          <path
                            d='M5.0174 3C3.9037 3 3 3.9037 3 5.0174C3 6.1311 3.9037 7.0537 5.0174 7.0537C6.1311 7.0537 7.0348 6.1311 7.0348 5.0174C7.0341 3.9037 6.1304 3 5.0174 3V3Z'
                            fill='#E3FFEE'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_3001_7112'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_677_25145)'>
                          <path
                            d='M19.7949 19.7951V19.7944H19.7991V13.633C19.7991 10.6188 19.1502 8.29688 15.6264 8.29688C13.9324 8.29688 12.7956 9.22648 12.3315 10.1078H12.2825V8.57827H8.94141V19.7944H12.4204V14.2406C12.4204 12.7783 12.6976 11.3643 14.5085 11.3643C16.2928 11.3643 16.3194 13.0331 16.3194 14.3344V19.7951H19.7949Z'
                            fill='#757575'
                          />
                          <path d='M3.27734 8.58594H6.76054V19.802H3.27734V8.58594Z' fill='#757575' />
                          <path
                            d='M5.0174 3C3.9037 3 3 3.9037 3 5.0174C3 6.1311 3.9037 7.0537 5.0174 7.0537C6.1311 7.0537 7.0348 6.1311 7.0348 5.0174C7.0341 3.9037 6.1304 3 5.0174 3V3Z'
                            fill='#757575'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_677_25145'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </FooterSocialItem>
                </Link>
                <Link href='https://www.youtube.com/channel/UCTeLqsY5Z0Hh7i-7iFQlpxA'>
                  <FooterSocialItem isEnterPrice={isEnterPrice}>
                    {isEnterPrice ? (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_3001_7118)'>
                          <path
                            d='M19.1452 7.01494C18.5388 6.29405 17.4191 6 15.2809 6H7.51898C5.33179 6 4.19318 6.31302 3.58903 7.08051C3 7.82882 3 8.93138 3 10.4574V13.3659C3 16.3222 3.69888 17.8232 7.51898 17.8232H15.2809C17.1352 17.8232 18.1627 17.5637 18.8274 16.9275C19.5091 16.2752 19.8 15.21 19.8 13.3659V10.4574C19.8 8.84809 19.7544 7.73902 19.1452 7.01494ZM13.7857 12.3132L10.261 14.1553C10.1822 14.1964 10.096 14.2169 10.01 14.2169C9.91255 14.2169 9.81533 14.1906 9.72921 14.1385C9.56707 14.0403 9.46805 13.8645 9.46805 13.6749V10.0026C9.46805 9.81333 9.5668 9.63774 9.72862 9.53943C9.89049 9.44113 10.0918 9.43441 10.2598 9.52166L13.7844 11.3519C13.9637 11.445 14.0763 11.6301 14.0766 11.8321C14.0768 12.0342 13.9647 12.2196 13.7857 12.3132Z'
                            fill='#E3FFEE'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_3001_7118'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_677_25151)'>
                          <path
                            d='M19.1452 7.01494C18.5388 6.29405 17.4191 6 15.2809 6H7.51898C5.33179 6 4.19318 6.31302 3.58903 7.08051C3 7.82882 3 8.93138 3 10.4574V13.3659C3 16.3222 3.69888 17.8232 7.51898 17.8232H15.2809C17.1352 17.8232 18.1627 17.5637 18.8274 16.9275C19.5091 16.2752 19.8 15.21 19.8 13.3659V10.4574C19.8 8.84809 19.7544 7.73902 19.1452 7.01494ZM13.7857 12.3132L10.261 14.1553C10.1822 14.1964 10.096 14.2169 10.01 14.2169C9.91255 14.2169 9.81533 14.1906 9.72921 14.1385C9.56707 14.0403 9.46805 13.8645 9.46805 13.6749V10.0026C9.46805 9.81333 9.5668 9.63774 9.72862 9.53943C9.89049 9.44113 10.0918 9.43441 10.2598 9.52166L13.7844 11.3519C13.9637 11.445 14.0763 11.6301 14.0766 11.8321C14.0768 12.0342 13.9647 12.2196 13.7857 12.3132Z'
                            fill='#757575'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_677_25151'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </FooterSocialItem>
                </Link>
                <Link href='https://www.instagram.com/copilotplatforms/'>
                  <FooterSocialItem isEnterPrice={isEnterPrice}>
                    {isEnterPrice ? (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_3001_7122)'>
                          <path
                            d='M14.55 3H8.25C5.35095 3 3 5.35095 3 8.25V14.55C3 17.4491 5.35095 19.8 8.25 19.8H14.55C17.4491 19.8 19.8 17.4491 19.8 14.55V8.25C19.8 5.35095 17.4491 3 14.55 3ZM18.225 14.55C18.225 16.5765 16.5765 18.225 14.55 18.225H8.25C6.2235 18.225 4.575 16.5765 4.575 14.55V8.25C4.575 6.2235 6.2235 4.575 8.25 4.575H14.55C16.5765 4.575 18.225 6.2235 18.225 8.25V14.55Z'
                            fill='#E3FFEE'
                          />
                          <path
                            d='M11.3992 7.20312C9.07977 7.20312 7.19922 9.08368 7.19922 11.4031C7.19922 13.7226 9.07977 15.6031 11.3992 15.6031C13.7187 15.6031 15.5992 13.7226 15.5992 11.4031C15.5992 9.08368 13.7187 7.20312 11.3992 7.20312ZM11.3992 14.0281C9.95232 14.0281 8.77422 12.85 8.77422 11.4031C8.77422 9.95518 9.95232 8.77813 11.3992 8.77813C12.8461 8.77813 14.0242 9.95518 14.0242 11.4031C14.0242 12.85 12.8461 14.0281 11.3992 14.0281Z'
                            fill='#E3FFEE'
                          />
                          <path
                            d='M15.9151 7.44742C16.2242 7.44742 16.4748 7.19686 16.4748 6.88777C16.4748 6.57869 16.2242 6.32812 15.9151 6.32812C15.606 6.32812 15.3555 6.57869 15.3555 6.88777C15.3555 7.19686 15.606 7.44742 15.9151 7.44742Z'
                            fill='#E3FFEE'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_3001_7122'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_677_25155)'>
                          <path
                            d='M14.55 3H8.25C5.35095 3 3 5.35095 3 8.25V14.55C3 17.4491 5.35095 19.8 8.25 19.8H14.55C17.4491 19.8 19.8 17.4491 19.8 14.55V8.25C19.8 5.35095 17.4491 3 14.55 3ZM18.225 14.55C18.225 16.5765 16.5765 18.225 14.55 18.225H8.25C6.2235 18.225 4.575 16.5765 4.575 14.55V8.25C4.575 6.2235 6.2235 4.575 8.25 4.575H14.55C16.5765 4.575 18.225 6.2235 18.225 8.25V14.55Z'
                            fill='#757575'
                          />
                          <path
                            d='M11.3992 7.20312C9.07977 7.20312 7.19922 9.08368 7.19922 11.4031C7.19922 13.7226 9.07977 15.6031 11.3992 15.6031C13.7187 15.6031 15.5992 13.7226 15.5992 11.4031C15.5992 9.08368 13.7187 7.20312 11.3992 7.20312ZM11.3992 14.0281C9.95232 14.0281 8.77422 12.85 8.77422 11.4031C8.77422 9.95518 9.95232 8.77813 11.3992 8.77813C12.8461 8.77813 14.0242 9.95518 14.0242 11.4031C14.0242 12.85 12.8461 14.0281 11.3992 14.0281Z'
                            fill='#757575'
                          />
                          <path
                            d='M15.9151 7.44742C16.2242 7.44742 16.4748 7.19686 16.4748 6.88777C16.4748 6.57869 16.2242 6.32812 15.9151 6.32812C15.606 6.32812 15.3555 6.57869 15.3555 6.88777C15.3555 7.19686 15.606 7.44742 15.9151 7.44742Z'
                            fill='#757575'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_677_25155'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </FooterSocialItem>
                </Link>
              </FooterSocialList>
            </FooterFirst>
            <FooterRight>
              <FotterMenuLeft>
                <FooterMenu isEnterPrice={isEnterPrice}>
                  <p>Features</p>
                  <FooterMenuList isEnterPrice={isEnterPrice}>
                    <Link href='/features/messaging-app'>Messaging</Link>
                    <Link href='/features/billing-app'>Billing</Link>
                    <Link href='/features/files-app'>Files</Link>
                    <Link href='/features/forms-app'>Forms</Link>
                    <Link href='/features/helpdesk-app'>Helpdesk</Link>
                    <Link href='/apps'>Apps</Link>
                  </FooterMenuList>
                </FooterMenu>
              </FotterMenuLeft>
              <FotterMenuLeft>
                <FooterMenu isEnterPrice={isEnterPrice}>
                  <p>Solutions</p>
                  <FooterMenuList isEnterPrice={isEnterPrice}>
                    <Link href='/solutions/accounting-firms'>Accounting firms</Link>
                    <Link href='/solutions/marketing-agencies'>Marketing agencies</Link>
                    <Link href='/solutions/startups'>Startups</Link>
                  </FooterMenuList>
                  <FooterMenu className='padding' isEnterPrice={isEnterPrice}>
                    <p>Company</p>
                    <FooterMenuList isEnterPrice={isEnterPrice}>
                      <Link href='/copilot-plus'>Enterprise</Link>
                      <Link href='/pricing'>Pricing</Link>
                      <Link href='/jobs'>Jobs</Link>
                      <Link href='/brands'>Brand</Link>
                    </FooterMenuList>
                  </FooterMenu>
                </FooterMenu>
              </FotterMenuLeft>
              <FotterMenuLeft>
                <FooterMenu isEnterPrice={isEnterPrice}>
                  <p>Resources</p>
                  <FooterMenuList isEnterPrice={isEnterPrice}>
                    <Link href='http://copilot.com/blog'>Blog</Link>
                    <Link href='http://security.copilot.com'>Security</Link>
                    <Link href='http://copilot.com/updates'>What’s New</Link>
                    <Link href='#'>Help Center</Link>
                    <Link href='/university'>Video Tutorials</Link>
                    <Link href='http://docs.copilot.com/'>API Reference</Link>
                    <Link href='https://status.copilot.com/'>System Status</Link>
                    <Link href='/sitemap'>Sitemap</Link>
                  </FooterMenuList>
                </FooterMenu>
              </FotterMenuLeft>
            </FooterRight>
            <FooterMobile>
              <FotterMenuMobile>
                <FooterMenu isEnterPrice={isEnterPrice}>
                  <p>Features</p>
                  <FooterMenuList isEnterPrice={isEnterPrice}>
                    <Link href='/features/messaging-app'>Messaging</Link>
                    <Link href='/features/billing-app'>Billing</Link>
                    <Link href='/features/files-app'>Files</Link>
                    <Link href='/features/forms-app'>Forms</Link>
                    <Link href='/features/helpdesk-app'>Helpdesk</Link>
                    <Link href='/apps'>Apps</Link>
                  </FooterMenuList>
                </FooterMenu>
                <FooterMenu className='padding' isEnterPrice={isEnterPrice}>
                  <p>Solutions</p>
                  <FooterMenuList isEnterPrice={isEnterPrice}>
                    <Link href='/solutions/accounting-firms'>Accounting firms</Link>
                    <Link href='/solutions/marketing-agencies'>Marketing agencies</Link>
                    <Link href='/solutions/startups'>Startups</Link>
                  </FooterMenuList>
                </FooterMenu>
              </FotterMenuMobile>
              <FotterMenuMobile>
                <FooterMenu isEnterPrice={isEnterPrice}>
                  <p>Company</p>
                  <FooterMenuList isEnterPrice={isEnterPrice}>
                    <Link href='/copilot-plus'>Enterprise</Link>
                    <Link href='/pricing'>Pricing</Link>
                    <Link href='/jobs'>Jobs</Link>
                    <Link href='/brands'>Brand</Link>
                  </FooterMenuList>
                </FooterMenu>
                <FooterMenu className='padding' isEnterPrice={isEnterPrice}>
                  <p>Resources</p>
                  <FooterMenuList isEnterPrice={isEnterPrice}>
                    <Link href='http://copilot.com/blog'>Blog</Link>
                    <Link href='http://security.copilot.com'>Security</Link>
                    <Link href='http://copilot.com/updates'>What’s New</Link>
                    <Link href='#'>Help Center</Link>
                    <Link href='/university'>Video Tutorials</Link>
                    <Link href='http://docs.copilot.com/'>API Reference</Link>
                    <Link href='https://status.copilot.com/'>System Status</Link>
                    <Link href='/sitemap'>Sitemap</Link>
                  </FooterMenuList>
                </FooterMenu>
              </FotterMenuMobile>
            </FooterMobile>
          </FooterInnerBlock>
        </Container>
      </FooterSection>
    </>
  );
}
