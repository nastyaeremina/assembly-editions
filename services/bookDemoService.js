import { setformValidationError } from '../actions/bookDemoActions';
import { INDUSTRY_ARRAY } from '../constants/constant';
import { isEmail } from '../helpers/helpers';

export const sendEmail = (userDetail) => {
  try {
    console.log('userDetail', userDetail);
  } catch (e) {
    console.log('Error : ', e);
    return false;
  } finally {
    console.log('finally');
  }
};

export const checkValidation = (payload) => (dispatch) => {
  let valid = true;
  if (!payload) {
    dispatch(setformValidationError('Fist name is Required', dispatch));
    valid = false;
  } else if (!payload?.firstName || payload?.firstName?.trim() === '') {
    dispatch(setformValidationError('Fist name is Required', dispatch));
    valid = false;
  } else if (!payload?.lastName || payload?.lastName?.trim() === '') {
    dispatch(setformValidationError('Last name is Required', dispatch));
    valid = false;
  } else if (!payload?.email || payload?.email?.trim() === '') {
    dispatch(setformValidationError('Email is required', dispatch));
    valid = false;
  } else if (isEmail(payload?.email) === false) {
    dispatch(setformValidationError('Please enter a valid email address', dispatch));
    valid = false;
  } else if (!payload?.companyName || payload?.companyName?.trim() === '') {
    dispatch(setformValidationError('Company name is Required', dispatch));
    valid = false;
  } else if (!payload?.howDidYouFindUs || payload?.howDidYouFindUs?.trim() === '') {
    dispatch(setformValidationError('Please select how to find us', dispatch));
    valid = false;
  } else if (!payload?.industry || payload?.industry?.trim() === '') {
    dispatch(setformValidationError('Please select industry', dispatch));
    valid = false;
  } else if (payload?.industry === 'other' && (!payload?.industry_other || payload?.industry_other?.trim() === '')) {
    dispatch(setformValidationError('Industry Name is required', dispatch));
    valid = false;
  } else if (
    INDUSTRY_ARRAY?.includes(payload?.industry) &&
    (!payload?.youInerestedBusiness || payload?.youInerestedBusiness?.trim() === '')
  ) {
    dispatch(setformValidationError('Please select your interested business', dispatch));
    valid = false;
  } else if (!payload?.companySize || payload?.companySize?.trim() === '') {
    dispatch(setformValidationError('Please select Company size', dispatch));
    valid = false;
  } else if (!payload?.objectives || payload?.objectives?.trim() === '') {
    dispatch(setformValidationError('objectives is required', dispatch));
    valid = false;
  }
  return valid;
};
