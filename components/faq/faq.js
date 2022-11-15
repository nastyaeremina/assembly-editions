import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import { FaqSection, FaqWrap, FaqTitle } from "./styles";

export default function FAQ() {
  return (
    <>
      <FaqSection>
        <Container>
          <FaqTitle>
            <h3 className="faqtitle">Frequently Asked Questions</h3>
          </FaqTitle>
          <FaqWrap>
            <ul className="faq-list">
              <li>
                <h4 className="faq-heading">Who is Copilot intended for?</h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">
                  What’s the difference between a marketing site & copilot ?
                </h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">How many users can you have ?</h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">
                  Is Copilot secure ? Where is my data stored ?
                </h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">How many users can you have ?</h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">
                  What’s the difference between a marketing site & copilot ?
                </h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">How much does Copilot+ cost ?</h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
            </ul>
          </FaqWrap>
        </Container>
      </FaqSection>
    </>
  );
}
