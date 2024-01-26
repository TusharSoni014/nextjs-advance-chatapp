"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddFriendBtn = () => {
  const addFriend = async (email: string) => {};

  return (
    <form className="flex gap-2">
      <Input placeholder="email/username of your friend" />
      <Button type="submit">Send Request</Button>
    </form>
  );
};

export default AddFriendBtn;
