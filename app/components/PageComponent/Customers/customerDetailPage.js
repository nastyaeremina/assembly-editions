'use client';
import React, { useCallback } from 'react';
import {
  CustomerSection,
  Detail,
  DetailSection,
  Head,
  Left,
  LeftSection,
  SectionBlock,
  Top
} from '../../../styles/casestudiestyles';
import { Container, Content } from '../../../styles/commonStyles';
import AppCardSection from '../../casestudies/appcardsection';
import { isEmpty } from '../../../helpers/helpers';
import { LinkSize } from '../../../constants/constant';
import StandardHero from '../../standardHero/standardHero';
import RichTextDetail from '../../richTextDetail/richText';
import NewCTA from '../../cta/newCTA';
import LinkComponent from '../../linkComponent/linkComponent';
import useNavbarHeight from '../../../hooks/useNavbarHeight';

export default function CaseStudiesPage({ details, customerCTA = {} }) {
  if (isEmpty(details)) return;
  const { totalHeight } = useNavbarHeight();

  const splitByH2 = useCallback((doc) => {
    if (!doc?.content) return { beforeH2: [], sections: [] };

    const sections = [];
    let currentSection = null;
    let beforeH2 = [];

    doc.content.forEach((node) => {
      if (node.nodeType === 'heading-2') {
        if (currentSection) sections.push(currentSection);

        currentSection = {
          title: node.content.map((c) => c.value).join(''),
          nodes: []
        };
      } else {
        if (!currentSection) {
          // nodes before first H2
          beforeH2.push(node);
        } else {
          currentSection.nodes.push(node);
        }
      }
    });

    if (currentSection) sections.push(currentSection);

    return { beforeH2, sections };
  }, []);

  const { beforeH2, sections } = splitByH2(details.body?.json);

  return (
    <div className='component-wrapper'>
      <StandardHero
        type={details.heroSection.type}
        data={{ ...details.heroSection, logo: details.customerLogo?.imageAsset?.url }}
        highlights={details.highlights}
      />
      <Container>
        <CustomerSection>
          <LeftSection>
            <Left totalHeight={totalHeight}>
              <Top>
                <Head>{`${details.customerLogo.name} at Glance`}</Head>
                <DetailSection>
                  {!isEmpty(details.customerFounded) && (
                    <Detail>
                      <h3>Founded</h3>
                      <p>{details.customerFounded}</p>
                    </Detail>
                  )}
                  {!isEmpty(details.customerSince) && (
                    <Detail>
                      <h3>Running on Assembly since</h3>
                      <p>{details.customerSince}</p>
                    </Detail>
                  )}
                  {!isEmpty(details.customerSince) && (
                    <Detail>
                      <h3>Company URL</h3>
                      <LinkComponent
                        title={details.customerCompanyUrl}
                        linkHref={
                          details.customerCompanyUrl.includes('https://') ||
                          details.customerCompanyUrl.includes('http://')
                            ? details.customerCompanyUrl
                            : `https:\\${details.customerCompanyUrl}`
                        }
                        size={LinkSize.LARGE}
                      />
                    </Detail>
                  )}
                  {!isEmpty(details.industry) && (
                    <Detail>
                      <h3>Industry</h3>
                      <LinkComponent
                        title={details.industry?.title}
                        linkHref={`/${details.industry?.slug}`}
                        size={LinkSize.LARGE}
                      />
                    </Detail>
                  )}
                  {(!isEmpty(details.appsCollection?.items) || !isEmpty(details.appsCollection?.items)) && (
                    <Detail>
                      <h3>Apps in use</h3>
                      <AppCardSection appsList={details.appsCollection?.items} />
                    </Detail>
                  )}
                </DetailSection>
              </Top>
            </Left>
          </LeftSection>
          {beforeH2.length > 0 && (
            <Content>
              <RichTextDetail
                data={{ ...details.body?.json, content: beforeH2 }}
                assets={details.body?.links}
                shouldHeadingCopy={false}
              />
            </Content>
          )}
        </CustomerSection>

        {sections.map((sec, i) => (
          <SectionBlock totalHeight={totalHeight}>
            <h2>{sec.title}</h2>
            <Content key={i}>
              <RichTextDetail
                data={{ ...details.body?.json, content: sec.nodes }}
                assets={details.body?.links}
                shouldHeadingCopy={false}
              />
            </Content>
          </SectionBlock>
        ))}
      </Container>
      {!isEmpty(customerCTA) && (
        <NewCTA
          title={customerCTA.title}
          description={customerCTA.description}
          primaryButtonLink={customerCTA.primaryButtonLink}
          primaryButtonText={customerCTA.primaryButtonText}
          secondaryButtonLink={customerCTA.secondaryButtonLink}
          secondaryButtonText={customerCTA.secondaryButtonText}
        />
      )}
    </div>
  );
}
