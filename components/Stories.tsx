import StoryCard from "./StoryCard";

interface IStory {
  name: string;
  src: string;
  profile: string;
}
const stories: Array<IStory> = [
  {
    name: 'Sonny Sangha',
    src: 'https://links.papareact.com/zof',
    profile: 'https://links.papareact.com/l4v',
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Jeff Bezos',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f8p',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
];

export default function Stories() {
  return (
    <div className="flex justify-center space-x-2">
      {stories.map(({name,src,profile}: IStory, idx) => (
        <StoryCard key={idx} name={name} src={src} profile={profile}/>))}
    </div>
  );
}
