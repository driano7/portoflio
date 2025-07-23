import { Landing } from "@/components/sections/landing";
import { ThemeSwitcher } from "@/components/theme-switcher";
<<<<<<< HEAD
import Particles from "@/components/particles";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
=======

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="flex min-h-screen flex-col">
>>>>>>> 8873152 (agregame el botón para elegir los temas (light, dark, dim) del lado supe)
=======
    <div className="flex min-h-screen flex-col bg-background">
>>>>>>> 214392b (los temas que cambian es el recuadro de los temas, no todo el sitio web)
      <div className="absolute top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <main className="flex-1">
        <Landing />
      </main>
    </div>
  );
}
