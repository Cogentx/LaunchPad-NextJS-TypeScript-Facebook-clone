import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook clone built with Next.js, React and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
};

export default Home;
