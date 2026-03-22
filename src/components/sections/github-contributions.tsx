"use client";

import { useEffect, useRef } from "react";

declare global {
	interface Window {
		GitHubCalendar?: (
			container: string | HTMLElement,
			username: string,
			options?: {
				responsive?: boolean;
				tooltips?: boolean;
				global_stats?: boolean;
			}
		) => Promise<unknown>;
	}
}

type GitHubContributionsProps = {
	username: string;
};

const CALENDAR_CSS_ID = "github-calendar-css";
const CALENDAR_SCRIPT_ID = "github-calendar-script";

export function GitHubContributions({ username }: GitHubContributionsProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ensureCss = () => {
			if (document.getElementById(CALENDAR_CSS_ID)) return;
			const link = document.createElement("link");
			link.id = CALENDAR_CSS_ID;
			link.rel = "stylesheet";
			link.href = "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css";
			document.head.appendChild(link);
		};

		const ensureScript = () =>
			new Promise<void>((resolve, reject) => {
				if (window.GitHubCalendar) {
					resolve();
					return;
				}

				const existing = document.getElementById(CALENDAR_SCRIPT_ID) as HTMLScriptElement | null;
				if (existing) {
					existing.addEventListener("load", () => resolve(), { once: true });
					existing.addEventListener("error", () => reject(new Error("GitHub Calendar script failed to load")), {
						once: true,
					});
					return;
				}

				const script = document.createElement("script");
				script.id = CALENDAR_SCRIPT_ID;
				script.src = "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
				script.async = true;
				script.onload = () => resolve();
				script.onerror = () => reject(new Error("GitHub Calendar script failed to load"));
				document.body.appendChild(script);
			});

		let isMounted = true;

		const loadCalendar = async () => {
			ensureCss();
			await ensureScript();

			if (!isMounted || !containerRef.current || !window.GitHubCalendar) return;

			containerRef.current.innerHTML = "Loading contributions...";

			try {
				await window.GitHubCalendar(containerRef.current, username, {
					responsive: true,
					tooltips: true,
					global_stats: false,
				});
			} catch {
				if (containerRef.current) {
					containerRef.current.innerHTML = "Unable to load contributions right now.";
				}
			}
		};

		loadCalendar();

		return () => {
			isMounted = false;
		};
	}, [username]);

	return (
		<div className="github-calendar-purple rounded-lg border border-violet-300/60 bg-white p-4 text-zinc-800 dark:border-purple-700/40 dark:bg-zinc-900 dark:text-zinc-100">
			<div ref={containerRef}>Loading contributions...</div>
		</div>
	);
}
