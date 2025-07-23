import { About } from "@/components/sections/about";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Particles from "@/components/particles";

export default function AboutPage() {
    return (
        <div className="bg-background text-white min-h-screen">
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-start h-16">
                        <Link href="/" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                            <ArrowLeft className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </header>
            <main className="pt-16">
                <About />
            </main>
        </div>
    );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 24442a0 (¡puedes agregar una sección que diga about me? y que puedas poner descri)
=======
}
>>>>>>> 894718b (agrega esta foto en la parte superior derecha del about (con bordes redo)
