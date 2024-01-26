import { Loader2 } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="w-full h-[calc(100dvh-60px)] flex justify-center items-center">
      <Loader2 className=" animate-spin" />
    </div>
  );
}
