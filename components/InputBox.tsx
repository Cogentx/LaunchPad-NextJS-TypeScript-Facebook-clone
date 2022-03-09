import { useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { collection, addDoc, serverTimestamp, getDoc, updateDoc } from 'firebase/firestore';
import { db, fb_posts_url, storage } from '../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

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
    try {
      const docRef = await addDoc(collection(db, fb_posts_url), {
        message: inputRef.current.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        timestamp: serverTimestamp(),
      });

      const doc = await getDoc(docRef);

      // if post successfully added to Cloud Firestore and there is an image to upload
      if (doc.exists() && imageToPost) {

        const storageRef = ref(storage, `${fb_posts_url}/${doc.id}`);

        // imageToPost is a 'string' type of 'data_url' (base64 encoded image)
        // this type matches (data_url) how file is read in above 'reader.readAsDataURL(e.target.files[0])'
        const uploadResult = await uploadString(storageRef, imageToPost as string, 'data_url');

        // remove preview of image from InputBox
        removeImage();

        const downloadURL = await getDownloadURL(uploadResult.ref);

        // CAUTION: if NOT using 'UPDATEDOC', set {MERGE: TRUE} when updating otherwise it will simply replace current Document and all current data will be lost.
        // 'updateDoc' will MERGE by default!!!
        updateDoc(docRef, {
          postImage: downloadURL,
        });

      }
    } catch (error) {
      console.log('InputBoxComp: error adding post',error);
    }

    // Get Doc Ref from Firebase Cloud Firestore

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

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 hover:scale-105 cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageToPost as string} alt="Image to Post" className="h-10 object-contain" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
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
