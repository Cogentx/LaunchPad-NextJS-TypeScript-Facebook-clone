import Image from 'next/image';
import {ThumbUpIcon, AnnotationIcon, ShareIcon} from '@heroicons/react/outline'
import { IPost } from '../fb-clone';

interface IProps {
  post: IPost;
}

export default function Post({ post }: IProps) {
  const { name, email, message, timestamp, image, postImage } = post;

  return (
    <div className="flex flex-col rounded-xl bg-white my-4 shadow-md">
      <div className="flex p-2 space-x-2 items-center">
        <Image src={image!} className="rounded-full" layout="fixed" alt="profile picture" height={40} width={40} />
        <div className="flex flex-col">
          <p className="text-sm">{name}</p>
          <p className="text-xs">{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
      </div>
      <div className="p-5">
        <p>{message}</p>
      </div>
      {postImage && <Image src={postImage} className="" alt="Post Image" height={500} width={500} layout="fixed" />}
      <div className="flex m-2 text-gray-500 ">
        <div className="inputIcon">
          <ThumbUpIcon className="h-5 w-5" />
          <p className="text-xs sm:text-sm xl:text-base">Like</p>
        </div>
        <div className="inputIcon">
          <AnnotationIcon className="h-5 w-5" />
          <p className="text-xs sm:text-sm xl:text-base">Comment</p>
        </div>
        <div className="inputIcon">
          <ShareIcon className="h-5 w-5" />
          <p className="text-xs sm:text-sm xl:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}
