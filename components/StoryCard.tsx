import Image from 'next/image';

interface IProps {
  name: string;
  src: string;
  profile: string;
}

export default function StoryCard({ name, src, profile }: IProps) {
  return <div className="bg-red-100">{name}</div>;
}
