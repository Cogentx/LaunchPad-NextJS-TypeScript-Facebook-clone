import Image from 'next/image';

interface IProps {
  src?: string;
  Icon?: any;
  title?: string;
  active?: boolean;
}

export default function SidebarRow({ Icon, title, src, active }: IProps) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {Icon && <Icon className="w-8 h-8 text-blue-500" />}
      {src && (
        <Image className="rounded-full" height={40} width={40} layout="fixed" src={src!} alt="user profile picture" />
      )}

      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}
