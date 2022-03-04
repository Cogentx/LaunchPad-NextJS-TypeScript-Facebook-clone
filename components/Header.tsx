import Image from 'next/image';
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <div className="flex justify-between m-2">
      {/* left */}
      <div className='flex items-center'>
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={40}
          height={40}
          layout="fixed"
          alt="facebook logo"
        />
      </div>
      {/* center */}
      <div>Center</div>
      {/* right */}
      <div>Right</div>
    </div>
  );
}

export default Header;
