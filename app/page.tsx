import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Let's build an AI Notion App</h1>
      <Button>Click Me</Button>
    </main>
  );
}
