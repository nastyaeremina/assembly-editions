import CTA from "../../components/cta/cta";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import { MainContent } from "../../styles/blogstyles";
import { Container, SecondryButton } from "../../styles/commonStyles";
import { Detail, UpadtePage, UpdateDate, UpdateDes, UpdateDetail, UpdateSubscribe } from "../../styles/updatestyle";

export default function Updates(){
    return(
        <>
            <Layout>
                <Navbar/>
                <UpadtePage>
                    <Container>
                        <UpdateSubscribe>
                            <h1>Updates</h1>
                            <p>New updates and improvements to Copilot.</p>
                            <SecondryButton>
                                <a>Subscribe to updates</a>
                            </SecondryButton>
                        </UpdateSubscribe>
                        <UpdateDes>
                            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0L7 7L0 0H14Z" fill="black" />
                            </svg>
                            <Detail>
                                <UpdateDate>
                                    October 4,2022
                                </UpdateDate>
                                <UpdateDetail>
                                    <h1>CommandBar</h1>
                                    <p>This is a new feature <a>utghtu</a> and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description LinkHover Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lolol</p>
                                    <h1>Custom email domain updates</h1>
                                    <p>This is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lolol</p>
                                    <p>This is a new feature and this is the description Lorem Ipsum lolol This is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is</p>
                                    <h1>Fixes and improvements</h1>
                                    <ul>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente hht that hth h height: h thh , uilfdv lvshjfbv ufr eyfuut gtygur utygutgh utyhg teghutghuthg erg fpreihguehguoie fweif rfir jhg</li>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente</li>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente</li>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente</li>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente</li>
                                    </ul>
                                </UpdateDetail>
                            </Detail>

                        </UpdateDes>
                        <UpdateDes>
                            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0L7 7L0 0H14Z" fill="black" /> 
                            </svg>
                            <Detail>
                                <UpdateDate>
                                    October 4,2022
                                </UpdateDate>
                                <UpdateDetail>
                                    <h1>CommandBar</h1>
                                    <p>This is a new feature <a>utghtu</a> and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description LinkHover Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lolol</p>
                                    <h1>Custom email domain updates</h1>
                                    <p>This is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lolol</p>
                                    <p>This is a new feature and this is the description Lorem Ipsum lolol This is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is the description Lorem Ipsum lololThis is a new feature and this is</p>
                                    <h1>Fixes and improvements</h1>
                                    <ul>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente hht that hth h height: h thh , uilfdv lvshjfbv ufr eyfuut gtygur utygutgh utyhg teghutghuthg erg fpreihguehguoie fweif rfir jhg</li>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente</li>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente</li>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente</li>
                                        <li>Fixed that one bug where you wouldn’t see the end of sente</li>
                                    </ul>
                                </UpdateDetail>
                            </Detail>

                        </UpdateDes>

                    </Container>
                </UpadtePage>
                <CTA/>
            </Layout>
        </>
    )
}