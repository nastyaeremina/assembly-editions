import { useState } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { OverLayDiv } from '../../styles/blogstyles';
import Validation from '../Validation/validation';
import { BlogSubscribe, Button, CloseModel, Form, Input, Logo, Model, Premium } from './style';

export default function SubscribeModel({ onRequestClose, onSubscribe }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onsubscribe = () => {
    onSubscribe();
    onRequestClose();
    // setIsSubscribe(!issubscribe);
  };
  return (
    <>
      <Model>
        <BlogSubscribe>
          <Premium>
            <CloseModel onClick={onRequestClose}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17 3L3 17M17 17L3 3L17 17Z'
                  stroke='black'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </CloseModel>
            <Logo>
              <svg width='94' height='94' viewBox='0 0 94 94' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clip-path='url(#clip0_6853_123297)'>
                  <circle cx='46.9023' cy='47' r='46.7773' fill='#09AA6C' />
                  <path
                    d='M47.2857 25.8038C51.8997 25.7931 56.3896 27.2912 60.0749 30.0733L56.3597 33.7863C53.6824 31.9651 50.5215 30.9892 47.2857 30.9892C44.0499 30.9892 40.8889 31.963 38.2117 33.7863L34.4922 30.0733C38.1774 27.289 42.6695 25.791 47.2857 25.8038Z'
                    fill='white'
                  />
                  <path
                    d='M47.2813 63.1661C43.7737 63.1768 40.3581 62.0319 37.5631 59.9067L33.8672 63.6005C37.6637 66.6759 42.3997 68.3537 47.2813 68.3537C52.1629 68.3537 56.8989 66.6759 60.6976 63.6005L57.0016 59.9067C54.2067 62.0319 50.7911 63.1768 47.2813 63.1661Z'
                    fill='white'
                  />
                  <path
                    d='M31.1852 47.0677C31.1745 43.5622 32.3173 40.1509 34.4381 37.3645L30.7507 33.6729C27.761 37.356 26.0875 41.9358 25.9997 46.6825C25.912 51.4292 27.4122 56.0689 30.2628 59.8612L33.9844 56.1438C32.1525 53.473 31.1766 50.3057 31.1873 47.0656L31.1852 47.0677Z'
                    fill='white'
                  />
                  <path
                    d='M20.8861 47.068C20.869 40.8253 23.0819 34.7838 27.1267 30.0328L23.4478 26.354C18.5342 31.9889 15.7842 39.1924 15.69 46.6742C15.5958 54.156 18.1661 61.4259 22.9385 67.1806L26.6259 63.4932C22.8936 58.8364 20.869 53.0388 20.884 47.068H20.8861Z'
                    fill='white'
                  />
                  <path
                    d='M77.7193 47.0673C77.7279 39.4507 74.9736 32.0888 69.9679 26.3555L66.2891 30.0343C70.2311 34.689 72.4376 40.57 72.5296 46.6735C72.6216 52.7771 70.5971 58.7244 66.7984 63.4968L70.4687 67.2056C75.1598 61.5493 77.7215 54.4228 77.7086 47.0694H77.7193V47.0673Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_6853_123297'>
                    <rect width='93.5547' height='93.5547' fill='white' transform='translate(0.125 0.222656)' />
                  </clipPath>
                </defs>
              </svg>
              <p>Copilot Blog</p>
            </Logo>
            <Form>
              <label for='Name'>Name</label>
              <Input
                type='text'
                id='Name'
                className='form'
                name={'Name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {/* {isEmpty(name) && <Validation error={'Please Enter name'} />} */}

              <label for='Email'>Email</label>
              <Input
                type='email'
                name='Email'
                data-name='Email'
                placeholder=''
                id='Email'
                required=''
                className='inputtext'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isEmpty(email) && <Validation error={'Wrong  email format'} />}
              <Button onClick={onsubscribe}>
                <a href='#'>Subscribe</a>
              </Button>
            </Form>
          </Premium>
        </BlogSubscribe>
      </Model>
    </>
  );
}
