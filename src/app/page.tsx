import { Landing } from "@/components/sections/landing";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Particles from "@/components/particles";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="absolute top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <main className="flex-1">
        <Landing />
      </main>
    </div>
  );
}
