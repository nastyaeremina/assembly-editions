import Image from 'next/image';
import { Par, PostDetail, Textarea } from '../../pages/blog/styles';
import First from '../../public/images/2.svg';
import { Container } from '../../styles/commonStyles';
import { BlogDetail, Bottom, Desc, Heading, Leftside, Rightside, Text } from "./styles";

export default function Blogcard(props) {
    return (
        <>
        <BlogDetail>
            <Leftside>
                <Image src={First} className='image'/>
            </Leftside>
            <Rightside>
                    <Textarea>
                        <h1>{props.name}</h1>
                        <PostDetail>{props.date}
                            <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#757575" />
                            </svg>
                            <li>{props.read}</li></PostDetail>
                        <Par>{props.desc}</Par>
                    </Textarea>
                <Bottom>
                        Announcements
                </Bottom>
            </Rightside>
        </BlogDetail>
        </>
    )
}