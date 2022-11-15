import Image from "next/image";
import { Container } from "../../../styles/commonStyles";
import {
  ModernSection,
  ModernWrap,
  HeadView,
  BoxWrap,
  BoxView,
  ImgIcon,
  DetailView,
} from "./styles";

export default function Modern() {
  return (
    <>
      <ModernSection>
        <Container>
          <ModernWrap>
            <HeadView>
              <h3>
                Your customers deserve a modern client experience<span>.</span>
              </h3>
            </HeadView>
            <BoxWrap>
              <BoxView>
                <ImgIcon>
                  <Image
                    src="/images/fileicon.svg"
                    width={44}
                    height={44}
                    alt="file-icon"
                  />
                </ImgIcon>
                <DetailView>
                  <h4>Files</h4>
                  <p>
                    Your dedicated account manager will be on hand to discuss
                    and advise on the best solutions to help you reach your
                    goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image
                    src="/images/setting-icon.svg"
                    width={44}
                    height={44}
                    alt="setting-icon"
                  />
                </ImgIcon>
                <DetailView>
                  <h4>Automations</h4>
                  <p>
                    Your dedicated account manager will be on hand to discuss
                    and advise on the best solutions to help you reach your
                    goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image
                    src="/images/costicon.svg"
                    width={44}
                    height={44}
                    alt="file-icon"
                  />
                </ImgIcon>
                <DetailView>
                  <h4>Cost-effective</h4>
                  <p>
                    Your dedicated account manager will be on hand to discuss
                    and advise on the best solutions to help you reach your
                    goals.
                  </p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image
                    src="/images/fileicon.svg"
                    width={44}
                    height={44}
                    alt="file-icon"
                  />
                </ImgIcon>
                <DetailView>
                  <h4>Files</h4>
                  <p>
                    Your dedicated account manager will be on hand to discuss
                    and advise on the best solutions to help you reach your
                    goals.
                  </p>
                </DetailView>
              </BoxView>
            </BoxWrap>
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
