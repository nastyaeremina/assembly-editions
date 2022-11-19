import Link from "next/link";
import Image from "next/image";
import {} from "../../styles/commonStyles";
import { MainSection, FormSection, FormTxt, FoemDetail, Input } from "./styles";

export default function BookDemo() {
  return (
    <MainSection>
      <FormSection>
        <Image
          src="/images/booklogo.svg"
          alt="book-logo"
          width={107}
          height={24}
          layout={"fixed"}
        />
        <FormTxt>
          <h4>Let’s talk</h4>
          <p>Speak to a Copilot expert to learn more and experience a demo.</p>
        </FormTxt>
        <FoemDetail>
          <label for="first">First name *</label>
          <Input type="text" id="first" name="first" />
        </FoemDetail>
      </FormSection>
    </MainSection>
  );
}
