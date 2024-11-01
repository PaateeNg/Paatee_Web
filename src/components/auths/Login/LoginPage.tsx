"use client";

import Link from 'next/link';
import SocialBtn from '../buttons/SocialBtn';
import AuthBtn from '@/components/Buttons/AuthBtn';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useEffect, useState } from 'react';
import Logo from '@/components/logo/Logo';
// import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/lib/context/UserContext';
import { signIn, useSession } from 'next-auth/react';

const Login = () => {
  const context = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [userType, setCategory] = useState(''); // State for category
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const route = useRouter();

  useEffect(() => {
    if(session?.status === 'authenticated'){
      console.log('login')
      route.replace('/')
    }
  }, [session, route])
  

  const handleLogin =async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      userType,
    })

    console.log('red', res)
    if(!res?.ok){
      setLoading(false)
      setError(res?.error)
    }

    if(res?.error === "Error: querySrv ETIMEOUT _mongodb._tcp.cluster0.dgonc.mongodb.net") {
      console.log(res?.error)
      setLoading(false)
      // toast.error("Network Error");
      // if(res?.url) route.replace("/")
    }if(res?.error === "CredentialsSignin"){
      console.log(res?.error)
      setLoading(false)
      // toast.error("Invalid email or password");
    }

    // Call your login mutation or handle the login logic here
    // e.g. login({ variables: { email, password, category } });
  };

  return (
    <>
      <div className='flex flex-col gap-5 px-6 pt-6 sm:max-w-[500px] sm:m-auto'>
        <div className="relative h-20 w-48">
          <Logo />
        </div>
        <h2 className='font-bold text-2xl'>Welcome back!</h2>
        <p className='font-light'>Sign into your account to pick where you left off</p>
        <SocialBtn social={<FcGoogle />} text={'Sign in with Google'} />
        <SocialBtn social={<FaApple />} text={'Sign in with Apple Id'} />
        <p className='or'>or</p>
        <form onSubmit={handleLogin} className='flex flex-col gap-7'>
          <div className='flex flex-col'>
            <label>Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              className='rounded-full outline-none border-2 border-gray-200'
              type="email"
              placeholder="Email"
            />
          </div>
          <div className='flex flex-col relative'>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className='rounded-full outline-none border-2 border-gray-200'
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-6 bottom-4'>
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
          </div>
          <div className='input'>
            <label className='font-semibold'>Vendor Category</label>
            <select
              value={userType}
              onChange={(e) => setCategory(e.target.value)} // Update category state
              className='rounded-full outline-none border-2 border-gray-200'>
              <option value="" disabled>Select Category</option>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
              <option value="planner">Planner</option>
            </select>
          </div>
          <div className='flex justify-between text-sm -mt-4'>
            <div>
              <input type="checkbox" className='mr-2' /><span>Keep me signed in</span>
            </div>
            <Link href={'/forgot-password'} className='text-[#F63D6B] font-semibold'>Forgot password</Link>
          </div>
          <p className='text-red-500 -mb-10 text-xl'>{error && error}</p>
          <AuthBtn text={`${loading ? 'please wait...' : 'login'}`} />
        </form>
        <div className='text-center mt-4'>
          <p>If you don't have an account with us you could</p>
          <Link href={'/sign-up'} className='text-[#F63D6B] font-semibold'>Sign up</Link>
        </div>
      </div>
    </>
  );
};

// const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!, $loginAs: String!) {
//     login(payload: {
//       email: $email
//       password: $password
//       loginAs: $loginAs
//     }) {
//       email
//       accessToken
//       userType
//     }
//   }
// `;

export default Login;
