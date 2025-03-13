'use client'
import React from 'react'
import { Mail, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { signIn,signOut, useSession } from "next-auth/react"; // ✅ Correct import
export default function Page() {
  const { data: session } = useSession();
  console.log(session?.user?.name);
  console.log(session?.user?.email);
  const handleSignIn = async (provider:"google" | "github") => {
    try {
      await signIn(provider); // ✅ Fix: Call signIn inside an async function
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };
  const handleSignOut = async () => {
    try{
      await signOut();
    } catch (error){
      console.log('signOut error',error);
    }
  }
  return (
    <>
         <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-green-500 via-indigo-300-200 to-cyan-500 text-white p-4">
      <div className="card w-full max-w-md shadow-lg bg-gradient-to-r from-green-200 via-indigo-200-500 to-cyan-500 text-white">
        <div className="card-body text-center space-y-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-600"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Subscribe to Pulse</h2>
          <p className="text-sm text-gray-500">Stay updated with the latest tech and design trends, delivered straight to your inbox.</p>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={()=>handleSignIn('google')} className="btn btn-outline w-full">Google</button>
            <button className="btn btn-outline w-full">Facebook</button>
            <button onClick={()=>handleSignIn('github')} className="btn btn-outline w-full">GitHub</button>
          </div>
          {
           session ? <button onClick={handleSignOut} className='btn'>SignOut</button> :''
          }
          <div className="divider">Or continue with</div>
            <form>
            <div className="relative m-0 p-0">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered w-full pl-10" />
          </div>
          <div className="relative m-0 p-0 my-3">
            <Mail className="absolute left-3  h-4 w-4 text-gray-400" />
            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full pl-10" />
          </div>
          <div className="relative m-0 p-0">
            <Mail className="absolute left-3 h-4 w-4 text-gray-400" />
            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full pl-10" />
          </div>
          <button type="submit" className="btn w-full my-3 bg-purple-600 hover:bg-purple-700 text-white">
            Subscribe <ArrowRight className="ml-2 h-4 w-4" />
          </button>
            </form>
          <div className="text-xs text-gray-500 space-x-4">
            <Link href="#" className="underline hover:text-purple-600">Terms of Service</Link>
            <Link href="#" className="underline hover:text-purple-600">Privacy Policy</Link>
            <Link href="#" className="underline hover:text-purple-600">Help</Link>
          </div>
          <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div> 
    </>
  )
}
