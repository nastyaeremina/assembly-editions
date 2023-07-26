import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setformValidationError, updateBookDemoItem } from '../../actions/bookDemoActions';
import { INDUSTRY_ARRAY } from '../../constants/constant';
import { checkValidation } from '../../services/bookDemoService';
import { FormDetail, Input, NameBlock, NameInfo } from '../bookdemo/styles';
import Button from '../button/button';
import Validation from '../Validation/validation';
import { Form } from './styles';

export default function WeeklyDemoForm() {
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
      console.log('helloo');
      dispatch(setformValidationError(''));
      const checkInput = await dispatch(checkValidation(bookDemoData));
      if (!checkInput) {
        return;
      }
    },
    [bookDemoData, dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(setformValidationError(null));
    };
  }, [dispatch]);
  return (
    <Form onSubmit={onSubmit}>
      <FormDetail isWeeklyform={true}>
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
          className='inputtext'
          value={bookDemoData?.companyName}
          onChange={(e) => onChangeInfo('companyName', e.target.value)}
        />
        {validationError?.name === 'companyName' && <Validation error={validationError?.message} />}
        <label for='Last-Name-'>
          Industry <span>*</span>
        </label>
        <select
          id='industry'
          name='What-industry-are-you-in'
          data-name='What industry are you in?'
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
              className='inputtext'
              value={bookDemoData?.industry_other}
              onChange={(e) => onChangeInfo('industry_other', e.target.value)}
            />
            {validationError?.name === 'industry_other' && <Validation error={validationError?.message} />}
          </>
        )}
        {INDUSTRY_ARRAY?.includes(bookDemoData?.industry) && (
          <>
            <label for='Last-Name-'>
              Are you interested in Portal for your own business or are you contacting us on behalf of a client?{' '}
              <span>*</span>
            </label>
            <select
              id='Are-you-interested-in-Portal-for-your-own-business-or-are-you-contacting-us-on-behalf-of-a-client'
              name='Are-you-interested-in-Portal-for-your-own-business-or-are-you-contacting-us-on-behalf-of-a-client'
              data-name='Are-you-interested-in-Portal-for-your-own-business-or-are-you-contacting-us-on-behalf-of-a-client?'
              class='wselect'
              onChange={(e) => onChangeInfo('youInerestedBusiness', e.target.value)}>
              <option value=''>Please Select...</option>
              <option value='I’m interested in Portal for my own business.'>
                I’m interested in Portal for my own business.
              </option>
              <option value='I’m interested in Portal for my clients.'>I’m interested in Portal for my clients.</option>
            </select>
            {validationError?.name === 'youInerestedBusiness' && <Validation error={validationError?.message} />}
          </>
        )}

        <label for='Last-Name-'>
          Company size<span>*</span>
        </label>
        <select
          id='company_size'
          name='How-large-is-your-company'
          data-name='How large is your company?'
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
      </FormDetail>
      <Button text={'Register now'}  type={'submit'} />
    </Form>
  );
}
