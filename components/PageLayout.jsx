import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function PageLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="newsapp - the best app to read news"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>
          <Link href="/">newsapi</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
      </header>
      <main>{children}</main>
      <style jsx>
        {`
          header {
            display: flex;
            justify-content: space-between;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
}
