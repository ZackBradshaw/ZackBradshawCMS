import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import styles from "./Layout.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "ZackBradshaw" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
