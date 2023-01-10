// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  require('dotenv').config();
  const nodemailer = require('nodemailer');

  try {
    const messageBody = (
      <div>
        <p>You have received a new form submission!</p>
        <br />
        <br />
        <p> First Name: {req.body?.firstName}</p>
        <p>Last Name: {req.body?.lastName}</p>
        <p>Email: {req.body?.email}</p>
        <p>Company name: {req.body?.companyName}</p>
        <p>How did you find us?: {req.body?.howDidYouFindUs}</p>
        <p>What industry are you in?: {req.body?.industry}</p>
        <p>Enter Your Industry: {req.body?.industry_other}</p>
        <p>
          Are you interested in Portal for your own business or are you contacting us on behalf of a client?:{' '}
          {req.body?.youInerestedBusiness}
        </p>
        <p>How large is your company?: {req.body?.companySize}</p>
        <p>What should we know about your situation or objectives?: {req.body?.objectives}</p>
        <p>Source: Book a demo</p>
      </div>
    );

    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'ec12651e6f1121',
        pass: '8111784b47a2a7'
      },
      secure: true
    });

    const mailData = {
      from: 'krupalinakrani99@gmail.com',
      to: 'nakranikrupali99gmail.com',
      subject: 'Following up on your Copilot sales form submission',
      text: 'HELLO',
      html: messageBody
    };

    // transporter.sendMail(mailData, function (err, info) {
    //   if (err) console.log(err);
    //   else console.log(info);
    // });
    console.log('req.body', req.body);
  } catch (e) {
    console.log('Error : ', e);
    return false;
  } finally {
    console.log('finally');
  }

  console.log(req.body);
  res.send('success');
}
