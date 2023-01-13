import * as React from "react";
import Meta from "../components/meta";
import Footer from "./footer/footer";

export default function Layout({ children, isEnterPrice }) {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
      <Footer isEnterPrice={isEnterPrice} />
    </>
  );
}
