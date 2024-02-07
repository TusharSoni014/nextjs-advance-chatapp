import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="__nav_bar h-[60px] flex justify-between px-5 items-center bg-slate-900">
      <h2 className=" font-bold text-xl">NextChat</h2>
      <div className="__nav_links flex gap-1">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </div>
    </nav>
  );
}
