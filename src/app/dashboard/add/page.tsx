import AddFriendBtn from "@/components/AddFriendBtn";
import React from "react";

const page = () => {
  return (
    <section className="w-full p-5 flex justify-center items-center flex-col gap-3">
      <h1 className=" text-4xl">Add a new Friend!</h1>
      <AddFriendBtn />
    </section>
  );
};

export default page;
