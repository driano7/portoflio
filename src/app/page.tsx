import { Landing } from "@/components/sections/landing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <Landing />
      </main>
    </div>
  );
}
