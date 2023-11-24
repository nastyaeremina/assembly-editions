import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import blogCTA from '../../../public/images/blogcta.svg';
import blogCTASubmit from '../../../public/images/blogctasubmit.svg';
import Button from '../button/button';
import Validation from '../Validation/validation';
import { primary, whiteColor } from '../../styles/color';
import { BlogCTACard, BlogLeftCTA, BlogRightCTA, BlogSubscribeForm, Form, Input } from './styles';

export default function BlogCTA() {
  const [email, setEmail] = useState('');
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          body: JSON.stringify({
            email
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setLoading(false);

        if (response.status === 200) {
          // Customer added successfully
          console.log('Customer added successfully.');
          setIsSubscribe(true);
        } else {
          // Handle errors
          const errorData = await response.json();
          setError('Something went wrong. Please try again');
          console.error('Error adding customer:', errorData.error);
        }
      } catch (error) {
        setLoading(false);

        console.error('Error:', error);
      }
    },
    [email]
  );
  return (
    <BlogCTACard isBlogCTAheight={isSubscribe}>
      <BlogLeftCTA>
        <h2>{!isSubscribe ? 'Sign up for our newsletter' : 'Awesome!'}</h2>
        <p>
          {!isSubscribe
            ? 'Subscribe to our newsletter to receive emails about important announcements, product updates, and guides relevant to your industry.'
            : 'We’re excited to have you on board — keep your eye out for our next email announcement.'}
        </p>
        {!isSubscribe && (
          <Form onSubmit={onSubmit}>
            <BlogSubscribeForm>
              <Input
                type='email'
                name='Email'
                data-name='Email'
                placeholder='Enter your email here...'
                id='Email'
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
              />
            </BlogSubscribeForm>
            <Button
              type='submit'
              bgColor={primary}
              fontColor={whiteColor}
              borderColor={primary}
              text='Subscribe'
              hoverColor='rgba(255, 255, 255,0.8)'
              isLoading={loading}
            />
          </Form>
        )}
        {error && <Validation error={error} className='blogerror' />}
      </BlogLeftCTA>
      <BlogRightCTA>
        <Image src={!isSubscribe ? blogCTA : blogCTASubmit} alt='blogcta' width={166} height={166} />
      </BlogRightCTA>
    </BlogCTACard>
  );
}
