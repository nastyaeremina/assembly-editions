// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  require('dotenv').config();
  const nodemailer = require('nodemailer');

  try {
    const messageBody = (
      `<div>
        <p>You have received a new form submission!</p>
        <br/>
        <br/>
        <h4>information</h4>
        <p><b>First Name:</b> ${req.body?.firstName}</p>
        <p><b>Last Name:</b> ${req.body?.lastName}</p>
        <p><b>Email:</b> ${req.body?.email}</p>
        <p><b>Company name:</b> ${req.body?.companyName}</p>
        <p><b>How did you find us?:</b> ${req.body?.howDidYouFindUs}</p>
        <p><b>What industry are you in?:</b> ${req.body?.industry} ${req.body?.industry_other}</p>
        <p>
        <b>Are you interested in Portal for your own business or are you contacting us on behalf of a client?:</b> ${req.body?.youInerestedBusiness}
        </p>
        <p><b>How large is your company?:</b> ${req.body?.companySize}</p>
        <p><b>What should we know about your situation or objectives?:</b> ${req.body?.objectives}</p>
        <p>Source: Book a demo</p>
      </div>`
    );

    const transporter = nodemailer.createTransport({
      host: process.env.DEMO_EMAIL_HOST,
      port: process.env.DEMO_EMAIL_PORT,
      auth: {
        user: process.env.DEMO_EMAIL_SMTP_ID,
        pass: process.env.DEMO_EMAIL_SMTP_PASS
      },
      secure: true,
    });

    const mailData = {
      from: process.env.DEMO_EMAIL_FROM,
      to: process.env.DEMO_EMAIL_TO,
      subject: 'Following up on your Copilot sales form submission',
      text: 'HELLO',
      html: messageBody
    };

  
await new Promise((resolve, reject) => {
  // send mail
  transporter.sendMail(mailData, (err, info) => {
      if (err) {
          console.error(err);
          reject(err);
      } else {
          console.log(info);
          resolve(info);
      }
  });
});
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
