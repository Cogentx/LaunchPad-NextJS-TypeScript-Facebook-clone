import Image from 'next/image';
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from '@heroicons/react/outline';
import { IPost } from '../fb-clone';

interface IProps {
  post: IPost;
  id?: string;
}

export default function Post({ post, id }: IProps) {
  const { name, message, timestamp, image, postImage } = post;

  return (
    <div className="flex flex-col bg-white pt-5 px-5 my-5 rounded-t-2xl shadow-md border-t rounded-b-2xl">
      <div className="flex space-x-2 items-center">
        <Image src={image!} className="rounded-full" layout="fixed" alt="profile picture" height={40} width={40} />
        <div className="flex flex-col">
          <p className="font-medium">{name}</p>
          {timestamp ? <p className="text-xs">{new Date(timestamp?.toDate()).toLocaleString()}</p> : (
            <p className="text-xs text-gray-400">loading...</p>
          )}
        </div>
      </div>
      <div className="pt-4">
        <p>{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96">
          <Image src={postImage} className="" alt="Post Image" layout="fill" objectFit="cover" />
        </div>
      )}
      {/* post footer */}
      <div className="flex justify-between items-center text-gray-400">
        <div className="inputIcon">
          <ThumbUpIcon className="h-4 w-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon">
          <ChatAltIcon className="h-4 w-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon">
          <ShareIcon className="h-4 w-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}
