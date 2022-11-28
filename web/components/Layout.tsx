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
      </Head>
      <div className={styles.container}>
        <div className={styles.flex}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Layout;
