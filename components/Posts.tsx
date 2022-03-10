import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, fb_posts_url } from '../firebase';
import { IPost } from '../fb-clone';
import Post from './Post';

interface IProps {
  posts: Array<IPost>;
}

export default function Posts({ posts }: IProps) {
  const q = query(collection(db, fb_posts_url), orderBy('timestamp', 'desc'));

  const [realtimePosts, loading, error] = useCollection(q);

  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((doc, index) => <Post key={index} post={doc.data()} />)
        : posts.map((post, index) => <Post key={index} post={post} />)}
    </div>
  );
}
