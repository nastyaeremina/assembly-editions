'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Script from 'next/script';
import { useDispatch, useSelector } from 'react-redux';
import { checkValidation, sendEmail } from '../../services/bookDemoService';
import { setformValidationError, updateBookDemoItem } from '../../actions/bookDemoActions';
import { INDUSTRY_ARRAY } from '../../constants/constant';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';
import Button from '../button/button';
import Validation from '../Validation/validation';
import {
  MainSection,
  FormSection,
  FormTxt,
  FormDetail,
  Input,
  NameBlock,
  NameInfo,
  LastText,
  ImgWrap,
  HelpLink,
  SubmitSection,
  CardView,
  CardList,
  ImgLine,
  TextWrap,
  ContactText,
  ThanksWrap,
  ValidationForm
} from './styles';

export default function BookDemoForm({ productDemoSlug }) {
  const bookDemoSelector = useSelector((state) => state.bookDemo);
  const { validationError, bookDemoData } = bookDemoSelector;
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  const onChangeInfo = useCallback(
    (propsName, value) => {
      dispatch(updateBookDemoItem({ propsName, value }));
    },
    [dispatch]
  );

  const onChangeIndustry = useCallback(() => {
    onChangeInfo('industry_other', '');
    onChangeInfo('youInerestedBusiness', '');
  }, [onChangeInfo]);

  const showHideChiliPiper = useCallback(() => {
    function q(a) {
      return function () {
        window.ChiliPiper[a].q = (window.ChiliPiper[a].q || []).concat([arguments]);
      };
    }
    window.ChiliPiper =
      window.ChiliPiper ||
      'submit scheduling showCalendar submit widget bookMeeting'.split(' ').reduce(function (a, b) {
        a[b] = q(b);
        return a;
      }, {});
    window.ChiliPiper.submit('copilotplatforms', 'webflow-inbound-router', {
      title: 'Thanks! What time works best for a quick call?'
    });
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      dispatch(setformValidationError(''));
      const checkInput = await dispatch(checkValidation(bookDemoData));
      if (!checkInput) {
        return;
      } else {
        // sendEmail(bookDemoData);
        if (['10', '50']?.includes(bookDemoData?.companySize) && INDUSTRY_ARRAY?.includes(bookDemoData?.industry)) {
          showHideChiliPiper();
        } else {
          fetch('/api/contact', {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDemoData)
          }).then((res) => {
            console.log('Response received');
            if (res.status === 200) {
              console.log('Response succeeded!');
            }
          });
          setIsSubmit(true);
        }
      }
    },
    [bookDemoData, dispatch, showHideChiliPiper]
  );

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    return () => {
      dispatch(setformValidationError(null));
    };
  }, [dispatch]);

  return (
    <>
      <Script src='https://js.chilipiper.com/marketing.js' type='text/javascript' async></Script>
      <MainSection>
        {isSubmit ? (
          <SubmitSection>
            <Link href='/'>
              <ImgWrap>
                <Image src='/images/booklogo.svg' alt='book-logo' width={107} height={24} className='desktop' />
                <Image src='/images/booklogomb.svg' alt='book-logo' width={96} height={21} className='mbicon' />
              </ImgWrap>
            </Link>
            <ThanksWrap>
              <CardView>
                <CardList>
                  <ImgLine>
                    <Image src='/images/upline.svg' alt='line-icon' width={200} height={25} />
                  </ImgLine>
                  <TextWrap>
                    <h2>Thank you!</h2>
                    <ContactText>A member from the Copilot team will be in touch if there is a good fit. </ContactText>
                    <p>
                      Until then, consider{' '}
                      <Link href={COPILOT_ONBORADING_LINK} target='_blank'>
                        starting a free trial
                      </Link>
                      , <Link href={`/${productDemoSlug}`}>watching a product demo</Link> , or registering for{' '}
                      <Link href={'/weekly-demo'}>weekly office hours</Link>.
                    </p>
                  </TextWrap>
                  <ImgLine>
                    <Image src='/images/downline.svg' alt='line-icon' width={200} height={25} />
                  </ImgLine>
                </CardList>
              </CardView>
            </ThanksWrap>
          </SubmitSection>
        ) : (
          <FormSection onSubmit={onSubmit}>
            <Link href='/'>
              <ImgWrap>
                <Image src='/images/booklogo.svg' alt='book-logo' width={107} height={24} className='desktop' />
                <Image src='/images/booklogomb.svg' alt='book-logo' width={96} height={21} className='mbicon' />
              </ImgWrap>
            </Link>
            <FormTxt>
              <p>Speak to a Copilot expert to learn more and experience a demo.</p>
            </FormTxt>
            <FormDetail>
              <NameBlock>
                <input type='hidden' id='lead_source' name='Source' value='Book a demo' />
                <NameInfo className='firstlable'>
                  <label for='First-Name-'>
                    First name <span>*</span>
                  </label>
                  <Input
                    type='text'
                    className='inputtext'
                    value={bookDemoData?.firstName}
                    id={`First-Name-`}
                    name={'First-Name'}
                    onChange={(e) => onChangeInfo('firstName', e.target.value)}
                    required={true}
                  />
                  {validationError?.name === 'firstName' && <Validation error={validationError?.message} />}
                </NameInfo>

                <NameInfo className='firstlable'>
                  <label for='lastName'>
                    Last name <span>*</span>
                  </label>
                  <Input
                    type='text'
                    id='lastName'
                    className='inputtext'
                    name={'Last-Name'}
                    value={bookDemoData?.lastName}
                    onChange={(e) => onChangeInfo('lastName', e.target.value)}
                    required
                  />
                  {validationError?.name === 'lastName' && <Validation error={validationError?.message} />}
                </NameInfo>
              </NameBlock>
              <label for='Email'>
                Work email <span>*</span>
              </label>
              <Input
                type='email'
                name='Email'
                data-name='Email'
                placeholder=''
                id='Email'
                required=''
                className='inputtext'
                value={bookDemoData?.email}
                onChange={(e) => onChangeInfo('email', e.target.value)}
              />
              {validationError?.name === 'email' && <Validation error={validationError?.message} />}

              <label for='Company'>
                Comany name <span>*</span>
              </label>
              <Input
                type='text'
                name={'Company-name'}
                placeholder=''
                required=''
                className='inputtext'
                value={bookDemoData?.companyName}
                onChange={(e) => onChangeInfo('companyName', e.target.value)}
              />
              {validationError?.name === 'companyName' && <Validation error={validationError?.message} />}
              <label for='Last-Name-'>
                How did you find us? <span>*</span>
              </label>
              <select
                id='source'
                name='How-did-you-find-us'
                data-name='How did you find us?'
                required=''
                class='wselect'
                onChange={(e) => onChangeInfo('howDidYouFindUs', e.target.value)}>
                <option value=''>Please select...</option>
                <option value='linkedin'>LinkedIn</option>
                <option value='google'>Google</option>
                <option value='reddit'>Reddit</option>
                <option value='press'>Press</option>
                <option value='fb_instragram'>Facebook / Instagram</option>
                <option value='referral'>Referral</option>
                <option value='twitter'>Twitter</option>
                <option value='review_site'>Review site</option>
                <option value='product_hunt'>Product Hunt</option>
                <option value='other'>Other</option>
              </select>
              {validationError?.name === 'howDidYouFindUs' && <Validation error={validationError?.message} />}
              <label for='Last-Name-'>
                What industry are you in? <span>*</span>
              </label>
              <select
                id='industry'
                name='What-industry-are-you-in'
                data-name='What industry are you in?'
                required=''
                class='wselect'
                onChange={(e) => {
                  onChangeInfo('industry', e.target.value);
                  onChangeIndustry();
                }}>
                <option value=''>Please select...</option>
                <option value='accounting_and_bookkeeping'>Accounting and bookkeeping</option>
                <option value='construction'>Construction</option>
                <option value='consulting'>Consulting</option>
                <option value='ecommerce'>Ecommerce</option>
                <option value='education'>Education</option>
                <option value='engineering'>Engineering</option>
                <option value='finance'>Finance</option>
                <option value='healthcare'>Healthcare</option>
                <option value='insurance'>Insurance</option>
                <option value='legal'>Legal</option>
                <option value='manufacturing'>Manufacturing</option>
                <option value='marketing'>Marketing</option>
                <option value='nonprofit'>Nonprofit</option>
                <option value='real_estate'>Real estate</option>
                <option value='recruiting_and_staffing'>Recruiting and staffing</option>
                <option value='technology'>Technology</option>
                <option value='other'>Other</option>
              </select>
              {validationError?.name === 'industry' && <Validation error={validationError?.message} />}
              {bookDemoData?.industry === 'other' && (
                <>
                  <label for='Industry-Name-'>
                    Enter your Industry<span>*</span>
                  </label>
                  <Input
                    type='text'
                    placeholder=''
                    required=''
                    className='inputtext'
                    value={bookDemoData?.industry_other}
                    onChange={(e) => onChangeInfo('industry_other', e.target.value)}
                  />
                  {validationError?.name === 'industry_other' && <Validation error={validationError?.message} />}
                </>
              )}
              {/* {INDUSTRY_ARRAY?.includes(bookDemoData?.industry) && (
                <>
                  <label for='Last-Name-'>
                    Are you interested in Copilot for your own business or are you contacting us on behalf of a client?{' '}
                    <span>*</span>
                  </label>
                  <select
                    id='Are-you-interested-in-Copilot-for-your-own-business-or-are-you-contacting-us-on-behalf-of-a-client'
                    name='Are-you-interested-in-Copilot-for-your-own-business-or-are-you-contacting-us-on-behalf-of-a-client'
                    data-name='Are-you-interested-in-Copilot-for-your-own-business-or-are-you-contacting-us-on-behalf-of-a-client?'
                    required=''
                    class='wselect'
                    onChange={(e) => onChangeInfo('youInerestedBusiness', e.target.value)}>
                    <option value=''>Please Select...</option>
                    <option value='I’m interested in Copilot for my own business.'>
                      I’m interested in Copilot for my own business.
                    </option>
                    <option value='I’m interested in Copilot for my clients.'>
                      I’m interested in Copilot for my clients.
                    </option>
                  </select>
                  {validationError?.name === 'youInerestedBusiness' && <Validation error={validationError?.message} />}
                </>
              )} */}

              <label for='Last-Name-'>
                How large is your company? <span>*</span>
              </label>
              <select
                id='company_size'
                name='How-large-is-your-company'
                data-name='How large is your company?'
                required=''
                class='wselect'
                onChange={(e) => onChangeInfo('companySize', e.target.value)}>
                <option value=''>Please select...</option>
                <option value='1'>Just me</option>
                <option value='5'>2 - 5</option>
                <option value='10'>6 - 10</option>
                <option value='50'>11 - 50</option>
                <option value='100'>51 - 100</option>
                <option value='100+'>100+</option>
              </select>
              {validationError?.name === 'companySize' && <Validation error={validationError?.message} />}
              <label for='Last-Name-'>
                What should we know about your situation or objectives? <span>*</span>
              </label>
              <textarea
                id='What-should-we-know-about-your-situation-or-objectives'
                name='What-should-we-know-about-your-situation-or-objectives'
                maxlength='255'
                data-name='What should we know about your situation or objectives?'
                placeholder=''
                required=''
                class='sm'
                rows={3}
                value={bookDemoData?.objectives}
                onChange={(e) => onChangeInfo('objectives', e.target.value)}
              />
              {validationError?.name === 'objectives' && <Validation isLast={true} error={validationError?.message} />}
            </FormDetail>

            <Button text={'Let’s talk'} className='btnposition' type={'submit'} />
            <LastText>
              <span>or</span>
              <HelpLink className='icon-link'>
                <Link href={COPILOT_ONBORADING_LINK} className='learn-link mb0'>
                  start your 14-day free trial
                  <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                    <path
                      d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                      stroke-width='1.92854'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='HoverArrow__tipPath'
                    />
                    <path
                      d='M10.33 5.99951H1.5'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='HoverArrow__linePath'
                    />
                  </svg>
                  <svg width='8' height='14' viewBox='0 0 8 14' fill='none' class='mobilearrow'>
                    <path
                      d='M2 3L6 7L2 11'
                      stroke='#09AA6C'
                      stroke-width='1.85714'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </Link>
              </HelpLink>
            </LastText>
          </FormSection>
        )}
      </MainSection>
    </>
  );
}
