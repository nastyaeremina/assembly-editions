import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "../../styles/commonStyles";
import {
  MainSection,
  FormSection,
  FormTxt,
  FoemDetail,
  Input,
  NameBlock,
  NameInfo,
  LastText,
} from "./styles";

export default function BookDemoForm() {
  return (
    <MainSection>
      <FormSection>
        <Link href="/">
          <Image
            src="/images/booklogo.svg"
            alt="book-logo"
            width={107}
            height={24}
            layout={"fixed"}
          />
        </Link>
        <FormTxt>
          <h4>Let’s talk</h4>
          <p>Speak to a Copilot expert to learn more and experience a demo.</p>
        </FormTxt>
        <FoemDetail>
          <NameBlock>
            <NameInfo>
              <label for="First-Name-">
                First Name <span>*</span>
              </label>
              <Input type="text" className="inputtext" />
            </NameInfo>
            <NameInfo>
              <label for="Last-Name-">
                Last name <span>*</span>
              </label>
              <Input type="text" className="inputtext" />
            </NameInfo>
          </NameBlock>
          <label for="Last-Name-">
            Work email <span>*</span>
          </label>
          <Input
            type="email"
            name="Email"
            data-name="Email"
            placeholder=""
            id="Email"
            required=""
            className="inputtext"
          />
          <label for="Last-Name-">
            Comany name <span>*</span>
          </label>
          <Input type="text" placeholder="" required="" className="inputtext" />
          <label for="Last-Name-">
            How did you find us? <span>*</span>
          </label>
          <select
            id="source"
            name="How-did-you-find-us"
            data-name="How did you find us?"
            required=""
            class="wselect"
          >
            <option value="">Please Select...</option>
            <option value="linkedin">LinkedIn</option>
            <option value="google">Google</option>
            <option value="reddit">Reddit</option>
            <option value="press">Press</option>
            <option value="fb_instragram">Facebook / Instagram</option>
            <option value="referral">Referral</option>
            <option value="twitter">Twitter</option>
            <option value="review_site">Review site</option>
            <option value="product_hunt">Product Hunt</option>
            <option value="other">Other</option>
          </select>
          <label for="Last-Name-">
            How did you find us? <span>*</span>
          </label>
          <select
            id="industry"
            name="What-industry-are-you-in"
            data-name="What industry are you in?"
            required=""
            class="wselect"
          >
            <option value="">Please Select...</option>
            <option value="accounting_and_bookkeeping">
              Accounting and bookkeeping
            </option>
            <option value="construction">Construction</option>
            <option value="consulting">Consulting</option>
            <option value="ecommerce">Ecommerce</option>
            <option value="education">Education</option>
            <option value="engineering">Engineering</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="insurance">Insurance</option>
            <option value="legal">Legal</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="marketing">Marketing</option>
            <option value="nonprofit">Nonprofit</option>
            <option value="real_estate">Real estate</option>
            <option value="recruiting_and_staffing">
              Recruiting and staffing
            </option>
            <option value="technology">Technology</option>
            <option value="other">Other</option>
          </select>
          <label for="Last-Name-">
            How did you find us? <span>*</span>
          </label>
          <select
            id="company_size"
            name="How-large-is-your-company"
            data-name="How large is your company?"
            required=""
            class="wselect"
          >
            <option value="">Please Select...</option>
            <option value="1">Just me</option>
            <option value="5">2 - 5</option>
            <option value="10">6 - 10</option>
            <option value="50">11 - 50</option>
            <option value="100">51 - 100</option>
            <option value="100+">100+</option>
          </select>
          <label for="Last-Name-">
            How did you find us? <span>*</span>
          </label>
          <textarea
            id="What-should-we-know-about-your-situation-or-objectives"
            name="What-should-we-know-about-your-situation-or-objectives"
            maxlength="255"
            data-name="What should we know about your situation or objectives?"
            placeholder=""
            required=""
            class="sm"
          ></textarea>
        </FoemDetail>

        <PrimaryButton>
          <Link href="#" className="btnposition">
            Let’s talk
          </Link>
        </PrimaryButton>
        <LastText>
          <p>or start your 14-day free trial</p>
        </LastText>
      </FormSection>
    </MainSection>
  );
}
