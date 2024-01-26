"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      // await signIn("google");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      console.log("working")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      throw new Error("something went wrong")
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button onClick={loginWithGoogle} loading={isLoading}>
      {isLoading ? (
        "Redirecting..."
      ) : (
        <>
          <FcGoogle className=" text-lg" /> Login with Google
        </>
      )}
    </Button>
  );
}
