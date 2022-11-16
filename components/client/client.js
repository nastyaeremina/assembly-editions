import Link from "next/link";
import Image from "next/image";
import {
  Container,
  
} from "../../styles/commonStyles";
import {ClientMain,ClientHero,CardSection,ModuleCard,CardText,BlockSection,BlockText,BlockWrap} from "./styles";

export default function Client() {
  return (
    <ClientMain>
    <Container>
        <ClientHero>
            <h3>Go beyond billing and streamline the client experience further</h3>
            <CardSection >
                <ModuleCard  className="mydiv">
                <Image src='/images/bill.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="show"/>
                <Image src='/images/contact.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="hide" />
                <Link href="#">
                <CardText>
                    <h4>Billling</h4>
                    <Image src='/images/rightb.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="show"/>
                    <Image src='/images/rightw.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="hide"/>
                </CardText>
                </Link>
                </ModuleCard>
                <ModuleCard   className="mydiv">
                <Image src='/images/file.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="show"/>
                <Image src='/images/contact.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="hide" />
                <Link href="#">
                <CardText>
                    <h4>Files</h4>
                    <Image src='/images/rightb.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="show"/>
                    <Image src='/images/rightw.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="hide"/>
                    
                </CardText>
                </Link>
                </ModuleCard>
                <ModuleCard   className="mydiv">
                <Image src='/images/form.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="show"/>
                <Image src='/images/contact.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="hide" />
                <Link href="#">
                <CardText>
                    <h4>Forms</h4>
                    <Image src='/images/rightb.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="show"/>
                    <Image src='/images/rightw.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="hide"/>
                    
                </CardText>
                </Link>
                </ModuleCard>
                <ModuleCard   className="mydiv">
                <Image src='/images/base.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="show"/>
                <Image src='/images/contact.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="hide" />
                <Link href="#">
                <CardText>
                    <h4>Knowledge Base</h4>
                    <Image src='/images/rightb.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="show"/>
                    <Image src='/images/rightw.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="hide"/>
                 
                </CardText>
                </Link>
                </ModuleCard>
                <ModuleCard   className="mydiv">
                <Image src='/images/contact.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="show"/>
                <Image src='/images/contact.svg' alt='red-icon' width={190} height={142} layout={'fixed'} className="hide" />
                 <Link href="#">
                <CardText>
                    <h4>Contracts</h4>
                    <Image src='/images/rightb.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="show"/>
                    <Image src='/images/rightw.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="hide"/>
                </CardText>
                </Link>
                </ModuleCard>
            </CardSection>
            <BlockSection>
            <Image src='/images/block.svg' alt='red-icon' width={185} height={145} layout={'fixed'} />
            <BlockText>
                <h3>Embed products you already use to unify your interactions with clients, giving them an experience that’s proven to imrpove retention</h3>
                <Link href="#">
                <BlockWrap>
                   
                    <h4>Explore apps</h4>
                    <Image src='/images/rightb.svg' alt='red-icon' width={12} height={12} layout={'fixed'} className="show"/>
                    {/* <Image src='/images/right.png' alt='red-icon' width={12} height={12} layout={'fixed'} className="hide"/> */}
                    
                </BlockWrap>
                </Link>
            </BlockText>
            </BlockSection>
        </ClientHero>
    </Container>
</ClientMain> 
  );
}
