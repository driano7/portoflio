import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function Web3() {
	return (
		<div className="relative py-24 sm:py-32 animate-fade-in">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<div className="space-y-16">
						<div id="web3" className="space-y-8 scroll-mt-24">
							<h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-center">Web3 Journey</h3>
							<Card className="bg-zinc-900 border-zinc-800">
								<CardHeader>
									<CardTitle className="text-white">Strawberry Wallet & Zero-Knowledge Proofs</CardTitle>
								</CardHeader>
								<CardContent className="text-zinc-400 space-y-4 text-justify">
									<p>Strawberry Wallet is a conceptual project for a secure, user-friendly cryptocurrency wallet designed with privacy at its core. A key technology enabling this is <strong>Zero-Knowledge Proofs (ZKPs)</strong>.</p>
									<p>ZKPs are cryptographic protocols that allow one party to prove to another that they know a certain piece of information without revealing the information itself. This has profound implications for privacy and security in blockchain transactions. The main advantages of ZKPs are:</p>
									<ul className="list-disc pl-5 space-y-2">
										<li><strong>Confidentiality:</strong> Transactions can be validated without exposing sensitive details like amounts or participants.</li>
										<li><strong>Scalability:</strong> ZKPs can bundle multiple transactions into a single proof, reducing the data stored on the blockchain and increasing throughput.</li>
										<li><strong>Security:</strong> They provide robust verification without centralizing or exposing private data.</li>
									</ul>
								</CardContent>
							</Card>
						</div>

						<div id="criptec" className="space-y-8 scroll-mt-24">
							<h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-center">Criptec.io</h3>
							<Card className="bg-zinc-900 border-zinc-800">
								<CardHeader>
									<CardTitle className="text-white">Driving Web3 Adoption</CardTitle>
								</CardHeader>
								<CardContent className="text-zinc-400 space-y-4 text-justify">
									<p>At <Link href="https://criptec.io" target="_blank" className="underline hover:text-zinc-300">Criptec.io</Link>, we are a collective of developers, designers, and researchers passionate about building the decentralized future. Our mission is to bridge the gap between complex blockchain technology and real-world applications.</p>
									<p>We specialize in blockchain consulting, decentralized application (dApp) development, and creating educational resources to empower the next wave of Web3 users and builders. As Creative Director, I guide our brand's vision and ensure our solutions are not only technologically sound but also accessible and impactful.</p>
								</CardContent>
							</Card>
						</div>

						<div id="education" className="space-y-8 scroll-mt-24">
							<h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-center">Educational Initiatives</h3>
							<Card className="bg-zinc-900 border-zinc-800">
								<CardHeader>
									<CardTitle className="text-white">Empowering the Spanish-Speaking Community</CardTitle>
								</CardHeader>
								<CardContent className="text-zinc-400 space-y-4 text-justify">
									<p>I am dedicated to making complex topics in blockchain, crypto, Web3, and privacy accessible to Spanish speakers. I have developed a series of educational materials designed to guide newcomers and enthusiasts through their learning journey. You can access these resources through the links below:</p>
									<div className="flex flex-col sm:flex-row gap-4 mt-6">
										<Link href="https://drive.google.com/drive/u/1/folders/1ZcvN8tdb8TvTTXKwCogNlhjqn8mXf_Pb" target="_blank" className="flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
											Level 1: Fundamentals <ArrowRight className="w-4 h-4" />
										</Link>
										<Link href="https://drive.google.com/drive/u/1/folders/1TY4kh6dDwImbmLUr2pYP2FtUFgy78qQR" target="_blank" className="flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
											Level 2: Intermediate <ArrowRight className="w-4 h-4" />
=======
											Nivel 1: Fundamentos <ArrowRight className="w-4 h-4" />
										</Link>
										<Link href="https://drive.google.com/drive/u/1/folders/1TY4kh6dDwImbmLUr2pYP2FtUFgy78qQR" target="_blank" className="flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
											Nivel 2: Avanzado <ArrowRight className="w-4 h-4" />
>>>>>>> 6446fb1 (separa las secciones de web 3 y about, que sean dos links distintos)
=======
											Level 1: Fundamentals <ArrowRight className="w-4 h-4" />
										</Link>
										<Link href="https://drive.google.com/drive/u/1/folders/1TY4kh6dDwImbmLUr2pYP2FtUFgy78qQR" target="_blank" className="flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
<<<<<<< HEAD
											Level 2: Advanced <ArrowRight className="w-4 h-4" />
>>>>>>> 97d7183 (en la sección de web 3, en los links de nivel 1 y dos, ponlos en inglés)
=======
											Level 2: Intermediate <ArrowRight className="w-4 h-4" />
>>>>>>> 84069ef (el nivel 2 dejalo como intermedio, en inglés también, en lugar de avanza)
=======
											Nivel 1: Fundamentos <ArrowRight className="w-4 h-4" />
										</Link>
										<Link href="https://drive.google.com/drive/u/1/folders/1TY4kh6dDwImbmLUr2pYP2FtUFgy78qQR" target="_blank" className="flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
											Nivel 2: Avanzado <ArrowRight className="w-4 h-4" />
>>>>>>> 97258a4 (separa las secciones de web 3 y about, que sean dos links distintos)
										</Link>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
