import Image from 'next/image';
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <div className="flex justify-between m-2">
      {/* left */}
      <div>Left</div>
      {/* center */}
      <div>Center</div>
      {/* right */}
      <div>Right</div>
    </div>
  );
}

export default Header;
