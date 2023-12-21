"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log("res =>", { res });
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-white mb-4">Sign In</h2>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded"
          />
        </div>
        <button
          type="submit"
          disabled={email && password ? false : true}
          onClick={handleSignIn}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
