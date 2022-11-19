import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import {} from "../../styles/commonStyles";

import {} from "../../styles/homepageStyles";
import BookDemo from "../../components/bookdemo/bookDemo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <BookDemo />
    </>
  );
}
