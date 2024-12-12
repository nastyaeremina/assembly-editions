'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Script from 'next/script';
import { useDispatch, useSelector } from 'react-redux';
import { checkValidation } from '../../services/bookDemoService';
import { setformValidationError, updateBookDemoItem } from '../../actions/bookDemoActions';
import { BOOK_DEMO_CONTENT_TYPE } from '../../constants/constant';
import Button from '../button/button';
import Validation from '../Validation/validation';
import { isEmpty } from '../../helpers/helpers';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import {
  MainSection,
  FormSection,
  FormTxt,
  FormDetail,
  Input,
  NameBlock,
  NameInfo,
  ImgWrap,
  SubmitSection,
  CardView,
  CardList,
  TextWrap,
  ThanksWrap,
  ItemDiv
} from './styles';

export default function BookDemoForm({ productDemoSlug, data, thankYouMessage }) {
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
        if (
          data?.[BOOK_DEMO_CONTENT_TYPE.COMPANY_SIZE_CRITERIA]?.includes(bookDemoData?.companySize) &&
          data?.[BOOK_DEMO_CONTENT_TYPE.INDUSTRY_CRITERIA]?.includes(bookDemoData?.industry)
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
            <Link href='/'>
              <ImgWrap>
                <Image src='/images/booklogo.svg' alt='book-logo' width={140} height={30} className='desktop' />
                <Image src='/images/booklogomb.svg' alt='book-logo' width={140} height={30} className='mbicon' />
              </ImgWrap>
            </Link>
            <FormTxt>
              <h2>Book a demo</h2>
              <p>Speak to a Copilot expert to learn more and experience a demo.</p>
            </FormTxt>
            <ThanksWrap>
              <CardView>
                <CardList>
                  {!isEmpty(thankYouMessage) && (
                    <>
                      <TextWrap>
                        <SVGComponent name='success-icon' width='60' height='60' viewBox='0 0 60 60' />
                        <h1>Thank you!</h1>
                        <p>
                          We look forward to meeting you. Until then, please consider starting a free trial or watching
                          the product demo.
                        </p>
                      </TextWrap>
                      <div className='button-group'>
                        <Button text={'Start trial'} href={'/'} />
                        <Button
                          text={'Watch demo'}
                          href={'/'}
                          bgColor={'transparent'}
                          fontColor={'--black'}
                          borderColor={'--black'}
                          hoverColor={'--hover-color'}
                        />
                      </div>
                    </>
                  )}
                </CardList>
              </CardView>
            </ThanksWrap>
          </SubmitSection>
        ) : (
          <FormSection onSubmit={onSubmit}>
            <Link href='/'>
              <ImgWrap>
                <Image src='/images/booklogo.svg' alt='book-logo' width={140} height={30} className='desktop' />
                <Image src='/images/booklogomb.svg' alt='book-logo' width={140} height={30} className='mbicon' />
              </ImgWrap>
            </Link>
            <FormTxt>
              <h2>Book a demo</h2>
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
                    placeholder='First name'
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
                    required={true}
                    placeholder='Last name'
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
                placeholder='Work email address'
                id='Email'
                required=''
                className='inputtext'
                value={bookDemoData?.email}
                onChange={(e) => onChangeInfo('email', e.target.value)}
              />
              {validationError?.name === 'email' && <Validation error={validationError?.message} />}

              <label for='Company'>
                Company name <span>*</span>
              </label>
              <Input
                type='text'
                name={'Company-name'}
                placeholder='Your company name'
                required=''
                className='inputtext'
                value={bookDemoData?.companyName}
                onChange={(e) => onChangeInfo('companyName', e.target.value)}
              />
              {validationError?.name === 'companyName' && <Validation error={validationError?.message} />}
              <ItemDiv>
                <label for='Last-Name-'>
                  Company size <span>*</span>
                </label>
                <div className='icon-div'>
                  <SVGComponent name='drop-down-arrow-icon' width='12' height='12' viewBox='0 0 12 13' />
                </div>
                <select
                  id='company_size'
                  name='How-large-is-your-company'
                  data-name='How large is your company?'
                  required=''
                  class='wselect'
                  onChange={(e) => onChangeInfo('companySize', e.target.value)}>
                  <option value=''>Select...</option>
                  {data?.[BOOK_DEMO_CONTENT_TYPE.COMPANY_SIZE]?.map((item, index) => {
                    return (
                      <option value={item} key={`industry_index_${index}`}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                {validationError?.name === 'companySize' && <Validation error={validationError?.message} />}
              </ItemDiv>
              <ItemDiv>
                <label for='Last-Name-'>
                  Industry <span>*</span>
                </label>
                <div className='icon-div'>
                  <SVGComponent name='drop-down-arrow-icon' width='12' height='12' viewBox='0 0 12 13' />
                </div>
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
                  <option value=''>Select...</option>
                  {data?.[BOOK_DEMO_CONTENT_TYPE.INDUSTRY]?.map((item, index) => {
                    return (
                      <option value={item} key={`industry_index_${index}`}>
                        {item}
                      </option>
                    );
                  })}
                  <option value='other'>Other</option>
                </select>
                {validationError?.name === 'industry' && <Validation error={validationError?.message} />}
              </ItemDiv>
              <ItemDiv>
                <label for='Last-Name-'>
                  How did you find us? <span>*</span>
                </label>
                <div className='icon-div'>
                  <SVGComponent name='drop-down-arrow-icon' width='12' height='12' viewBox='0 0 12 13' />
                </div>
                <select
                  id='source'
                  name='How-did-you-find-us'
                  data-name='How did you find us?'
                  required=''
                  class='wselect'
                  onChange={(e) => onChangeInfo('howDidYouFindUs', e.target.value)}>
                  <option value=''>Select...</option>
                  {data?.[BOOK_DEMO_CONTENT_TYPE.FIND_US]?.map((item, index) => {
                    return (
                      <option value={item} key={`industry_index_${index}`}>
                        {item}
                      </option>
                    );
                  })}
                  <option value='other'>Other</option>
                </select>
                {validationError?.name === 'howDidYouFindUs' && <Validation error={validationError?.message} />}
              </ItemDiv>
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

              <label for='Last-Name-'>
                What should we know about your situation or objectives? <span>*</span>
              </label>
              <textarea
                id='What-should-we-know-about-your-situation-or-objectives'
                name='What-should-we-know-about-your-situation-or-objectives'
                maxlength='255'
                data-name='What should we know about your situation or objectives?'
                placeholder='Type a description here...'
                required=''
                class='sm'
                rows={3}
                value={bookDemoData?.objectives}
                onChange={(e) => onChangeInfo('objectives', e.target.value)}
              />
              {validationError?.name === 'objectives' && <Validation isLast={true} error={validationError?.message} />}
            </FormDetail>

            <Button text={'Submit'} className='btnposition' type={'submit'} />
          </FormSection>
        )}
      </MainSection>
    </>
  );
}
