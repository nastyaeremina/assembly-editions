import Image from "next/image";
import {
  Container,
 
} from "../../styles/commonStyles";
import { ToolMain, ModuleSection,ModuleWrap } from "./styles";
import { QuoteLine } from "../quote/styles";

export default function Tools() {
  return (
    <ToolMain> 
         <QuoteLine>
    <Image src='/images/line.svg' alt='red-icon' width={1} height={100} layout={'fixed'} />
    </QuoteLine>
         <Container>
<h3>Give your team all the tools it needs for invoicing, subscriptions, and more</h3>
<ModuleSection>
    <ModuleWrap>
    <Image src='/images/home.svg' alt='red-icon' width={40} height={40} layout={'fixed'} />
<h4>Team access</h4>
<p>Work with depoloyed Copilot engineers to add custom features and integrations.</p>
</ModuleWrap>
<ModuleWrap>
    <Image src='/images/home.svg' alt='red-icon' width={40} height={40} layout={'fixed'} />
<h4>Security</h4>
<p>Security audit compliance, payment via PO, custom TOS, and more.</p>
</ModuleWrap>
<ModuleWrap>
    <Image src='/images/home.svg' alt='red-icon' width={40} height={40} layout={'fixed'} />
<h4>Branding</h4>
<p>Guaranteed reliable performance with a 99.99% uptime SLA.</p>
</ModuleWrap>
<ModuleWrap className="borderright">
    <Image src='/images/home.svg' alt='red-icon' width={40} height={40} layout={'fixed'} />
<h4>Integrations</h4>
<p>Granular insights about how your team and clients are using Portal.</p>
</ModuleWrap>
<ModuleWrap className="moduleborder">
    <Image src='/images/home.svg' alt='red-icon' width={40} height={40} layout={'fixed'} />
<h4>Integrations</h4>
<p>Granular insights about how your team and clients are using Portal.</p>
</ModuleWrap>
<ModuleWrap className="moduleborder">
    <Image src='/images/home.svg' alt='red-icon' width={40} height={40} layout={'fixed'} />
<h4>Integrations</h4>
<p>Granular insights about how your team and clients are using Portal.</p>
</ModuleWrap>
<ModuleWrap className="moduleborder">
    <Image src='/images/home.svg' alt='red-icon' width={40} height={40} layout={'fixed'} />
<h4>Integrations</h4>
<p>Granular insights about how your team and clients are using Portal.</p>
</ModuleWrap>
<ModuleWrap className="moduleborder">
    <Image src='/images/home.svg' alt='red-icon' width={40} height={40} layout={'fixed'} />
<h4>Integrations</h4>
<p>Granular insights about how your team and clients are using Portal.</p>
</ModuleWrap>
</ModuleSection>
         </Container>
         </ToolMain>

  );
}
