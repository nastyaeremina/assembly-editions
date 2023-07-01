// pages/api/my-api.js

import { COOKIE_NAME } from '../../constants/constant';

export default function handler(req, res) {
  // Read the cookie from the request headers
  const cookie = req.headers.cookie;

  // Access the specific cookie value
  const myCookie = cookie
    ?.split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(COOKIE_NAME));

  // Return the response
  res.status(200).json({ myCookie });
}
