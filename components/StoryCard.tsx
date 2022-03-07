import Image from 'next/image';

interface IProps {
  name: string;
  src: string;
  profile: string;
}

export default function StoryCard({ name, src, profile }: IProps) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x-auto p-3">
      <Image
        src={profile}
        width={40}
        height={40}
        objectFit="cover"
        layout="fixed"
        alt="profile card"
        className="absolute opacity-0 lg:opacity-100 z-50 top-10 rounded-full"
      />

      <Image src={src} layout="fill" alt="profile card" className="object-cover rounded-full lg:rounded-3xl filter brightness-75" />

      <p className='text-white z-50 bottom-3 absolute text-center'>{name}</p>
    </div>
  );
}
