import type { Metadata } from "next";

import { Web3 } from "@/components/sections/web3";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Finanzas DeFi y CeFi | Donovan Riaño",
  description:
    "Ruta educativa de finanzas CeFi y DeFi: fundamentos, operación, seguridad y ejecución práctica por niveles.",
  path: "/web3",
});

export default function Web3Page() {
    return (
            <main className="w-full max-w-5xl mx-auto">
                <Web3 />
            </main>
    );
}
