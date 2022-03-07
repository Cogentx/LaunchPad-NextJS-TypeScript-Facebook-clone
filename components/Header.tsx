import Image from 'next/image';
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { useSession, signOut } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between p-2 lg:px-5 sticky t-0 z-50 bg-white shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={40}
          height={40}
          layout="fixed"
          alt="facebook logo"
        />
        <div className="flex ml-2 items-center rounded-full p-2 bg-gray-100 flex-shrink">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex items-center bg-transparent outline-none ml-2 placeholder-gray-500"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
        {/* protect against image not being available */}
        {session && session.user && (
          <Image
            className="rounded-full cursor-pointer"
            height={40}
            width={40}
            layout="fixed"
            /* Next.js Image requires 'src' so use '!' to tell TypeScript
          it will be there. Works with 'session && session.user' checks
          above to ensure they exist at runtime otherwise Image is not
          displayed (avoids code breaking at runtime)*/
            src={session.user.image!}
            alt="user profile picture"
          />
        )}
        <p className="whitespace-nowrap font-semibold pr-3">Ted Cogent</p>
        <ViewGridIcon className="icon"></ViewGridIcon>
        <ChatIcon className="icon"></ChatIcon>
        <BellIcon className="icon"></BellIcon>
        <ChevronDownIcon className="icon"></ChevronDownIcon>
      </div>
    </div>
  );
}

export default Header;
