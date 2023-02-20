import Image from 'next/image';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Par, PostDetail, Textarea } from '../../styles/blogstyles';
import First from '../../public/images/2.svg';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { BlogDetail, Bottom, Desc, Heading, Leftside, Rightside, Text } from './styles';

export default function Blogcard(props) {
  const router = useRouter();

  const tagListReder = useMemo(() => {
    if (isEmpty(props?.tags)) return null;
    return props?.tags?.map((item, index) => {
      return <span key={`tag_list_index_${index}`}>{item?.name}</span>;
    });
  }, [props?.tags]);

  return (
    <>
      <BlogDetail onClick={() => router.push(`/blog/${props?.slug}`)}>
        <Leftside>
          <Image src={props?.image} width={266} height={266} className='image' alt='blog' />
        </Leftside>
        <Rightside>
          <Textarea>
            <h2>{props?.name}</h2>
            <PostDetail>
              {props?.date}
              <svg width='3' height='3' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='1.5' cy='1.5' r='1.5' fill='#757575' />
              </svg>
              <li>{props?.read}</li>
            </PostDetail>
            <Par>{props?.desc}</Par>
          </Textarea>
          {!isEmpty(props?.tags) && <Bottom>{tagListReder}</Bottom>}
        </Rightside>
      </BlogDetail>
    </>
  );
}
