import Image from 'next/image';
import { signIn } from 'next-auth/react';

function Login() {
  return (
    <div className="grid place-items-center mt-10">
      <Image
        src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
        width={400}
        height={400}
        objectFit="contain"
        alt="facebook logo"
        // use 'priority' to disable 'lazy-loading' on images 'above-the-fold'
        priority
      />
      {/* Get color value using color picker on fb image for example. Remember '#' in front of hex-color value */}
      <button
        onClick={() => signIn()}
        className="px-5 py-3 mt-5 bg-[#186ae7] rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </button>
    </div>
  );
}

export default Login;
