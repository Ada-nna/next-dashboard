'use client'
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter()
  return <div>
    <h1>this is the users page</h1>
    <button onClick={() => router.push("profile")}>Click me to navigate...</button>
  </div>;
};

export default page;
