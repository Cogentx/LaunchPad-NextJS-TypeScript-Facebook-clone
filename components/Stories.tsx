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
    <div>
      {stories.map((story: IStory, idx) => (
        <div key={idx}>{story.name}</div>
      ))}
    </div>
  );
}
