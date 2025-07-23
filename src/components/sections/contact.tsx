import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";

const socials = [
	{
		icon: <Send size={20} />,
		href: "https://t.me/driano7",
		label: "Telegram",
		handle: "@driano7",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:donalex7@gmail.com",
		label: "Email",
		handle: "donalex7@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/driano7",
		label: "Github",
		handle: "driano7",
	},
    {
        icon: <Linkedin size={20} />,
        href: "https://www.linkedin.com/in/driano7",
        label: "LinkedIn",
        handle: "driano7",
    }
];

export function Contact() {
	return (
		<div id="contact" className="relative py-24 sm:py-32 animate-fade-in">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact</h2>
					<p className="mt-4 text-lg leading-8 text-zinc-400">
						I'm open to new opportunities. Feel free to reach out.
					</p>
				</div>
				<div className="mx-auto mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-2">
					{socials.map((s) => (
						<Card key={s.label} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:text-white group-hover:bg-zinc-900">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium text-zinc-200 duration-150 lg:text-3xl group-hover:text-white">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center text-zinc-400 duration-1000 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
