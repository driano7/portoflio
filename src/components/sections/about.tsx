<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client';
=======
'use client';
<<<<<<< HEAD
import Image from "next/image";
>>>>>>> 321e9f9 (no veo la pinshi foto :((( jajaj)
=======
>>>>>>> 5d93610 (jaja no se ve la foto :()
import Link from "next/link";

export function About() {
	return (
		<div className="relative py-24 sm:py-32 animate-fade-in">
			<div className="container mx-auto px-4">
				<div id="about" className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">About Me</h2>
					<div className="mt-8 text-lg leading-8 text-zinc-400 text-justify">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5d93610 (jaja no se ve la foto :()
=======
>>>>>>> 90340d2 (alinea el texto del about con la foto que no cargas como este ejemplo, d)
=======
=======
>>>>>>> 5d93610 (jaja no se ve la foto :()
>>>>>>> 55a8b73 (jaja no se ve la foto :()
						<img
							src="/profile.jpg"
=======
						<Image
<<<<<<< HEAD
<<<<<<< HEAD
							src="https://placehold.co/300x300.png"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f277cdb (alinea el texto del about con la foto que no cargas como este ejemplo, d)
=======
							src="/profile.jpg"
>>>>>>> 12524c9 (agrega esta foto en mi about por favor)
=======
							src="https://placehold.co/300x300.png"
>>>>>>> f277cdb (alinea el texto del about con la foto que no cargas como este ejemplo, d)
>>>>>>> 90340d2 (alinea el texto del about con la foto que no cargas como este ejemplo, d)
=======
>>>>>>> 707025d (agrega esta foto en mi about por favor)
=======
>>>>>>> f277cdb (alinea el texto del about con la foto que no cargas como este ejemplo, d)
>>>>>>> a8defe1 (no veo la pinshi foto :((( jajaj)
							alt="Donovan Riaño"
							width={300}
							height={300}
							className="rounded-2xl object-cover aspect-square float-none sm:float-right ml-0 sm:ml-8 mb-4 sm:mb-2"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 12524c9 (agrega esta foto en mi about por favor)
=======
=======
							data-ai-hint="man portrait"
>>>>>>> f277cdb (alinea el texto del about con la foto que no cargas como este ejemplo, d)
>>>>>>> 90340d2 (alinea el texto del about con la foto que no cargas como este ejemplo, d)
=======
							data-ai-hint="man portrait"
>>>>>>> 707025d (agrega esta foto en mi about por favor)
=======
=======
							data-ai-hint="man portrait"
>>>>>>> f277cdb (alinea el texto del about con la foto que no cargas como este ejemplo, d)
>>>>>>> a8defe1 (no veo la pinshi foto :((( jajaj)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

>>>>>>> 894718b (agrega esta foto en la parte superior derecha del about (con bordes redo)
export function About() {
	return (
		<div className="relative py-24 sm:py-32 animate-fade-in">
			<div className="container mx-auto px-4">
				<div id="about" className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">About Me</h2>
<<<<<<< HEAD
=======
=======
import Image from "next/image";
import Link from "next/link";

>>>>>>> 894718b (agrega esta foto en la parte superior derecha del about (con bordes redo)
export function About() {
	return (
		<div id="about" className="relative py-24 sm:py-32 animate-fade-in">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">About Me</h2>
<<<<<<< HEAD
>>>>>>> 24442a0 (¡puedes agregar una sección que diga about me? y que puedas poner descri)
					<div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
						<p>
							I am a passionate full-stack developer with a keen eye for creating beautiful, modern, and highly functional user interfaces. My journey in web development began with a fascination for how things work on the internet, which quickly grew into a full-fledged passion for building seamless digital experiences.
						</p>
						<p>
							I specialize in the frontend with React and Next.js, building responsive and performant applications. On the backend, I am proficient with Node.js and have experience with various databases, both SQL and NoSQL. I enjoy the challenge of solving complex problems and am always eager to learn new technologies to improve my skills.
						</p>
						<p>
							When I'm not coding, I enjoy contributing to open-source projects, exploring new hiking trails, and experimenting with new recipes in the kitchen. I believe in continuous learning and am always looking for new opportunities to grow as a developer and as an individual.
						</p>
<<<<<<< HEAD
>>>>>>> 24442a0 (¡puedes agregar una sección que diga about me? y que puedas poner descri)
=======
					<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
						<div className="lg:col-span-2 space-y-6 text-lg leading-8 text-zinc-400 text-justify">
=======
							data-ai-hint="man portrait"
						/>
						<div className="space-y-6">
>>>>>>> f277cdb (alinea el texto del about con la foto que no cargas como este ejemplo, d)
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
<<<<<<< HEAD
=======
>>>>>>> 66060a3 (En about, deja como último párrafo que deseo abrir una cafeteria en la c)
						<div className="flex items-start justify-center lg:justify-end">
							<Image
								src="https://placehold.co/300x300.png"
=======
					<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
						<div className="lg:col-span-2 space-y-6 text-lg leading-8 text-zinc-400">
							<p>
								I hold a degree in Computer Engineering from UNAM (2017-2022), an academic journey that culminated with the defense of my thesis at Florida Atlantic University, broadening my global perspective.
							</p>
							<p>
								Currently, my career is focused on the intersection of technologies defining the future: <strong>Web3, cryptocurrencies, and Artificial Intelligence</strong>. As <strong>Creative Director at <Link href="https://criptec.io" target="_blank" className="text-primary-foreground underline hover:text-zinc-300">Criptec.io</Link></strong>, I lead the development of innovative solutions in the crypto space.
							</p>
							<p>
								Since January 2022, I have also served as a <strong>QA Engineer at American Express</strong>, where I apply my attention to detail to ensure the quality and robustness of world-class products. This corporate experience complements my agility in the startup world, giving me a comprehensive view of the software lifecycle.
							</p>
						</div>
						<div className="flex items-start justify-center lg:justify-end">
							<Image
								src="/profile.jpg"
>>>>>>> 894718b (agrega esta foto en la parte superior derecha del about (con bordes redo)
								alt="Donovan Riaño"
								width={300}
								height={300}
								className="rounded-2xl object-cover aspect-square"
								data-ai-hint="man portrait"
							/>
						</div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 894718b (agrega esta foto en la parte superior derecha del about (con bordes redo)
=======
>>>>>>> f277cdb (alinea el texto del about con la foto que no cargas como este ejemplo, d)
=======
>>>>>>> 66060a3 (En about, deja como último párrafo que deseo abrir una cafeteria en la c)
=======
>>>>>>> 90340d2 (alinea el texto del about con la foto que no cargas como este ejemplo, d)
=======
>>>>>>> 24442a0 (¡puedes agregar una sección que diga about me? y que puedas poner descri)
=======
>>>>>>> 894718b (agrega esta foto en la parte superior derecha del about (con bordes redo)
					</div>
				</div>
			</div>
		</div>
	);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 24442a0 (¡puedes agregar una sección que diga about me? y que puedas poner descri)
=======
}
>>>>>>> 894718b (agrega esta foto en la parte superior derecha del about (con bordes redo)
=======
}
>>>>>>> f277cdb (alinea el texto del about con la foto que no cargas como este ejemplo, d)
=======
}
>>>>>>> 12524c9 (agrega esta foto en mi about por favor)
=======
}
>>>>>>> 5d93610 (jaja no se ve la foto :()
=======
}
>>>>>>> 707025d (agrega esta foto en mi about por favor)
=======
}
>>>>>>> a8defe1 (no veo la pinshi foto :((( jajaj)
=======
}
>>>>>>> 24442a0 (¡puedes agregar una sección que diga about me? y que puedas poner descri)
=======
}
>>>>>>> 894718b (agrega esta foto en la parte superior derecha del about (con bordes redo)
