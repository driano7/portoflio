import { Landing } from "@/components/sections/landing";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="absolute top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <main className="flex-1">
        <Landing />
      </main>
    </div>
  );
}
