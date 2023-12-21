/* eslint-disable react/jsx-key */
"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Card } from "@/components/cards/Card";
import { Pagination } from "@/components/pagination/Pagination";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  // const userSession = sessionStorage?.getItem("user");

  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(3);
  const [total, setTotal] = useState(100);
  const [load, setLoad] = useState(true);

// calling the giphy api----------------------------------
  useEffect(() => {
    const getData = async () => {
      const querry = await fetch(
        `https://api.giphy.com/v1/stickers/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${query}&limit=100&offset=&rating=g&lang=en&bundle=messaging_non_clips`
      );
      const res = await querry.json();
      console.log("gifs", res);

      setData(res.data);
    };
    getData();
  }, [query]);

 
  // Assuring the user sessions-------------------------------
  if (!user) {
    router.push("/signUp");
  }

  // logout functionality-------------------------------------
  const handleLogOut = () => {
    signOut(auth);
    router.push('/signUp')
  };


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const lastPostInd = currentPage * postPerPage;
  const firstPostInd = lastPostInd - postPerPage;
  const currentPosts = data?.slice(firstPostInd, lastPostInd);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="w-3/5 min-h-1 bg-white p-3 rounded-xl flex flex-col justify-center">
        <div className="flex items-center  justify-center">
          <div className="relative w-full">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Article name or keywords..."
              className="w-full px-4 py-2 text-slate-800 rounded bg-slate-100 focus:outline-none focus:border-blue-500"
            />
            <button
              className="absolute right-0 top-0 p-2 bg-slate-800 text-slate-100 rounded h-10 w-20"
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <Card data={currentPosts} />
        </div>
        {query != "" ? (
          <div className="ml-60">
            <Pagination
              totalPost={20}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <button onClick={handleLogOut}>LogOut</button>
    </main>
  );
}
