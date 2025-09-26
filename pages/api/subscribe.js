/* eslint-disable import/no-anonymous-default-export */

import { isEmpty } from '../../app/helpers/helpers';

export default async function (req, res) {
  const { TrackClient, RegionUS, APIClient } = require('customerio-node');
  try {
    const { email } = req.body;
    let cioAPI = new APIClient(process.env.CUSTOMER_IO_APP_KEY, { region: RegionUS });
    let cioTrack = new TrackClient(process.env.CUSTOMER_IO_SITE_ID, process.env.CUSTOMER_IO_API_KEY, {
      region: RegionUS
    });
    //get customer by email
    await cioAPI
      .getCustomersByEmail(email)
      .then(async (response) => {
        const cio_id = response?.results?.[0]?.cio_id;
        if (isEmpty(cio_id)) {
          //add user with with subscribe two topic Announcements & Assembly Chronicles
          //and unsubscribe two topics Assembly Onboarding & Marketing Information
          await cioTrack
            .identify(email, {
              email,
              cio_subscription_preferences: {
                topics: {
                  topic_2: true,
                  topic_5: true,
                  topic_6: false,
                  topic_7: false
                }
              }
            })
            .then((response) => {
              if (response) return res.status(200).json({ message: 'subscribe successfully ' });
              return res.status(400).json({ message: 'something went wrong please try again ' });
            })
            .catch((error) => {
              return res.status(400).json({ message: error });
            });
        } else {
          // if user already exist then subscribe two topic Announcements & Assembly Chronicles
          //get all attributes of customer using cio_id
          await cioAPI
            .getAttributes(cio_id, 'cio_id')
            .then(async (result) => {
              //fetch current topics list
              let topics = JSON.parse(result?.customer?.attributes?.cio_subscription_preferences)?.topics;
              //subscribe subscribe two topic Announcements & Assembly Chronicles
              await cioTrack
                .identify(email, {
                  email,
                  cio_subscription_preferences: {
                    topics: {
                      ...topics,
                      topic_2: true,
                      topic_5: true
                    }
                  }
                })
                .then((response) => {
                  if (response) return res.status(200).json({ message: 'subscribe successfully ' });
                  return res.status(400).json({ message: 'something went wrong please try again ' });
                })
                .catch((error) => {
                  return res.status(400).json({ message: error });
                });
            })
            .catch((error) => {
              return res.status(400).json({ message: error });
            });
        }
      })
      .catch((error) => {
        return res.status(400).json({ message: error });
      });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}
