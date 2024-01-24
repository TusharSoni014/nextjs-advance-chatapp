import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {
  await db.set("hello", "hello world");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>test button</Button>
    </main>
  );
}
