import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import BlogNavbar from "../../components/navbar/blognavbar";
import { Container } from "../../styles/commonStyles";
import { Backlink, DetailHero } from "./styles";

export default function Blogdetail(){
    return(
        <>
        <Layout>
        <BlogNavbar/>
        <Container>
                    <DetailHero>
                        <Link href='/university'>
                            <Backlink>
                                <Image src='/images/leftarrow.svg' alt='leftarrow' width={12} height={12} layout={'fixed'} />
                                <p>Back to University</p>
                            </Backlink>
                        </Link>
                        <h3>Portal is Now HIPAA Compliant</h3>
                    </DetailHero>
                    {/* <BlogImage>
                        {/* <Image src={} /> */}
                    {/* </BlogImage> */}
            </Container>
            </Layout>
        </>
    )
}