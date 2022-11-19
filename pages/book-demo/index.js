import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
// import {} from "../../styles/commonStyles";

import { BookSection, ImageSection } from "../../styles/bookdemoStyles";
import BookDemoForm from "../../components/bookdemo/bookDemo";

export default function BookDemo() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <BookSection>
        <BookDemoForm />
        <ImageSection>
          <Image
            src="/images/demoimage.png"
            width={900}
            height={900}
            alt="msg-icon"
          />
        </ImageSection>
      </BookSection>
    </>
  );
}
