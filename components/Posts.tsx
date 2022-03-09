import { collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, fb_posts_url } from '../firebase';

export default function Posts() {
  const q = query(collection(db, fb_posts_url));
  const [realtimePosts, loading, error] = useCollection()


  return <div>Posts</div>;
}
