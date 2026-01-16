'use client';
import { useCallback, useEffect, useState } from 'react';
import Script from 'next/script';
import { useDispatch, useSelector } from 'react-redux';
import { checkValidation } from '../../services/bookDemoService';
import { setformValidationError, updateBookDemoItem } from '../../actions/bookDemoActions';
import { BOOK_DEMO_CONTENT_TYPE } from '../../constants/constant';
import Validation from '../Validation/validation';
import { isEmpty } from '../../helpers/helpers';
import { EXTERNAL_LINK_KEYS } from '../../constants/constant';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import DropDown from '../dropdownComponent';
import {
  MainSection,
  FormSection,
  FormTxt,
  FormDetail,
  Input,
  NameBlock,
  NameInfo,
  SubmitSection,
  CardView,
  CardList,
  TextWrap,
  ThanksWrap,
  Details,
  SuccessIcon,
  Textarea
} from './styles';
import ButtonV2Component from '../button/buttonV2/buttonV2';

export default function BookDemoForm({ data, thankYouMessage, externalLinks = {} }) {
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

  useEffect(() => {
    const onPointerDown = () => {
      document.body.classList.add('using-mouse');
      document.body.classList.remove('using-keyboard');
    };
    const onKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
        document.body.classList.remove('using-mouse');
      }
    };

    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('keydown', onKeyDown, true);

    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, []);

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
        // Fetch personal email domains from URL
        let isWorkEmail = false;
        const emailDomain = bookDemoData?.email?.toLowerCase().split('@')[1];

        try {
          const response = await fetch(
            'https://gist.githubusercontent.com/ammarshah/f5c2624d767f91a7cbdc4e54db8dd0bf/raw/660fd949eba09c0b86574d9d3aa0f2137161fc7c/all_email_provider_domains.txt'
          );
          const text = await response.text();
          const personalDomains = text
            .split('\n')
            .map((domain) => domain.trim().toLowerCase())
            .filter((domain) => domain.length > 0);

          // Check if email domain is not in personal domains list
          isWorkEmail = !personalDomains.includes(emailDomain);
        } catch (error) {
          console.error('Failed to fetch email domains:', error);
          // Fallback: if email not fetch, use Contentful criteria
          isWorkEmail = data?.[BOOK_DEMO_CONTENT_TYPE.EMAIL_CRITERIA]?.some((allowedDomain) =>
            emailDomain?.includes(allowedDomain.toLowerCase())
          );
        }

        if (
          data?.[BOOK_DEMO_CONTENT_TYPE.COMPANY_SIZE_CRITERIA]?.includes(bookDemoData?.companySize) &&
          data?.[BOOK_DEMO_CONTENT_TYPE.INDUSTRY_CRITERIA]?.includes(bookDemoData?.industry) &&
          isWorkEmail &&
          data?.[BOOK_DEMO_CONTENT_TYPE.REASON_FOR_DEMO_CRITERIA]?.includes(bookDemoData?.reason_for_demo)
        ) {
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
    [bookDemoData, data, dispatch, showHideChiliPiper]
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
            <Details>
              <FormTxt>
                <h3>Book a demo</h3>
                <p>Speak to a Assembly expert to learn more and experience a demo.</p>
              </FormTxt>
              <ThanksWrap>
                <CardView>
                  <CardList>
                    {!isEmpty(thankYouMessage) && (
                      <>
                        <TextWrap>
                          <SuccessIcon>
                            <SVGComponent name='new-success-icon' width='60' height='60' viewBox='0 0 60 60' />
                          </SuccessIcon>
                          <h4>Demo request received</h4>
                          <p>We will be in touch to schedule a demo.</p>
                        </TextWrap>
                        <div className='button-group'>
                          <ButtonV2Component
                            title={'Start trial'}
                            href={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#'}
                            isWidth
                          />
                        </div>
                      </>
                    )}
                  </CardList>
                </CardView>
              </ThanksWrap>
            </Details>
          </SubmitSection>
        ) : (
          <FormSection onSubmit={onSubmit}>
            <Details>
              <FormTxt>
                <h3>Book a demo</h3>
                <p>Speak to a Assembly expert to learn more and experience a demo.</p>
              </FormTxt>
              <FormDetail>
                <NameBlock>
                  <NameInfo className='firstlable'>
                    <label for='First-Name-'>First name</label>
                    <Input
                      type='text'
                      className='inputtext'
                      value={bookDemoData?.firstName}
                      id={`First-Name-`}
                      name={'First-Name'}
                      onChange={(e) => onChangeInfo('firstName', e.target.value)}
                      placeholder='First name'
                      isError={validationError?.name === 'firstName'}
                    />
                    {validationError?.name === 'firstName' && <Validation error={validationError?.message} />}
                  </NameInfo>

                  <NameInfo className='firstlable'>
                    <label for='lastName'>Last name</label>
                    <Input
                      type='text'
                      id='lastName'
                      className='inputtext'
                      name={'Last-Name'}
                      value={bookDemoData?.lastName}
                      onChange={(e) => onChangeInfo('lastName', e.target.value)}
                      placeholder='Last name'
                      isError={validationError?.name === 'lastName'}
                    />
                    {validationError?.name === 'lastName' && <Validation error={validationError?.message} />}
                  </NameInfo>
                </NameBlock>
                <label for='Email'>Work email</label>
                <Input
                  type='email'
                  name='Email'
                  data-name='Email'
                  placeholder='Work email address'
                  id='Email'
                  className='inputtext'
                  value={bookDemoData?.email}
                  onChange={(e) => onChangeInfo('email', e.target.value)}
                  isError={validationError?.name === 'email'}
                />
                {validationError?.name === 'email' && <Validation error={validationError?.message} />}

                <label for='Company'>Company name</label>
                <Input
                  type='text'
                  name={'Company-name'}
                  placeholder='Your company name'
                  className='inputtext'
                  value={bookDemoData?.companyName}
                  onChange={(e) => onChangeInfo('companyName', e.target.value)}
                  isError={validationError?.name === 'companyName'}
                />
                {validationError?.name === 'companyName' && <Validation error={validationError?.message} />}
                <label for='company_size'>Company size</label>
                <DropDown
                  id='company_size'
                  name='How-large-is-your-company'
                  dataName='How large is your company?'
                  applyDropdownCss
                  items={
                    data?.[BOOK_DEMO_CONTENT_TYPE.COMPANY_SIZE]?.map((item, index) => ({
                      id: `company_size_${index}`,
                      name: item,
                      value: item
                    })) || []
                  }
                  placeholder='Select...'
                  onSelect={(item) => onChangeInfo('companySize', item.value)}
                  defaultValue={
                    bookDemoData?.companySize
                      ? {
                          id: 'selected_company_size',
                          name: bookDemoData.companySize,
                          value: bookDemoData.companySize
                        }
                      : null
                  }
                  isError={validationError?.name === 'companySize'}
                />
                {validationError?.name === 'companySize' && <Validation error={validationError?.message} />}

                <label for='industry'>Industry</label>
                <DropDown
                  id='industry'
                  name='What-industry-are-you-in'
                  dataName='What industry are you in?'
                  applyDropdownCss
                  items={[
                    ...(data?.[BOOK_DEMO_CONTENT_TYPE.INDUSTRY]?.map((item, index) => ({
                      id: `industry_${index}`,
                      name: item,
                      value: item
                    })) || []),
                    {
                      id: 'industry_other',
                      name: 'Other',
                      value: 'other'
                    }
                  ]}
                  placeholder='Select...'
                  onSelect={(item) => {
                    onChangeInfo('industry', item.value);
                    onChangeIndustry();
                  }}
                  defaultValue={
                    bookDemoData?.industry
                      ? {
                          id: 'selected_industry',
                          name: bookDemoData.industry,
                          value: bookDemoData.industry
                        }
                      : null
                  }
                  isError={validationError?.name === 'industry'}
                />
                {validationError?.name === 'industry' && <Validation error={validationError?.message} />}

                <label for='source'>How did you find us?</label>
                <DropDown
                  id='source'
                  name='How-did-you-find-us'
                  data-name='How did you find us?'
                  applyDropdownCss
                  items={[
                    ...(data?.[BOOK_DEMO_CONTENT_TYPE.FIND_US]?.map((item, index) => ({
                      id: `find_us_${index}`,
                      name: item,
                      value: item
                    })) || []),
                    {
                      id: 'find_us_other',
                      name: 'Other',
                      value: 'other'
                    }
                  ]}
                  placeholder='Select...'
                  onSelect={(item) => onChangeInfo('howDidYouFindUs', item.value)}
                  defaultValue={
                    bookDemoData?.howDidYouFindUs
                      ? {
                          id: 'selected_find_us',
                          name: bookDemoData.howDidYouFindUs,
                          value: bookDemoData.howDidYouFindUs
                        }
                      : null
                  }
                  isError={validationError?.name === 'howDidYouFindUs'}
                />
                {validationError?.name === 'howDidYouFindUs' && <Validation error={validationError?.message} />}
                {bookDemoData?.industry === 'other' && (
                  <>
                    <label for='Industry-Name-'>Enter your Industry</label>
                    <Input
                      type='text'
                      placeholder='Type a description here...'
                      className='inputtext'
                      value={bookDemoData?.industry_other}
                      onChange={(e) => onChangeInfo('industry_other', e.target.value)}
                      isError={validationError?.name === 'industry_other'}
                    />
                    {validationError?.name === 'industry_other' && <Validation error={validationError?.message} />}
                  </>
                )}
                <label for='reason_for_demo'>Reason for demo</label>
                <DropDown
                  id='reason_for_demo'
                  name='Reason for demo'
                  dataName='Reason for demo'
                  applyDropdownCss
                  items={[
                    ...(data?.[BOOK_DEMO_CONTENT_TYPE.REASON_FOR_DEMO]?.map((item, index) => ({
                      id: `reason_for_demo_${index}`,
                      name: item,
                      value: item
                    })) || []),
                    {
                      id: 'reason_for_demo_other',
                      name: 'Other',
                      value: 'other'
                    }
                  ]}
                  placeholder='Select...'
                  onSelect={(item) => {
                    onChangeInfo('reason_for_demo', item.value);
                  }}
                  defaultValue={
                    bookDemoData?.reason_for_demo
                      ? {
                          id: 'selected_reason_for_demo',
                          name: bookDemoData.reason_for_demo,
                          value: bookDemoData.reason_for_demo
                        }
                      : null
                  }
                  isError={validationError?.name === 'reason_for_demo'}
                />
                {validationError?.name === 'reason_for_demo' && <Validation error={validationError?.message} />}

                <label for='Last-Name-'>Your situation or goals</label>
                <Textarea
                  id='What-should-we-know-about-your-situation-or-objectives'
                  name='What-should-we-know-about-your-situation-or-objectives'
                  maxlength='255'
                  data-name='What should we know about your situation or objectives?'
                  placeholder='Type a description here...'
                  rows={3}
                  value={bookDemoData?.objectives}
                  onChange={(e) => onChangeInfo('objectives', e.target.value)}
                  isError={validationError?.name === 'objectives'}
                />
                {validationError?.name === 'objectives' && (
                  <Validation isLast={true} error={validationError?.message} />
                )}
              </FormDetail>
            </Details>

            <ButtonV2Component title='Submit' type='submit' isWidth />
          </FormSection>
        )}
      </MainSection>
    </>
  );
}
