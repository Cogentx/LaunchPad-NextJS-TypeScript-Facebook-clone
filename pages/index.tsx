import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook clone built with Next.js, React and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: NextPageContext) {

  return {
    props: {
      session: await getSession(context),
    },
  };
}
