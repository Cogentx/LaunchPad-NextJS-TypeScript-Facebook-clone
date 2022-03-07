import Image from 'next/image';

interface IProps {
  name: string;
  src: string;
  profile: string;
}

export default function StoryCard({ name, src, profile }: IProps) {
  return <div className="rounded-xl">
    <Image src={profile} width={20} height={20} objectFit="cover" alt='profile card' className='rounded-xl'/>
    <Image src={src} width={140} height={280} objectFit="cover" alt='profile card' className='rounded-xl'/>
    <p>{name}</p>
  </div>;
}
