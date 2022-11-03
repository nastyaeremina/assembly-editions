import { useState } from "react";
import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
    <Layout>
    <Navbar />
    </Layout>
    </>
  )
}
