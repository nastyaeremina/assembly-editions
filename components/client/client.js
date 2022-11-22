import Link from "next/link";
import Image from "next/image";
import { Container } from "../../styles/commonStyles";
import {
  ClientMain,
  ClientHero,
  CardSection,
  ModuleCard,
  CardText,
  BlockSection,
  BlockText,
  BlockWrap,
  HelpLeftSub,
} from "./styles";
import { HelpLink } from "../../styles/homepageStyles";

export default function Client() {
  return (
    <ClientMain>
      <Container>
        <ClientHero>
          <h3>
            Go beyond billing and streamline the client experience further
          </h3>
          <CardSection>
            <ModuleCard className="mydiv">
              <Image
                src="/images/bill.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="show"
              />
              <Image
                src="/images/billhover.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="hide"
              />

              <HelpLeftSub>
                <HelpLink className="icon-link">
                  <a href="#" className="learn-link mb0">
                    Billling
                    <svg
                      class="HoverArrow"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <g fill-rule="evenodd">
                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                        <path
                          class="HoverArrow__tipPath"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </HelpLink>
              </HelpLeftSub>
            </ModuleCard>
            <ModuleCard className="mydiv">
              <Image
                src="/images/file.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="show"
              />
              <Image
                src="/images/contact.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="hide"
              />
              <HelpLeftSub>
                <HelpLink className="icon-link">
                  <a href="#" className="learn-link mb0">
                    Files
                    <svg
                      class="HoverArrow"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <g fill-rule="evenodd">
                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                        <path
                          class="HoverArrow__tipPath"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </HelpLink>
              </HelpLeftSub>
            </ModuleCard>
            <ModuleCard className="mydiv">
              <Image
                src="/images/form.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="show"
              />
              <Image
                src="/images/contact.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="hide"
              />
              <HelpLeftSub>
                <HelpLink className="icon-link">
                  <a href="#" className="learn-link mb0">
                    Forms
                    <svg
                      class="HoverArrow"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <g fill-rule="evenodd">
                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                        <path
                          class="HoverArrow__tipPath"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </HelpLink>
              </HelpLeftSub>
            </ModuleCard>
            <ModuleCard className="mydiv">
              <Image
                src="/images/base.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="show"
              />
              <Image
                src="/images/contact.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="hide"
              />
              <HelpLeftSub>
                <HelpLink className="icon-link">
                  <a href="#" className="learn-link mb0">
                    Knowledge Base
                    <svg
                      class="HoverArrow"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <g fill-rule="evenodd">
                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                        <path
                          class="HoverArrow__tipPath"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </HelpLink>
              </HelpLeftSub>
            </ModuleCard>
            <ModuleCard className="mydiv">
              <Image
                src="/images/contact.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="show"
              />
              <Image
                src="/images/contact.svg"
                alt="red-icon"
                width={190}
                height={142}
                layout={"fixed"}
                className="hide"
              />
              <HelpLeftSub>
                <HelpLink className="icon-link">
                  <a href="#" className="learn-link mb0">
                    Contracts
                    <svg
                      class="HoverArrow"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <g fill-rule="evenodd">
                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                        <path
                          class="HoverArrow__tipPath"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </HelpLink>
              </HelpLeftSub>
            </ModuleCard>
          </CardSection>
          <BlockSection>
            <Image
              src="/images/block.svg"
              alt="red-icon"
              width={185}
              height={145}
              layout={"fixed"}
            />
            <BlockText>
              <h3>
                Embed products you already use to unify your interactions with
                clients, giving them an experience that’s proven to imrpove
                retention
              </h3>
              <HelpLeftSub>
                <HelpLink className="icon-link">
                  <a href="#" className="learn-link mb0">
                    Explore apps
                    <svg
                      class="HoverArrow"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <g fill-rule="evenodd">
                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                        <path
                          class="HoverArrow__tipPath"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </HelpLink>
              </HelpLeftSub>
            </BlockText>
          </BlockSection>
        </ClientHero>
      </Container>
    </ClientMain>
  );
}
