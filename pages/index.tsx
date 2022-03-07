import type { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const { data: session, status } = useSession();
  if (!session) return <Login />;

  return (
    <div className="bg-gray-100 overflow-hidden h-screen">
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook clone built with Next.js, React and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
