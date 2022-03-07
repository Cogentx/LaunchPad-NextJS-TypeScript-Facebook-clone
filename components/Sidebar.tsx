import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline';
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/react/solid';
import SidebarRow from './SidebarRow';

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="border border-red-500 p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      {/* since we're using TailwindCSS JIT Compiler we can use '[]' to set custom values */}

    </div>
  );
}
