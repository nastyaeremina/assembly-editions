import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../button/button';
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
  ThanksWrap
} from './styles';

export default function BookDemoForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
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
                  <ContactText>A Copilot expert will contact you soon.</ContactText>
                  <p>
                    In the mean time, you can start a free trial <Link href='#'> here</Link>.
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
        <FormSection>
          <Link href='/'>
            <ImgWrap>
              <Image src='/images/booklogo.svg' alt='book-logo' width={107} height={24} className='desktop' />
              <Image src='/images/booklogomb.svg' alt='book-logo' width={96} height={21} className='mbicon' />
            </ImgWrap>
          </Link>
          <FormTxt>
            <h4>Let’s talk</h4>
            <p>Speak to a Copilot expert to learn more and experience a demo.</p>
          </FormTxt>
          <FormDetail>
            <NameBlock>
              <NameInfo className='firstlable'>
                <label for='First-Name-'>
                  First Name <span>*</span>
                </label>
                <Input type='text' className='inputtext' />
              </NameInfo>
              <NameInfo className='firstlable'>
                <label for='Last-Name-'>
                  Last name <span>*</span>
                </label>
                <Input type='text' className='inputtext' />
              </NameInfo>
            </NameBlock>
            <label for='Last-Name-'>
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
            />
            <label for='Last-Name-'>
              Comany name <span>*</span>
            </label>
            <Input type='text' placeholder='' required='' className='inputtext' />
            <label for='Last-Name-'>
              How did you find us? <span>*</span>
            </label>
            <select id='source' name='How-did-you-find-us' data-name='How did you find us?' required='' class='wselect'>
              <option value=''></option>
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
            <label for='Last-Name-'>
              What industry are you in? <span>*</span>
            </label>
            <select
              id='industry'
              name='What-industry-are-you-in'
              data-name='What industry are you in?'
              required=''
              class='wselect'>
              <option value=''></option>
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
            <label for='Last-Name-'>
              How large is your company? <span>*</span>
            </label>
            <select
              id='company_size'
              name='How-large-is-your-company'
              data-name='How large is your company?'
              required=''
              class='wselect'>
              <option value=''></option>
              <option value='1'>Just me</option>
              <option value='5'>2 - 5</option>
              <option value='10'>6 - 10</option>
              <option value='50'>11 - 50</option>
              <option value='100'>51 - 100</option>
              <option value='100+'>100+</option>
            </select>
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
              class='sm'></textarea>
          </FormDetail>
          <Button text={'Let’s talk'} href={'#'} className='btnposition' onClick={() => setIsSubmit(true)} />
          <LastText>
            <span>or</span>
            <HelpLink className='icon-link'>
              <Link href='https://dashboard.copilot.com/onboarding' className='learn-link mb0'>
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
  );
}
