import { Contact } from "@/components/sections/contact";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-transparent min-h-screen">
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
                <Contact />
            </main>
        </div>
    );
}
