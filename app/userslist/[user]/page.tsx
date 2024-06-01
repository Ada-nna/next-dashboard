"use client";
import React from "react";

interface Params {
  user: string;
}

const page = ({ params }: { params: Params }) => {
  return (
    <div>
      <h1>this is the {params.user} page</h1>
      <p>Send a dm to gather all information about {params.user} on whatsapp</p>
    </div>
  );
};

export default page;
