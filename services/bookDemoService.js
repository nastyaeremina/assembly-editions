import { setformValidationError } from '../actions/bookDemoActions';
import { INDUSTRY_ARRAY } from '../constants/constant';
import { isEmail } from '../helpers/helpers';

// export const sendEmail = (userDetail) => {
//   try {
//     const nodemailer = require('nodemailer');

//     const messageBody = (
//       <div>
//         <p>You have received a new form submission!</p>
//         <br />
//         <br />
//         <p> First Name: {userDetail?.firstName}</p>
//         <p>Last Name: {userDetail?.lastName}</p>
//         <p>Email: {userDetail?.email}</p>
//         <p>Company name: {userDetail?.companyName}</p>
//         <p>How did you find us?: {userDetail?.howDidYouFindUs}</p>
//         <p>What industry are you in?: {userDetail?.industry}</p>
//         <p>Enter Your Industry: {userDetail?.industry_other}</p>
//         <p>
//           Are you interested in Portal for your own business or are you contacting us on behalf of a client?:{' '}
//           {userDetail?.youInerestedBusiness}
//         </p>
//         <p>How large is your company?: {userDetail?.companySize}</p>
//         <p>What should we know about your situation or objectives?: {userDetail?.objectives}</p>
//         <p>Source: Book a demo</p>
//       </div>
//     );

//     const transporter = nodemailer.createTransport({
//       port: 587,
//       host: 'email-smtp.us-west-2.amazonaws.com',
//       auth: {
//         user: 'krupali.nakrani123@gmail.com',
//         pass: 'Nakrani.121'
//       },
//       secure: true
//     });

//     const mailData = {
//       from: 'krupali.nakrani123@gmail.com',
//       to: 'krupalinakrani99@gmail.com',
//       subject: 'Following up on your Copilot sales form submission',
//       text: 'HELLO',
//       html: messageBody
//     };

//     // transporter.sendMail(mailData, function (err, info) {
//     //   if (err) console.log(err);
//     //   else console.log(info);
//     // });
//     console.log('userDetail', userDetail);
//   } catch (e) {
//     console.log('Error : ', e);
//     return false;
//   } finally {
//     console.log('finally');
//   }
// };

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
