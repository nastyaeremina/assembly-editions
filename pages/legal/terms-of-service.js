import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import LegalFooter from '../../components/footer/legalfooter';
import Navbar from '../../components/navbar/navbar';
import { HEADER_LIST, TERMS_OF_SERVICE_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap';
import { Container } from '../../styles/commonStyles';
import { PrivacuHero, MainSection, SubData, SubHeading, SubCatagory, Catagory } from '../../styles/legalStyles';

export default function TermsOfService({ content }) {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      {/* <Layout> */}
      <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
      <MainSection>
        <PrivacuHero>
          <Container>
            <h2>Terms of Service</h2>
          </Container>
        </PrivacuHero>
        <Container>
          <SubData>{<ReactMarkdown>{content}</ReactMarkdown>}</SubData>
        </Container>
        {/* <Container>
          <SubData>
            <p>Effective date: 11/23/2022</p>
            <p>
              By signing up for a Copilot Account (as defined in Section 1) or by using any Copilot Services (as defined
              below), you are agreeing to be bound by the following terms and conditions (the “Terms of Service”).
            </p>
            <p>
              As used in these Terms of Service, “we”, “us” and “Copilot” means the applicable Copilot Contracting Party
              (as defined in Section 4 below).
            </p>
            <p>
              The services offered by Copilot under the Terms of Service include various products and services to help
              you sell goods and services to buyers. Any such services offered by Copilot are referred to in these Terms
              of Services as the “Services”. Any new features or tools which are added to the current Services shall be
              also subject to the Terms of Service. Copilot reserves the right to update and change the Terms of Service
              by posting updates and changes to the Copilot website. You are advised to check the Terms of Service from
              time to time for any updates or changes that may impact you. and if you do not accept such amendments, you
              must cease using the Services.
            </p>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>1.</h3>
              <h4>Account Terms</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                To access and use the Services, you must register for a Copilot account (“Account”) by providing your
                full legal name, a valid email address, and any other information indicated as required. Copilot may
                reject your application for an Account, or cancel an existing Account, for any reason, in our sole
              </SubCatagory>
              <SubCatagory>
                You must be the older of: (i) 18 years, or (ii) at least the age of majority in the jurisdiction where
                you reside and from which you use the Services to open an Account.
              </SubCatagory>
              <SubCatagory>
                You confirm that you are receiving any Services provided by Copilot for the purposes of carrying on a
                business activity and not for any personal, household or family purpose.
              </SubCatagory>
              <SubCatagory>
                You acknowledge that Copilot will use the email address you provide on opening an Account or as updated
                by you from time to time as the primary method for communication with you.
              </SubCatagory>
              <SubCatagory>
                You are responsible for keeping your password secure. Copilot cannot and will not be liable for any loss
                or damage from your failure to maintain the security of your Account and password.
              </SubCatagory>
              <SubCatagory>
                You are responsible for all activity and content such as photos, images, videos, graphics, written
                content, code, information, or data uploaded, collected, generated, stored, displayed, distributed,
                transmitted or exhibited on or in connection with your Account (“Materials”).
              </SubCatagory>
              <SubCatagory>
                A breach or violation of any term in the Terms of Service as determined in the sole discretion of
                Copilot may result in an immediate termination of your Services.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>2.</h3>
              <h4>Account Activation</h4>
            </SubHeading>
            <h5>
              2.1<span>Portal Owner</span>
            </h5>
            <Catagory>
              <SubCatagory>
                Subject to section 2.1(2), the person signing up for the Service by opening an Account will be the
                contracting party (“Portal Owner”) for the purposes of our Terms of Service and will be the person who
                is authorized to use any corresponding Account we may provide to the Portal Owner in connection with the
                Service.
              </SubCatagory>
              <SubCatagory>
                If you are signing up for the Services on behalf of your employer, your employer shall be the Portal
                Owner. If you are signing up for the Services on behalf of your employer, then you must use your
                employer-issued email address and you represent and warrant that you have the authority to bind your
                employer to our Terms of Service.
              </SubCatagory>
              <SubCatagory>
                Your Portal can only be associated with one Portal Owner. A Portal Owner may have multiple Portals.
                "Portal” means the online presence we set up that is associated with the Account.
              </SubCatagory>
            </Catagory>
            <h5 className='pt30'>
              2.2 <span>Internal Users</span>
            </h5>
            <Catagory>
              <SubCatagory>
                Based on your Copilot pricing plan, you can create one or more internal users (“Internal Users”)
                allowing other people to access the Account. With Internal Users, the Portal Owner can set permissions
                and let other people work in their Account while determining the level of access by Internal Users to
                specific business information.
              </SubCatagory>
              <SubCatagory>
                The Portal Owner is responsible and liable for the acts, omissions and defaults arising from use of
                Internal Users in the performance of obligations under these Terms of Service as if they were the Portal
                Owner’s own acts, omissions or defaults.
              </SubCatagory>
              <SubCatagory>
                The Portal Owner and the users under Internal Users are each referred to as a “Portal User”.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>3.</h3>
              <h4>General Conditions</h4>
            </SubHeading>
            <p className='margin'>
              You must read, agree with and accept all of the terms and conditions contained in these Terms of Service,
              including the Privacy policy before you may become a Copilot User.
            </p>
            <Catagory>
              <SubCatagory>Technical support in respect of the Services is only provided to Copilot Users.</SubCatagory>
              <SubCatagory>
                These Terms shall be governed by the laws of the State of New York, without regard to conflict of law
                provisions. In the event that a lawsuit is filed where permitted under the provisions above, or in the
                event that the provisions above are found not to apply to you or to a given dispute, we both agree that
                any judicial proceeding will be brought in the federal or state courts of New York, New York, USA. Both
                you and we consent to venue and personal jurisdiction there.
              </SubCatagory>
              <SubCatagory>
                You acknowledge and agree that Copilot may amend these Terms of Service at any time by posting the
                relevant amended and restated Terms of Service on Copilot's website. Your continued use of the Services
                after the amended Terms of Service are posted to Copilot's website constitutes your agreement to, and
                acceptance of, the amended Terms of Service. If you do not agree to any changes to the Terms of Service,
                do not continue to use the Service.
              </SubCatagory>
              <SubCatagory>
                You may not use the Copilot Services for any illegal or unauthorized purpose nor may you, in the use of
                the Service, violate any laws in your jurisdiction (including but not limited to copyright laws), the
                laws applicable to you in your customer’s jurisdiction. You will comply with all applicable laws, rules
                and regulations in your use of the Service and your performance of obligations under the Terms of
                Service.
              </SubCatagory>
              <SubCatagory>
                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of
                the Services, or access to the Services without the express written permission by Copilot.
              </SubCatagory>
              <SubCatagory>
                You shall not purchase search engine or other pay per click keywords (such as Google AdWords), or domain
                names that use Copilot or Copilot trademarks and/or variations and misspellings thereof.
              </SubCatagory>
              <SubCatagory>Questions about the Terms of Service should be sent to Copilot support.</SubCatagory>
              <SubCatagory>
                You understand that your Materials (not including credit card information), may be transferred
                unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to
                technical requirements of connecting networks or devices. Credit card information is always encrypted
                during transfer over networks.
              </SubCatagory>
              <SubCatagory>
                You acknowledge and agree that your use of the Services, including information transmitted to or stored
                by Copilot, is governed by its privacy policy accessible here.
              </SubCatagory>
              <SubCatagory>
                All the terms and provisions of the Terms of Service shall be binding upon and inure to the benefit of
                the parties to the Terms of Service and to their respective heirs, successors, permitted assigns and
                legal representatives. Copilot shall be permitted to assign these Terms of Service without notice to you
                or consent from you. You shall have no right to assign or otherwise transfer the Terms of Service, or
                any of your rights or obligations hereunder, to any third party without Copilot's prior written consent,
                to be given or withheld in Copilot's sole discretion.
              </SubCatagory>
              <SubCatagory>
                If any provision, or portion of the provision, in these Terms of Service is, for any reason, held to be
                invalid, illegal or unenforceable in any respect, then such invalidity, illegality or unenforceability
                will not affect any other provision (or the unaffected portion of the provision) of the Terms of
                Service, and the Terms of Service will be construed as if such invalid, illegal or unenforceable
                provision, or portion of the provision, had never been contained within the Terms of Service.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>4.</h3>
              <h4>Copilot Contracting Party</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                If the billing address of your Store is located in the United States or Canada, this Section 4(1)
                applies to you:
                <p>
                  a. “Copilot Contracting Party” means Copilot Platforms Inc., an American corporation, with offices
                  located at 169 Madison Ave #2103 New York, NY 10016.
                </p>
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>5.</h3>
              <h4>Copilot Rights</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                We reserve the right to modify or terminate the Services for any reason, without notice at any time. Not
                all Services and features are available in every jurisdiction and we are under no obligation to make any
                Services or features available in any jurisdiction.
              </SubCatagory>
              <SubCatagory>We reserve the right to refuse service to anyone for any reason at any time.</SubCatagory>
              <SubCatagory>
                We may, but have no obligation to, remove Materials and suspend or terminate Accounts if we determine in
                our sole discretion that the services offered via a Copilot, or the Materials uploaded or posted to a
                Portal, violate these Terms of Service.
              </SubCatagory>
              <SubCatagory>
                Verbal or written abuse of any kind (including threats of abuse or retribution) of any Copilot customer,
                Copilot employee, member, or officer will result in immediate Account termination.
              </SubCatagory>
              <SubCatagory>
                Copilot does not pre-screen Materials and it is in our sole discretion to refuse or remove any Materials
                from the Service, including your Portal.
              </SubCatagory>
              <SubCatagory>
                We reserve the right to provide our services to your competitors and make no promise of exclusivity in
                any particular market segment. You further acknowledge and agree that Copilot employees and contractors
                may also be Copilot customers/merchants and that they may compete with you, although they may not use
                your Confidential Information (as defined in Section 6) in doing so.
              </SubCatagory>
              <SubCatagory>
                In the event of a dispute regarding Account ownership, we reserve the right to request documentation to
                determine or confirm Account ownership. Documentation may include, but is not limited to, a scanned copy
                of your business license, government issued photo ID, the last four digits of the credit card on file,
                your status as an employee of an entity, etc.
              </SubCatagory>
              <SubCatagory>
                Copilot retains the right to determine, in our sole judgment, rightful Account ownership and transfer an
                Account to the rightful Portal Owner. If we are unable to reasonably determine the rightful Portal
                Owner, without prejudice to our other rights and remedies, Copilot reserves the right to temporarily
                disable an Account until resolution has been determined between the disputing parties.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>6.</h3>
              <h4>Confidentiality</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                “Confidential Information” shall include, but shall not be limited to, any and all information
                associated with a party’s business and not publicly known, including specific business information,
                technical processes and formulas, software, customer lists, prospective customer lists, names, addresses
                and other information regarding customers and prospective customers, product designs, sales, costs
                (including any relevant processing fees), price lists, and other unpublished financial information,
                business plans and marketing data, and any other confidential and proprietary information, whether or
                not marked as confidential or proprietary. Copilot Confidential Information includes all information
                that you receive relating to us, or to the Services, that is not known to the general public including
                information related to our security program and practices.
              </SubCatagory>
              <SubCatagory>
                Each party agrees to use the other party’s Confidential Information solely as necessary for performing
                its obligations under these Terms of Service and in accordance with any other obligations in these Terms
                of Service including this Section 6. Each party agrees that it shall take all reasonable steps, at least
                substantially equivalent to the steps it takes to protect its own proprietary information, to prevent
                the duplication, disclosure or use of any such Confidential Information, other than (i) by or to its
                employees, agents and subcontractors who must have access to such Confidential Information to perform
                such party’s obligations hereunder, who each shall treat such Confidential Information as provided
                herein, and who are each subject to obligations of confidentiality to such party that are at least as
                stringent as those contained herein; or (ii) as required by any law, regulation, or order of any court
                of proper jurisdiction over the parties and the subject matter contained in these Terms of Service,
                provided that, if legally permitted, the receiving party shall give the disclosing party prompt written
                notice and use commercially reasonable efforts to ensure that such disclosure is accorded confidential
                treatment. Confidential Information shall not include any information that the receiving party can
                prove: (A) was already in the public domain, or was already known by or in the possession of the
                receiving party, at the time of disclosure of such information; (B) is independently developed by the
                receiving party without use of or reference to the other party’s Confidential Information, and without
                breaching any provisions of these Terms of Service; or (C) is thereafter rightly obtained by the
                receiving party from a source other than the disclosing party without breaching any provision of these
                Terms of Service.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>7.</h3>
              <h4>Limitation of Liability</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                You expressly understand and agree that, to the extent permitted by applicable laws, Copilot shall not
                be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including
                but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses
                resulting from the use of or inability to use the Service.
              </SubCatagory>
              <SubCatagory>
                To the extent permitted by applicable laws, in no event shall Copilot or our suppliers be liable for
                lost profits or any special, incidental or consequential damages arising out of or in connection with
                our site, our Services or these Terms of Service (however arising including negligence). You agree to
                indemnify and hold us and (as applicable) our parent, subsidiaries, affiliates, Copilot partners,
                officers, directors, agents, employees, and suppliers harmless from any claim or demand, including
                reasonable attorneys’ fees, made by any third party due to or arising out of your breach of these Terms
                of Service or the documents it incorporates by reference (including the AUP), or your violation of any
                law or the rights of a third party.
              </SubCatagory>
              <SubCatagory>
                Your use of the Services is at your sole risk. The Services are provided on an “as is” and “as
                available” basis without any warranty or condition, express, implied or statutory.
              </SubCatagory>
              <SubCatagory>
                Copilot does not warrant that the Services will be uninterrupted, timely, secure, or error-free.
              </SubCatagory>
              <SubCatagory>
                Copilot does not warrant that the results that may be obtained from the use of the Services will be
                accurate or reliable.
              </SubCatagory>
              <SubCatagory>
                Copilot does not warrant that the quality of any products, services, information, or other materials
                purchased or obtained by you through the Services will meet your expectations, or that any errors in the
                Services will be corrected.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>8.</h3>
              <h4>Waiver and Complete Agreement</h4>
            </SubHeading>
            <p>
              The failure of Copilot to exercise or enforce any right or provision of the Terms of Service shall not
              constitute a waiver of such right or provision. The Terms of Service, including the documents it
              incorporates by reference, constitute the entire agreement between you and Copilot and govern your use of
              the Services and your Account, superseding any prior agreements between you and Copilot (including, but
              not limited to, any prior versions of the Terms of Service).
            </p>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>9.</h3>
              <h4>Intellectual Property and Customer Content</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                We do not claim any intellectual property rights over the Materials you provide to the Service. All
                Materials you upload remain yours. You can remove your Portal at any time by requesting deletion of your
                Account.
              </SubCatagory>
              <SubCatagory>
                By uploading Materials, you agree: (a) to allow other internet users to view the Materials you post
                publicly to your Portal; (b) to allow Copilot to store, and in the case of Materials you post publicly,
                display and use your Materials; and (c) that Copilot can, at any time, review and delete all the
                Materials submitted to its Service, although Copilot is not obligated to do so.
              </SubCatagory>
              <SubCatagory>
                You retain ownership over all Materials that you upload to your Portal; however, you agree to allow
                others to view Materials that you post publicly to your . You are responsible for compliance of the
                Materials with any applicable laws or regulations.
              </SubCatagory>
              <SubCatagory>
                Copilot shall have the non-exclusive right and license to use the names, trademarks, service marks and
                logos associated with your Portal to promote the Service.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>10.</h3>
              <h4>Payment of Fees</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                You will pay the Fees applicable to your subscription to Online Service and/or POS Services
                (“Subscription Fees”) and any other applicable fees, including but not limited to applicable fees
                relating to the value of sales made through your Portal when using all payment providers other than
                Copilot Payments (“Transaction Fees”), and any fees relating to your purchase or use of any services.
                Together, the Subscription Fees, Transaction Fees and the Additional Fees are referred to as the “Fees”.
              </SubCatagory>
              <SubCatagory>
                You must keep a valid payment method on file with us to pay for all incurred and recurring Fees. Copilot
                will charge applicable Fees to any valid payment method that you authorize (“Authorized Payment
                Method”), and Copilot will continue to charge the Authorized Payment Method for applicable Fees until
                the Services are terminated, and any and all outstanding Fees have been paid in full. Unless otherwise
                indicated, all Fees and other charges are in U.S. dollars, and all payments shall be in U.S. currency.
              </SubCatagory>
              <SubCatagory>
                Subscription Fees are paid in advance and will be billed in monthly or annual intervals (each such date,
                a “Billing Date”). Transaction Fees and Additional Fees will be charged from time to time at Copilot's
                discretion. You will be charged on each Billing Date for all outstanding Fees that have not previously
                been charged. Invoices will appear on the Plans page of your Portal’s settings. Users have approximately
                two weeks to bring up and settle any issues with the billing of Subscription Fees.
              </SubCatagory>
              <SubCatagory>
                If we are not able to process payment of Fees using an Authorized Payment Method, we will make a second
                attempt to process payment using any Authorized Payment Method 3 days later. If the second attempt is
                not successful, we will make a final attempt 3 days following the second attempt. If our final attempt
                is not successful, we may suspend and revoke access to your Account and the Services. Your Account will
                be reactivated upon your payment of any outstanding Fees, plus the Fees applicable to your next billing
                cycle. You may not be able to access your Account or your storefront during any period of suspension. If
                the outstanding Fees remain unpaid for 60 days following the date of suspension, Copilot reserves the
                right to terminate your Account.
              </SubCatagory>
              <SubCatagory>
                All Fees are exclusive of applicable federal, provincial, state, local or other governmental sales,
                goods and services (including Goods and Sales Tax under the Goods and Services Tax Act, Chapter 117A of
                Singapore), harmonized or other taxes, fees or charges now in force or enacted in the future (“Taxes”).
              </SubCatagory>
              <SubCatagory>
                You are responsible for all applicable Taxes that arise from or as a result of your subscription to or
                purchase of Copilot's products and services. To the extent that Copilot charges these Taxes, they are
                calculated using the tax rates that apply based on the billing address you provide to us. Such amounts
                are in addition to the Fees for such products and services and will be billed to your Authorized Payment
                Method. If you are exempt from payment of such Taxes, you must provide us with evidence of your
                exemption, which in some jurisdictions includes an original certificate that satisfies applicable legal
                requirements attesting to tax-exempt status. Tax exemption will only apply from and after the date we
                receive evidence satisfactory to Copilot of your exemption. If you are not charged Taxes by Copilot, you
                are responsible for determining if Taxes are payable, and if so, self-remitting Taxes to the appropriate
                tax authorities in your jurisdiction.
              </SubCatagory>
              <SubCatagory>
                For the avoidance of doubt, all sums payable by you to Copilot under these Terms of Service shall be
                paid free and clear of any deductions or withholdings whatsoever. Other than Taxes charged by Copilot to
                you and remitted to the appropriate tax authorities on your behalf, any deductions or withholdings that
                are required by law shall be borne by you and paid separately to the relevant taxation authority.
                Copilot shall be entitled to charge the full amount of Fees stipulated under these Terms of Service to
                your Authorized Payment Method ignoring any such deduction or withholding that may be required.
              </SubCatagory>
              <SubCatagory>
                You must maintain an accurate location in the administration menu of your Portal. If you change
                jurisdictions you must promptly update your location in the administration menu.
              </SubCatagory>
              <SubCatagory>Copilot does not provide refunds.</SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>11.</h3>
              <h4>Cancellation and Termination</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                You may cancel your Account and terminate the Terms of Service at any time by contacting Copilot Support
                and then following the specific instructions indicated to you in Copilot's response.
              </SubCatagory>
              <SubCatagory>Upon termination of the Services by either party for any reason:</SubCatagory>
              <SubCatagory>
                Copilot will cease providing you with the Services and you will no longer be able to access your
                Account;
              </SubCatagory>
              <SubCatagory>
                unless otherwise provided in the Terms of Service, you will not be entitled to any refunds of any Fees,
                pro rata or otherwise;
              </SubCatagory>
              <SubCatagory>
                any outstanding balance owed to Copilot for your use of the Services through the effective date of such
                termination will immediately become due and payable in full; and
              </SubCatagory>
              <SubCatagory>your Portal will be taken offline.</SubCatagory>
              <SubCatagory>
                If at the date of termination of the Service, there are any outstanding Fees owing by you, you will
                receive one final invoice via email. Once that invoice has been paid in full, you will not be charged
                again.
              </SubCatagory>
              <SubCatagory>
                We reserve the right to modify or terminate the Copilot Service, the Terms of Service and/or your
                Account for any reason, without notice at any time. Termination of the Terms of Service shall be without
                prejudice to any rights or obligations which arose prior to the date of termination.
              </SubCatagory>
              <SubCatagory>
                Fraud: Without limiting any other remedies, Copilot may suspend or terminate your Account if we suspect
                that you (by conviction, settlement, insurance or escrow investigation, or otherwise) have engaged in
                fraudulent activity in connection with the use of the Services.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>12.</h3>
              <h4>Modifications to the Service and Prices</h4>
            </SubHeading>
            <Catagory>
              <SubCatagory>
                Prices for using the Services are subject to change upon 30 days’ notice from Copilot. Such notice may
                be provided at any time by posting the changes to the Copilot Site (copilot.com) or the administration
                menu of your Portal via an announcement.
              </SubCatagory>
              <SubCatagory>
                Copilot reserves the right at any time, and from time to time, to modify or discontinue, the Services
                (or any part thereof) with or without notice.
              </SubCatagory>
              <SubCatagory>
                Copilot shall not be liable to you or to any third party for any modification, price change, suspension
                or discontinuance of the Service.
              </SubCatagory>
            </Catagory>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>13.</h3>
              <h4>Rights of Third Parties</h4>
            </SubHeading>
            <p>
              Prices for using the Services are subject to change upon 30 days’ notice from Copilot. Such notice may be
              provided at any time by posting the changes to the Copilot Site (copilot.com) or the administration menu
              of your Portal via an announcement.
            </p>
          </SubData>
          <SubData>
            <SubHeading>
              <h3>14.</h3>
              <h4>Privacy & Data Protection</h4>
            </SubHeading>
            <p>
              Copilot is firmly committed to protecting the privacy of your personal information and the personal
              information of your customers. By using the Service, you acknowledge and agree that Copilot's collection,
              usage and disclosure of this personal information is governed by our Privacy Policy.
            </p>
          </SubData>
        </Container> */}
      </MainSection>
      <LegalFooter />

      {/* </Layout> */}
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const content = (await getSitemap(TERMS_OF_SERVICE_ID)) ?? '';
  return {
    props: {
      content: content?.content
    }
  };
}
