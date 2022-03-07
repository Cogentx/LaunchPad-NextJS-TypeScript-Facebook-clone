import type { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home() {
  const { data: session, status } = useSession();
  if (!session) return <Login />;

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
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
