import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function InputBox() {
  const { data: session } = useSession();

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex items-center space-x-4 p-4">
        {session && session.user && (
          <Image
            className="rounded-full"
            height={40}
            width={40}
            layout="fixed"
            src={session.user.image!}
            alt="user profile picture"
          />
        )}
        <form className="flex flex-1">
          <input
            type="text"
            placeholder={`What's on your mind, ${session?.user?.name!}?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          />
          <button onClick={sendPost} hidden type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
