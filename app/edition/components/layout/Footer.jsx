"use client";

import { cn } from "../../lib/utils";

const BASE = "https://assembly.com";

/* ── Social icons (inline SVG paths from Figma exports) ── */
const SOCIAL_ICONS = [
  {
    label: "X",
    href: "https://x.com/assemblycom",
    path: "M13.5815 10.7137L19.724 3.6001H18.2684L12.9349 9.77671L8.67499 3.6001H3.76172L10.2035 12.9402L3.76172 20.3999H5.21738L10.8497 13.8772L15.3485 20.3999H20.2617L13.5811 10.7137H13.5815ZM11.5877 13.0225L10.9351 12.0925L5.74187 4.69182H7.97768L12.1686 10.6644L12.8213 11.5944L18.2691 19.3578H16.0333L11.5877 13.0229V13.0225Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/assemblycom",
    path: "M14.6658 6.3896H16.1995V3.7184C15.9349 3.682 15.0249 3.6001 13.9651 3.6001C11.7538 3.6001 10.239 4.991 10.239 7.5474V9.9001H7.79883V12.8863H10.239V20.4001H13.2308V12.887H15.5723L15.944 9.9008H13.2301V7.8435C13.2308 6.9804 13.4632 6.3896 14.6658 6.3896V6.3896Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/assemblycom",
    paths: [
      "M20.3945 20.3957V20.395H20.3987V14.2336C20.3987 11.2194 19.7498 8.89746 16.226 8.89746C14.532 8.89746 13.3952 9.82706 12.9311 10.7084H12.8821V9.17886H9.54102V20.395H13.02V14.8412C13.02 13.3789 13.2972 11.9649 15.1081 11.9649C16.8924 11.9649 16.919 13.6337 16.919 14.935V20.3957H20.3945Z",
      "M3.875 9.18506H7.3582V20.4012H3.875V9.18506Z",
      "M5.6131 3.59912C4.4994 3.59912 3.5957 4.50282 3.5957 5.61652C3.5957 6.73022 4.4994 7.65282 5.6131 7.65282C6.7268 7.65282 7.6305 6.73022 7.6305 5.61652C7.6298 4.50282 6.7261 3.59912 5.6131 3.59912V3.59912Z",
    ],
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@assembly",
    path: "M19.7448 7.10283C19.1384 6.38194 18.0187 6.08789 15.8805 6.08789H8.11859C5.9314 6.08789 4.79279 6.40091 4.18864 7.1684C3.59961 7.91671 3.59961 9.01927 3.59961 10.5453V13.4538C3.59961 16.4101 4.29849 17.9111 8.11859 17.9111H15.8805C17.7348 17.9111 18.7623 17.6516 19.4271 17.0154C20.1088 16.363 20.3996 15.2979 20.3996 13.4538V10.5453C20.3996 8.93598 20.354 7.82691 19.7448 7.10283ZM14.3853 12.4011L10.8606 14.2432C10.7818 14.2843 10.6957 14.3048 10.6096 14.3048C10.5122 14.3048 10.4149 14.2785 10.3288 14.2264C10.1667 14.1282 10.0677 13.9524 10.0677 13.7628V10.0905C10.0677 9.90122 10.1664 9.72563 10.3282 9.62733C10.4901 9.52902 10.6914 9.5223 10.8594 9.60955L14.384 11.4398C14.5633 11.5329 14.676 11.718 14.6762 11.92C14.6764 12.1221 14.5643 12.3075 14.3853 12.4011Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/assembly",
    paths: [
      "M15.1456 3.60986H8.85312C5.95752 3.60986 3.60938 5.95801 3.60938 8.85361V15.1461C3.60938 18.0417 5.95752 20.3899 8.85312 20.3899H15.1456C18.0412 20.3899 20.3894 18.0417 20.3894 15.1461V8.85361C20.3894 5.95801 18.0412 3.60986 15.1456 3.60986ZM18.8162 15.1461C18.8162 17.1702 17.1697 18.8167 15.1456 18.8167H8.85312C6.82904 18.8167 5.1825 17.1702 5.1825 15.1461V8.85361C5.1825 6.82952 6.82904 5.18299 8.85312 5.18299H15.1456C17.1697 5.18299 18.8162 6.82952 18.8162 8.85361V15.1461Z",
      "M11.9977 7.80811C9.68104 7.80811 7.80273 9.68642 7.80273 12.0031C7.80273 14.3198 9.68104 16.1981 11.9977 16.1981C14.3144 16.1981 16.1927 14.3198 16.1927 12.0031C16.1927 9.68642 14.3144 7.80811 11.9977 7.80811ZM11.9977 14.625C10.5526 14.625 9.37586 13.4483 9.37586 12.0031C9.37586 10.5569 10.5526 9.38123 11.9977 9.38123C13.4429 9.38123 14.6196 10.5569 14.6196 12.0031C14.6196 13.4483 13.4429 14.625 11.9977 14.625Z",
      "M16.5102 8.05204C16.8189 8.05204 17.0691 7.80178 17.0691 7.49306C17.0691 7.18435 16.8189 6.93408 16.5102 6.93408C16.2014 6.93408 15.9512 7.18435 15.9512 7.49306C15.9512 7.80178 16.2014 8.05204 16.5102 8.05204Z",
    ],
  },
];

/* ── Footer link groups — arranged to match assembly.com layout ── */
/* Row 1 */
const COL_FEATURES = {
  title: "Features",
  links: [
    { label: "Client Portal", href: `${BASE}/client-portal` },
    { label: "Messages", href: `${BASE}/apps/directory/messaging-app` },
    { label: "Invoicing", href: `${BASE}/invoicing` },
    { label: "Contracts", href: `${BASE}/esignature` },
    { label: "Tasks", href: `${BASE}/apps/directory/tasks` },
    { label: "Files", href: `${BASE}/apps/directory/files-app` },
    { label: "Forms", href: `${BASE}/apps/directory/forms-app` },
    { label: "Stores", href: `${BASE}/store` },
  ],
};

const COL_SOLUTIONS = {
  title: "Solutions",
  links: [
    { label: "Accounting and Bookkeeping", href: `${BASE}/solutions/accounting-client-portal` },
    { label: "Marketing Agencies", href: `${BASE}/solutions/marketing-agency-client-portal` },
    { label: "Startups", href: `${BASE}/solutions/startups-client-portal` },
    { label: "Consulting Firms", href: `${BASE}/solutions/consulting-client-portal` },
    { label: "Real Estate", href: `${BASE}/solutions/real-estate-property-management-rental-management-client-portal` },
    { label: "Freelancers", href: `${BASE}/solutions/freelancer-client-portal` },
    { label: "Law Firms", href: `${BASE}/solutions/law-firm-client-portal-practice-management` },
    { label: "Designers", href: `${BASE}/solutions/designer-client-portal` },
  ],
};

const COL_RESOURCES = {
  title: "Resources",
  links: [
    { label: "Blog", href: `${BASE}/blog` },
    { label: "Guide", href: `${BASE}/guide` },
    { label: "What's New", href: `${BASE}/updates` },
    { label: "Find an expert", href: `${BASE}/experts` },
    { label: "Security", href: "https://security.assembly.com" },
    { label: "System Status", href: "https://status.assembly.com" },
    { label: "Affiliates Program", href: `${BASE}/affiliates` },
    { label: "LLM Info", href: `${BASE}/llm-info` },
  ],
};

/* Row 2 */
const COL_PLATFORM = {
  title: "Platform",
  links: [
    { label: "Developer Home", href: "https://docs.assembly.com/" },
    { label: "Custom Apps", href: "https://docs.assembly.com/docs/custom-apps-overview" },
    { label: "API Reference", href: "https://docs.assembly.com/reference/getting-started-introduction" },
    { label: "Assembly on Zapier", href: "https://zapier.com/apps/copilot/integrations" },
    { label: "Assembly on Make", href: "https://www.make.com/en/integrations/copilot" },
  ],
};

const COL_COMPARE = {
  title: "Compare",
  links: [
    { label: "Compare all", href: `${BASE}/comparison` },
    { label: "vs Moxo", href: `${BASE}/comparison/assembly-vs-moxo-alternative` },
    { label: "vs Suitedash", href: `${BASE}/comparison/assembly-vs-suitedash-alternative` },
    { label: "vs HoneyBook", href: `${BASE}/comparison/assembly-vs-honeybook-alternative` },
    { label: "vs SmartVault", href: `${BASE}/comparison/assembly-vs-smartvault-alternative` },
  ],
};

const COL_BLOG = {
  title: "Blog",
  links: [
    { label: "Copilot is now Assembly", href: `${BASE}/blog/copilot-is-now-assembly` },
    { label: "Assembly Assistant is in Beta", href: `${BASE}/blog/assembly-assistant-beta` },
    { label: "How to Create a Customer Portal", href: `${BASE}/blog/how-to-create-a-customer-portal` },
    { label: "How to Bill a Client for the First Time", href: `${BASE}/blog/how-to-bill-a-client-for-the-first-time` },
    { label: "The Best Client Portal Software", href: `${BASE}/blog/best-client-portal-software` },
    { label: "Productized Services: How It Works", href: `${BASE}/blog/productized-services` },
  ],
};

/* Row 3 */
const COL_COMPANY = {
  title: "Company",
  links: [
    { label: "Jobs", href: `${BASE}/jobs` },
    { label: "Brand", href: `${BASE}/brand` },
    { label: "Pricing", href: `${BASE}/pricing` },
    { label: "Terms", href: `${BASE}/legal/terms-of-service` },
    { label: "Privacy", href: `${BASE}/legal/privacy-policy` },
  ],
};

const COL_CONTRACT_TEMPLATES = {
  title: "Contract Templates",
  links: [
    { label: "Marketing Contract Templates", href: `${BASE}/contract-templates/marketing` },
    { label: "Accounting Contract Templates", href: `${BASE}/contract-templates/accounting` },
    { label: "Social Media Contract Templates", href: `${BASE}/contract-templates/social-media` },
    { label: "Client Onboarding Templates", href: `${BASE}/contract-templates/client-onboarding` },
  ],
};

/* Group into rows for the right-side grid */
const FOOTER_ROWS = [
  [COL_FEATURES, COL_SOLUTIONS, COL_RESOURCES],
  [COL_PLATFORM, COL_COMPARE, COL_BLOG],
  [COL_COMPANY, COL_CONTRACT_TEMPLATES],
];

/* ── Components ── */

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3
        style={{
          fontSize: "0.8125rem",
          fontWeight: 500,
          color: "#707070",
          fontFamily: "'PP Mori', var(--font-sans)",
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", margin: "0.75rem 0 0", padding: 0 }}>
        {links.map((link) => (
          <li key={link.label} style={{ marginTop: "0.6rem" }}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 400,
                transition: "color 0.15s ease",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#707070")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }) {
  const paths = icon.paths || [icon.path];
  return (
    <a
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        transition: "opacity 0.15s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((d, i) => (
          <path key={i} d={d} fill="rgba(255,255,255,0.85)" />
        ))}
      </svg>
    </a>
  );
}

/* Small Assembly logo for the left column */
function SmallLogo() {
  return (
    <svg
      viewBox="0 0 823 153"
      fill="rgba(255,255,255,0.85)"
      aria-hidden="true"
      style={{ height: 22, width: "auto" }}
    >
      <path d="M201.652 123.715H189.03L230.812 22.1612H243.144L285.071 123.715H272.449L260.553 94.6996H213.548L201.652 123.715ZM237.05 37.6844L218.19 83.6738H255.91L237.05 37.6844ZM323.338 125.311C305.059 125.311 291.566 115.736 290.551 99.4871H302.302C303.173 109.497 312.312 115.01 323.919 115.01C334.799 115.01 340.022 110.803 340.022 103.114C340.022 95.8602 334.364 94.2644 326.385 91.5079L315.214 87.7359C303.898 83.9639 292.582 80.4821 292.582 66.5547C292.582 53.4978 302.737 45.0833 319.566 45.0833C336.54 45.0833 348.291 54.2232 350.177 71.3422H338.426C337.121 60.6065 329.577 55.3838 319.131 55.3838C309.701 55.3838 304.188 59.591 304.188 66.2645C304.188 74.2438 312.603 75.8396 318.986 78.0158L329.431 81.4976C343.504 86.1401 351.918 90.9276 351.918 103.694C351.918 117.187 342.053 125.311 323.338 125.311ZM391.099 125.311C372.82 125.311 359.327 115.736 358.312 99.4871H370.063C370.934 109.497 380.073 115.01 391.68 115.01C402.56 115.01 407.783 110.803 407.783 103.114C407.783 95.8602 402.125 94.2644 394.146 91.5079L382.975 87.7359C371.659 83.9639 360.343 80.4821 360.343 66.5547C360.343 53.4978 370.498 45.0833 387.327 45.0833C404.301 45.0833 416.053 54.2232 417.939 71.3422H406.187C404.882 60.6065 397.338 55.3838 386.892 55.3838C377.462 55.3838 371.949 59.591 371.949 66.2645C371.949 74.2438 380.364 75.8396 386.747 78.0158L397.193 81.4976C411.265 86.1401 419.679 90.9276 419.679 103.694C419.679 117.187 409.814 125.311 391.099 125.311ZM464.083 125.311C441.306 125.311 426.218 108.627 426.218 85.5598C426.218 59.3008 443.192 45.0833 462.632 45.0833C483.814 45.0833 497.451 59.3008 497.886 83.9639V87.3007H438.259C438.985 103.694 448.56 114.865 464.083 114.865C474.819 114.865 482.653 109.497 485.845 99.4871H497.596C494.114 115.301 481.637 125.311 464.083 125.311ZM438.985 77.2904H485.264C483.088 63.7982 474.964 55.5288 462.632 55.5288C450.446 55.5288 441.451 63.5081 438.985 77.2904ZM521.413 123.715H509.372V46.8242H518.947L520.108 58.7205C525.331 50.4512 535.341 45.0833 546.367 45.0833C557.973 45.0833 566.677 51.0315 570.594 60.3164C575.527 51.3216 586.118 45.0833 597.869 45.0833C614.118 45.0833 624.563 56.5444 624.563 72.2127V123.715H612.522V72.6479C612.522 62.3475 606.138 55.6739 595.838 55.6739C581.475 55.6739 573.061 65.249 572.916 77.0002V123.715H561.019V72.6479C561.019 62.3475 554.636 55.6739 544.336 55.6739C529.973 55.6739 521.559 65.249 521.413 77.0002V123.715ZM678.507 125.311C665.885 125.311 655.585 119.073 650.362 109.062L649.056 123.715H639.481V14.9073H651.522V58.8656C657.18 50.4512 666.901 45.0833 678.507 45.0833C698.817 45.0833 713.035 61.3319 713.035 84.8344C713.035 108.772 698.817 125.311 678.507 125.311ZM676.621 114.865C690.838 114.865 700.558 102.534 700.558 84.8344C700.558 67.5702 690.838 55.5288 676.476 55.5288C661.968 55.5288 651.522 67.2801 651.522 84.2541C651.522 102.244 661.968 114.865 676.621 114.865ZM736.993 123.715H724.952V14.9073H736.993V123.715ZM762.035 152.73H749.703V142.575H762.035C769.869 142.575 773.206 139.818 774.947 135.176L779.154 123.715H776.252L745.786 46.8242H758.698L783.651 111.674L807.734 46.8242H820.065L785.537 139.818C782.345 148.233 775.237 152.73 762.035 152.73Z" />
      <path d="M144.783 104.581V129.078C144.783 137.741 137.76 144.767 129.097 144.767H4.32194C0.480187 144.767 -1.44552 140.12 1.2717 137.403L30.5192 108.162C32.8117 105.87 35.9247 104.581 39.168 104.581H144.792H144.783Z" />
      <path d="M144.783 49.2463V73.7381C144.783 82.4007 137.761 89.4273 129.093 89.4273H49.251L85.8587 52.8272C88.1512 50.5349 91.2593 49.2463 94.5026 49.2463H144.788H144.783Z" />
      <path d="M144.783 4.32162V18.4086C144.783 27.0712 137.761 34.0978 129.093 34.0978H104.59L137.419 1.27161C140.136 -1.44541 144.783 0.480151 144.783 4.32162Z" />
    </svg>
  );
}

export function Footer({ className }) {
  return (
    <footer
      className={cn("relative z-50", className)}
      style={{ backgroundColor: "#101010" }}
    >
      <div
        className="footer-outer"
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 4rem",
        }}
      >
        {/* Top-level: left brand column + right link columns */}
        <div className="footer-layout">
          {/* ── Left column: logo, tagline, social icons ── */}
          <div className="footer-brand">
            <SmallLogo />
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.65)",
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                margin: "1.25rem 0 0",
                lineHeight: 1.5,
                maxWidth: 200,
              }}
            >
              Create remarkable client experiences
            </p>

            {/* Social icons row */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "1.5rem",
                alignItems: "center",
              }}
            >
              {SOCIAL_ICONS.map((icon) => (
                <SocialIcon key={icon.label} icon={icon} />
              ))}
            </div>
          </div>

          {/* ── Right side: link column rows ── */}
          <div className="footer-links">
            {FOOTER_ROWS.map((row, ri) => (
              <div key={ri} className="footer-link-row">
                {row.map((col) => (
                  <LinkColumn
                    key={col.title}
                    title={col.title}
                    links={col.links}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .footer-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 3rem;
        }
        .footer-link-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        .footer-link-row:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 1024px) {
          .footer-layout {
            grid-template-columns: 200px 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .footer-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-brand {
            padding-bottom: 1rem;
          }
          .footer-link-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .footer-link-row {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .footer-outer {
            padding-bottom: 4rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
