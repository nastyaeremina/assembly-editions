// TODO: switch is not working

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import SEO from '../../components/seo';

import { Container, SecondryButton } from '../../styles/commonStyles';
import {
  HeroSection,
  PricingSection,
  PriceMenu,
  PriceButton,
  YearlyButton,
  MonthlyButton,
  WrapSlide,
  PricingMenu,
  PlanButton,
  PriceTable,
  PricingButton
} from '../../styles/pricingstyles';
import CTA from '../../components/cta/cta';
import FAQ from '../../components/faq/faq';
import Button from '../../components/button/button';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';
import PricingCardSection from '../../components/pricingcard/pricingCardSection';
import { getPricingPageDetail } from '../../lib/contentful-pricing';
import { PRICING_PAGE_ID } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';

export default function NewIndex({ details, planFeatures }) {
  const [isShowFeature, setShowFeature] = useState(true);
  const [isYearly, Yearly] = useState(true);

  const toggleShowFeature = useCallback(() => {
    setShowFeature(!isShowFeature);
  }, [isShowFeature]);

  const setYearly = useCallback(() => {
    Yearly(true);
  }, []);

  const setMonthly = useCallback(() => {
    Yearly(false);
  }, []);

  const renderTableData = useCallback((value) => {
    if (isEmpty(value)) return null;
    var result = value?.split(/\[(.*?)\]/);
    if (result?.[1] === 'true') {
      return (
        <>
          <div style={{ display: 'flex', gap: 10 }}>
            <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} /> <span>{result?.[2]}</span>
          </div>
        </>
      );
    }
    if (value?.toLowerCase() === 'true')
      return <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />;
    else return <span>{value}</span>;
  }, []);

  const renderPlanFeaturesView = useMemo(() => {
    if (isEmpty(planFeatures)) return null;
    return planFeatures?.map((item, index) => {
      return (
        <>
          <thead key={`planfeatures_index_${index}`}>
            <tr>
              <th colSpan={3} className='tablepadding tab'>
                {item?.section}
              </th>
              <th className='tab'></th>
              <th className='tab'></th>
              <th className='tab'></th>
            </tr>
          </thead>
          <tbody>
            {item?.items?.map((featuresItem, featuresIndex) => {
              return (
                <tr key={`plan_features_${item?.section}_index_${featuresIndex}`}>
                  <td colSpan={3} className='sticky'>
                    <h4>{featuresItem?.name}</h4>
                    {documentToReactComponents(featuresItem?.description?.json)}
                  </td>
                  <td className='sticky'>{renderTableData(featuresItem?.planStarter)}</td>
                  <td className='sticky'>{renderTableData(featuresItem?.planProfessional)}</td>
                  <td className='sticky'>{renderTableData(featuresItem?.planAdvanced)}</td>
                </tr>
              );
            })}
          </tbody>
        </>
      );
    });
  }, [planFeatures, renderTableData]);

  const renderTableHeader = useMemo(() => {
    return (
      <table className={!isShowFeature && 'active'}>
        <thead>
          <tr>
            <th colSpan={3} className='tableBorder tablehead'></th>
            <th className='tablehead'>
              <p className='amount'>
                {isYearly && `$${details?.plansCollection?.items[0]?.annualPrice}`}
                {!isYearly && `$${details?.plansCollection?.items[0]?.monthlyPrice}`}
              </p>
              <span className='spantext'>per internal user</span>
            </th>
            <th className='tablehead'>
              <p className='amount'>
                {isYearly && `$${details?.plansCollection?.items[1]?.annualPrice}`}
                {!isYearly && `$${details?.plansCollection?.items[1]?.monthlyPrice}`}
              </p>
              <span className='spantext'>per internal user</span>
            </th>
            <th className='tablehead'>
              <p className='amount'>
                {isYearly && `$${details?.plansCollection?.items[2]?.annualPrice}`}
                {!isYearly && `$${details?.plansCollection?.items[2]?.monthlyPrice}`}
              </p>
              <span className='spantext'>per internal user</span>
            </th>
          </tr>
          <tr className='bordercolor'>
            <th colSpan={3}>Features</th>
            <th>Starter</th>
            <th>Professional</th>
            <th>Advanced</th>
          </tr>
        </thead>
      </table>
    );
  }, [details?.plansCollection?.items, isShowFeature, isYearly]);

  return (
    <>
      <SEO seoData={details?.seoMetadata} />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            {!isEmpty(details?.header) && <h1>{details?.header}</h1>}
            {!isEmpty(details?.body) && <p>{details?.body}</p>}
            <PricingButton>
              <Button text={'Try for free'} hoverColor={'rgba(255, 255, 255, 0.8)'} href={COPILOT_ONBORADING_LINK} />
            </PricingButton>
          </Container>
        </HeroSection>
        <PricingSection>
          <Container>
            <PriceMenu>
              <PriceButton>
                <WrapSlide>
                  <YearlyButton className={isYearly && 'active'} onClick={setYearly}>
                    <button>Pay yearly</button>
                  </YearlyButton>
                </WrapSlide>
                <MonthlyButton className={!isYearly && 'active'} onClick={setMonthly}>
                  <button>Pay monthly</button>
                </MonthlyButton>
              </PriceButton>
              <PricingMenu>
                {!isEmpty(details?.plansCollection?.items) && (
                  <PricingCardSection
                    data={details?.plansCollection?.items}
                    cardSize={details?.plansCollection?.total || 0}
                    isYearly={isYearly}
                  />
                )}
                <PlanButton>
                  <Button
                    isLink={false}
                    onClick={toggleShowFeature}
                    bgColor={'transparent'}
                    fontColor={'#000000'}
                    borderColor={'#000000'}
                    text={isShowFeature ? 'Show plan details' : 'Hide plan details'}
                    hoverColor={'rgba(0, 0, 0, 0.5)'}
                  />
                </PlanButton>
              </PricingMenu>
            </PriceMenu>
            {!isShowFeature && !isEmpty(planFeatures) && (
              <PriceTable>
                {renderTableHeader}
                <table className={!isShowFeature && 'active'}>
                  {renderPlanFeaturesView}
                  {/* <thead>
                    <tr>
                      <th colSpan={3} className='tablepadding tab'>
                        Access
                      </th>
                      <th className='tab'></th>
                      <th className='tab'></th>
                      <th className='tab'></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>Total clients</h4>
                        <p>
                          A client user is any client of your business that has their own login access to your portal.
                          Internal users (team members) are not considered client users.
                        </p>
                      </td>
                      <td className='sticky'>
                        <span>100</span>
                      </td>
                      <td className='sticky'>
                        <span>2,000</span>
                      </td>
                      <td className='sticky'>
                        <span>20,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>Total storage</h4>
                        <p>
                          File uploads in the Files App by any user contribute to your file storage limit. When you
                          reach your limit, our team will get in touch and ask that you make space or upgrade your
                          account.
                        </p>
                      </td>
                      <td className='sticky'>
                        <span>10GB</span>
                      </td>
                      <td className='sticky'>
                        <span>2TB</span>
                      </td>
                      <td className='sticky'>
                        <span>20TB</span>
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th colSpan={3} className='tablepadding tab'>
                        Features
                      </th>
                      <th className='tab'></th>
                      <th className='tab'></th>
                      <th className='tab'></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>Client management</h4>
                        <p>
                          Client management functionality lets you create, invite, organize, and manage client
                          information.
                        </p>
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>Custom fields</h4>
                        <p>
                          With custom fields, you can add and track custom properties for your clients. For example, you
                          can track locations, addresses, or birthdays.
                        </p>
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>Team collaboration</h4>
                        <p>
                          Assign a lead and one or more assignees to each of your clients. This lets you stay organized
                          and gives you full control over which team member can access which client.
                        </p>
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>Customization</h4>
                        <p>
                          Customizations include the ability to upload you brand assets, design your theme, set up a
                          custom log in screen, and more.
                        </p>
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>Authentication</h4>
                        <p>
                          Internal users and client users can authenticate with email and password, and set up 2-factor
                          authentication. Google auth and magic link support is coming soon.
                        </p>
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>Automations & Zapier</h4>
                        <p>
                          Use Copilot API and Zapier triggers to set up automations that streamline the experience for
                          your clients.
                        </p>
                      </td>
                      <td className='sticky'></td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                      <td className='sticky'>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>API Access</h4>
                        <p>Use our REST API and Webhooks to set up automations and connect other tools.</p>
                      </td>
                      <td className='sticky'>
                        <span></span>
                      </td>
                      <td className='sticky'>
                        <span>Professional Rate Limit</span>
                      </td>
                      <td className='sticky'>
                        <span>Advanced Rate Limit</span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='sticky'>
                        <h4>White-labeling</h4>
                        <p>
                          With a custom domain, you can host your portal on your own URL. With a custom email domain,
                          you can send client email notifications from your own email. Powered by Copilot is a small
                          badge that shows in the client experience and can be removed on the Advanced plan.
                        </p>
                      </td>
                      <td className='sticky'>
                        <span></span>
                      </td>
                      <td className='sticky'>
                        <span>Custom domain</span>

                        <span className='spanpadding'>Custom email domain</span>
                      </td>
                      <td className='sticky'>
                        <span>Custom domain</span>
                        <span className='spanpadding'>Custom email domain</span>
                        <span className='spanpadding'>Remove ‘Powered by Copilot’</span>
                      </td>
                    </tr>
                  </tbody> */}
                </table>
              </PriceTable>
            )}
          </Container>
        </PricingSection>
        <FAQ contentID={details?.faqGroup?.sys?.id} />
        <CTA />
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const details = (await getPricingPageDetail({ id: PRICING_PAGE_ID })) ?? [];
  if (!isEmpty(details?.seoMetadata)) details.seoMetadata.canonical = 'https://www.copilot.com/pricing';

  const planFeatures = [];
  details?.planFeaturesCollection?.items?.forEach((element) => {
    const findIndex = planFeatures?.findIndex((feature) => feature?.section === element.section);

    if (findIndex !== -1) {
      planFeatures?.[findIndex]['items'].push(element);
    } else {
      const item = { section: element.section, items: [element] };
      planFeatures.push(item);
    }
  });
  return {
    props: {
      details,
      planFeatures
    }
  };
}
