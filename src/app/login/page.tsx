import Link from "next/link";
import React from "react";
import GoogleLoginButton from "./components/GoogleLoginButton";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="__login_page flex justify-center items-center flex-col gap-3 p-3">
      <h1 className="text-center font-bold text-4xl p-3">Login To NextChat</h1>
      <GoogleLoginButton />
      <p className="text-center text-xs text-slate-600">
        By creating an account on our website, you automatically agree to out{" "}
        <Link className=" text-purple-500" href="/terms">
          Terms & conditions
        </Link>{" "}
        and {" "}
        <Link className=" text-purple-500" href="/privacy">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
