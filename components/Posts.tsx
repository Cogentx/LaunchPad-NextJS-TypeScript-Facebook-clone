import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, fb_posts_url } from '../firebase';
import { IPost } from '../fb-clone';
import Post from './Post';

export default function Posts() {
  const q = query(collection(db, fb_posts_url), orderBy('timestamp', 'desc'));

  const [realtimePosts, loading, error] = useCollection(q);

  return <div>
    {realtimePosts?.docs.map((doc,index)=><Post key={index} post={doc.data()}/>)}
  </div>;
}
