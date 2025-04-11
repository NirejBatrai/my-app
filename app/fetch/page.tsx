"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FetchAPI() {
  const [name, setName] = useState("wwarodom");
  const [profile, setProfile] = useState<TGithub>({} as TGithub);

  const fetchAPI = async () => {
    const data = await fetch(`https://api.github.com/users/${name}`);
    const profile = await data.json();
    setProfile(profile);
  };

  useEffect(() => {
    const myFetch = async () => {
      await fetchAPI();
    };
    myFetch();
  }, []);

  if (Object.keys(profile).length === 0) {
    // Check if profile is empty
    return <div>Loading...</div>;
  }

  type TGithub = {
    login: string;
    id: number;
    avatar_url: string;
  };
  return (
    <div>
      <h2>fetch Api</h2>

      <br />
      <div className="flex flex-col items-center gap-4 border-2 max-w-sm border-gray-300 rounded-lg mx-auto p-4">
        <div className=" border border-gray-300 rounded-lg p-1 ">
          Login:{JSON.stringify(profile.login)}
        </div>
        <div className="border border-gray-300 rounded-lg p-1 ">
          ID:{JSON.stringify(profile.id)}
        </div>
        <Image
          className="rounded-full"
          src={profile.avatar_url}
          alt="Avatar"
          width={100}
          height={100}
        />
        <input
          className="border-2 border-gray-300 rounded-lg px-2"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        {/* <button onClick={fetchApi}>Submit</button> */}
        <button onClick={fetchAPI} className="border px-2">
          Update
        </button>
      </div>
    </div>
  );
}
