import Image from "next/image";
import { Container } from "../../styles/commonStyles";
import { ToolMain, ModuleSection, ModuleWrap } from "./styles";
import { QuoteLine } from "../quote/styles";

export default function Tools({ moduleColor }) {
  return (
    <ToolMain moduleColor={moduleColor}>
      <Container>
        <h3>
          Give your team all the tools it needs for invoicing<span>,</span>{" "}
          subscriptions<span>,</span> and more
        </h3>
        <ModuleSection>
          <ModuleWrap>
            <Image
              src="/images/home.svg"
              alt="red-icon"
              width={44}
              height={44}
              layout={"fixed"}
            />
            <h4>Team access</h4>
            <p>
              Work with depoloyed Copilot engineers to add custom features and
              integrations.
            </p>
          </ModuleWrap>
          <ModuleWrap>
            <Image
              src="/images/home.svg"
              alt="red-icon"
              width={44}
              height={44}
              layout={"fixed"}
            />
            <h4>Security</h4>
            <p>
              Security audit compliance, payment via PO, custom TOS, and more.
            </p>
          </ModuleWrap>
          <ModuleWrap className="bigborder">
            <Image
              src="/images/home.svg"
              alt="red-icon"
              width={44}
              height={44}
              layout={"fixed"}
            />
            <h4>Branding</h4>
            <p>Guaranteed reliable performance with a 99.99% uptime SLA.</p>
            <Image
              src="/images/bigline.svg"
              alt="red-icon"
              width={1}
              height={250}
              layout={"fixed"}
              className="borderposition"
            />
          </ModuleWrap>
          <ModuleWrap className="borderright">
            <Image
              src="/images/home.svg"
              alt="red-icon"
              width={44}
              height={44}
              layout={"fixed"}
            />
            <h4>Integrations</h4>
            <p>
              Granular insights about how your team and clients are using
              Portal.
            </p>
          </ModuleWrap>
          <ModuleWrap className="moduleborder">
            <QuoteLine>
              <Image
                src="/images/line.svg"
                alt="red-icon"
                width={1}
                height={100}
                layout={"fixed"}
              />
            </QuoteLine>
            <Image
              src="/images/home.svg"
              alt="red-icon"
              width={44}
              height={44}
              layout={"fixed"}
            />
            <h4>Simple checkout</h4>
            <p>
              A dedicated expert will be there to ensure a successful launch.
            </p>
          </ModuleWrap>
          <ModuleWrap className="moduleborder">
            <Image
              src="/images/home.svg"
              alt="red-icon"
              width={44}
              height={44}
              layout={"fixed"}
            />
            <h4>Notifications</h4>
            <p>Custom payment processing rates</p>
          </ModuleWrap>
          <ModuleWrap className="moduleborder">
            <Image
              src="/images/home.svg"
              alt="red-icon"
              width={44}
              height={44}
              layout={"fixed"}
            />
            <h4>Reminders</h4>
            <p>Supercharge your brand with distinct custom themes</p>
          </ModuleWrap>
          <ModuleWrap className="moduleborder">
            <Image
              src="/images/home.svg"
              alt="red-icon"
              width={44}
              height={44}
              layout={"fixed"}
            />
            <h4>Integrations</h4>
            <p>Get access to white-label native mobile apps.</p>
          </ModuleWrap>
        </ModuleSection>
      </Container>
    </ToolMain>
  );
}
