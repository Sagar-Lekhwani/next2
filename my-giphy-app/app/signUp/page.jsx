'use client'
import { useState } from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignup = async () => {
    try {
        const res = await createUserWithEmailAndPassword(email, password);
        console.log("res => ", res);
        setEmail('');
        setPassword(''); 
        router.push('/');
    } catch (e) {
        console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-white mb-4">Sign Up</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <button
            type="submit"
            disabled={email && password?false:true}
            onClick={handleSignup}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
          <button onClick={() => router.push('/signIn')} className='cursor-pointer text-slate-300 mt-3'>Already have an account?</button>
      </div>
    </div>
  );
};

export default Signup;