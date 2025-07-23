import { Landing } from "@/components/sections/landing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <Landing />
      </main>
    </div>
  );
}
