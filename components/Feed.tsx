import { IPost } from '../fb-clone';
import InputBox from './InputBox';
import Posts from './Posts';
import Stories from './Stories';

interface IProps {
  posts: Array<IPost>;
}

export default function Feed({posts}:IProps) {
  console.log('Feed:',posts);
  
  return (
    <div className="flex-grow h-screen ph-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
}
