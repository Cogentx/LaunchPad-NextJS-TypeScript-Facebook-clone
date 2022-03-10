import Image from 'next/image';
import { ThumbUpIcon, AnnotationIcon, ShareIcon } from '@heroicons/react/outline';
import { IPost } from '../fb-clone';

interface IProps {
  post: IPost;
}

export default function Post({ post }: IProps) {
  const { name, email, message, timestamp, image, postImage } = post;

  return (
    <div className="flex flex-col">
      <div className="bg-white p-5 mt-5 rounded-t-2xl shadow-md">
        <div className="flex space-x-2 items-center">
          <Image src={image!} className="rounded-full" layout="fixed" alt="profile picture" height={40} width={40} />
          <div className="flex flex-col">
            <p className="font-medium">{name}</p>
            <p className="text-xs">{new Date(timestamp?.toDate()).toLocaleString()}</p>
          </div>
        </div>
        <div className="pt-4">
          <p>{message}</p>
        </div>
        {postImage && (
          <div className='relative h-56 md:h-96'>
            <Image src={postImage} className="" alt="Post Image" layout="fill" objectFit='cover'/>
          </div>
        )}
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
    </div>
  );
}
