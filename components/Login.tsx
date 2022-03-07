import Image from 'next/image';
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center mt-10">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={400}
          height={400}
          objectFit="contain"
          alt="facebook logo"
        />
        <button onClick={()=>signIn()} className="p-5 mt-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">
          Login with Facebook
        </button>
    </div>
  );
}

export default Login;
