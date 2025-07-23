'use client';
import Link from "next/link";

export function About() {
	return (
		<div className="relative py-24 sm:py-32 animate-fade-in">
			<div className="container mx-auto px-4">
				<div id="about" className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">About Me</h2>
					<div className="mt-8 text-lg leading-8 text-zinc-400 text-justify">
						<img
							src="/profile.jpg"
							alt="Donovan Riaño"
							width={300}
							height={300}
							className="rounded-2xl object-cover aspect-square float-none sm:float-right ml-0 sm:ml-8 mb-4 sm:mb-2"
						/>
						<div className="space-y-6">
							<p>
								I hold a bachelor's degree in Computer Engineering from UNAM (2017-2022), an academic journey that culminated with the defense of my thesis—my fourth scientific paper on web ads detection and the analysis of malpractices by big companies—at Florida Atlantic University (FAU), broadening my global perspective.
							</p>
							<p>
								Currently, my career is focused on the intersection of technologies defining the future: <strong>Web3, cryptocurrencies, and Artificial Intelligence</strong>. As <strong>Creative Director at <Link href="https://criptec.io" target="_blank" className="underline hover:text-zinc-300">Criptec.io</Link></strong>, I lead the development of innovative solutions in the crypto space.
							</p>
							<p>
								My skills were also recognized by <strong>Meta (formerly Facebook) in 2021</strong>, where I went through a comprehensive interview process, underscoring my potential for contributing to top-tier tech companies.
							</p>
							<p>
								Since January 2022, I have also served as a <strong>QA Engineer at American Express</strong>, where I apply my attention to detail to ensure the quality and robustness of world-class products. This role has also been crucial in developing my skills in communication, project management, and leadership. This corporate experience complements my agility in the startup world, giving me a comprehensive view of the software lifecycle.
							</p>
							<p>
								As a future project, I am working hard with my team to open a coffee shop in Mexico City. You can follow our journey at <Link href="https://xococafe.netlify.app" target="_blank" className="underline font-bold hover:text-zinc-300">Xoco Café</Link>. We will offer quality Mexican-origin beverages, with flavor and quality as our main cornerstones, and we will also accept <strong>crypto payments</strong>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
