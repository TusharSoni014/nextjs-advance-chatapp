"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const loadingHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button loading={loading} onClick={loadingHandler}>
        awdff
      </Button>
    </main>
  );
}
