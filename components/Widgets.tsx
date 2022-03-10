import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { IContact } from '../fb-clone';
import { contacts } from '../mock-data';
import Contact from './Contact';

export default function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 mt-5">
      <div className="flex justify-between items-center p-2 text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <SearchIcon className="h-6 w-6" />
          <DotsHorizontalIcon className="h-6 w-6" />
          <VideoCameraIcon className="h-6 w-6" />
        </div>
      </div>

      {contacts.map((contact: IContact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </div>
  );
}
