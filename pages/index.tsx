import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import type { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db, fb_posts_url } from '../firebase';

export default function Home({ posts }: any) {
  const { data: session, status } = useSession();
  if (!session) return <Login />;

  console.log(posts);

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
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const posts = await getDocs(query(collection(db, fb_posts_url), orderBy('timestamp', 'desc')));

  // cannot pre-fetch Firebase timestamp without losing critical information so set to null and get later
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session: await getSession(context),
      posts: docs,
    },
  };
}
