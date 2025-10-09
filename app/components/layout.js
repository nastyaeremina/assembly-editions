import { isEmpty } from '../helpers/helpers';
import Analytics from './analytics/analytics';
import MainFooter from '../components/footer/mainFooter';
import Navbar from './navbar/navbar';

/**
 * Layout Component
 *
 * Main layout wrapper that provides the page structure including footer and analytics.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @param {boolean} [props.isGlossary=false] - Whether this is a glossary page
 * @param {string} [props.abTestContentLabel=''] - AB test content label for analytics
 * @param {string} [props.abTestExperimentName=''] - AB test experiment name for analytics
 * @returns {Promise<JSX.Element>} - Promise that resolves to the rendered layout
 *
 * @example
 * <Layout isGlossary={false} abTestContentLabel="variant-a" abTestExperimentName="home-test">
 *   <PageContent />
 * </Layout>
 */
export default async function Layout({
  children,
  isGlossary = false,
  abTestContentLabel = '',
  abTestExperimentName = ''
}) {
  return (
    <div className='page-wrapper'>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      {!isGlossary && <MainFooter />}
      {!isEmpty(abTestExperimentName) && !isEmpty(abTestContentLabel) && (
        <Analytics experimentName={abTestExperimentName} contentLabel={abTestContentLabel} />
      )}
    </div>
  );
}
