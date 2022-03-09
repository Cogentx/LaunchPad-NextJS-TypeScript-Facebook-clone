import { useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function InputBox() {
  const [imageToPost, setImageToPost] = useState<string | ArrayBuffer | null | undefined>(null);
  const { data: session } = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);

  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target?.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const sendPost = async (e: any) => {
    // prevent page refresh on submit
    e.preventDefault();

    // only submit if message exists
    if (!inputRef.current?.value) return;

    /* Firebase v9 Cloud Firestore document creation
      - If no collection exists, it is created
      - If no document exists, it is created
      - If document exists, it is replaced (unless merge option specified)
    */
    await addDoc(collection(db, 'fb-posts'), {
      message: inputRef.current.value,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      timestamp: serverTimestamp(),
    });

    inputRef.current.value = '';
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
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user?.name!}?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          />
          <button onClick={sendPost} hidden type="submit">
            Submit
          </button>
        </form>

      </div>

      <div className="flex justify-evenly p-2 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="rounded-full text-red-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        {/* use 'filePickerRef' to call 'click' on hidden button */}
        <div onClick={() => filePickerRef.current?.click()} className="inputIcon">
          <CameraIcon className="rounded-full text-green-400 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Photos/Video</p>
          <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="rounded-full text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}
