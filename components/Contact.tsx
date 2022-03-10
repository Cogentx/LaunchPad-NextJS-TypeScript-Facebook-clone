import Image from 'next/image';
import { IContact } from '../fb-clone';

interface IProps {
  contact: IContact;
}

export default function Contact({ contact }: IProps) {
  const { name, src } = contact;

  return (
    <div className="flex items-center space-x-3 mb-2  hover:bg-gray-200 cursor-pointer p-2">
      <div className="relative">
        <Image
          className="rounded-full"
          objectFit="cover"
          layout="fixed"
          src={src}
          width={50}
          height={50}
          alt="Contact photo"
        />
        <div className="absolute bottom-1 right-0 rounded-full bg-green-400 h-3 w-3 hover:animate-bounce"></div>
      </div>
      <p>{name}</p>
    </div>
  );
}
