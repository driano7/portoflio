"use client";

import { useLayoutEffect, useRef } from "react";

type ScrollTypingProps = {
	children: React.ReactNode;
	className?: string;
};

type TextNodeRecord = {
	node: Text;
	original: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function ScrollTyping({ children, className }: ScrollTypingProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const targetCharsRef = useRef(0);
	const renderedCharsRef = useRef(0);
	const rafRef = useRef<number | null>(null);

	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
		const textNodes: TextNodeRecord[] = [];
		let currentNode = walker.nextNode();

		while (currentNode) {
			const textNode = currentNode as Text;
			const original = textNode.textContent ?? "";
			if (original.trim().length > 0) {
				textNodes.push({ node: textNode, original });
				textNode.textContent = "";
			}
			currentNode = walker.nextNode();
		}

		const totalChars = textNodes.reduce((total, item) => total + item.original.length, 0);

		const applyCharCount = (visibleChars: number) => {
			if (totalChars === 0) return;

			let remaining = visibleChars;

			for (const item of textNodes) {
				const count = clamp(remaining, 0, item.original.length);
				item.node.textContent = item.original.slice(0, count);
				remaining -= count;
			}
		};

		const calculateProgress = () => {
			const viewportHeight = window.innerHeight || 1;
			const rect = container.getBoundingClientRect();
			const revealWindow = rect.height + viewportHeight * 0.8;
			const rawProgress = (viewportHeight * 0.92 - rect.top) / Math.max(revealWindow, 1);
			const nearViewport = rect.top < viewportHeight * 1.05 && rect.bottom > viewportHeight * 0.08;
			const progress = clamp(rawProgress, 0, 1);

			// Avoid "all blank" perception when the section is already in view.
			if (nearViewport && progress < 0.1) {
				return 0.1;
			}

			return progress;
		};

		const tick = () => {
			const current = renderedCharsRef.current;
			const target = targetCharsRef.current;
			const delta = target - current;

			if (delta === 0) {
				container.dataset.typingActive = "false";
				rafRef.current = null;
				return;
			}

			// Human-like typing/backspacing speed based on distance.
			const step = Math.max(1, Math.ceil(Math.abs(delta) * 0.08));
			const next = current + Math.sign(delta) * step;
			const bounded = delta > 0 ? Math.min(next, target) : Math.max(next, target);

			renderedCharsRef.current = bounded;
			applyCharCount(bounded);
			container.dataset.typingActive = "true";
			rafRef.current = window.requestAnimationFrame(tick);
		};

		const updateTarget = () => {
			const progress = calculateProgress();
			targetCharsRef.current = Math.floor(totalChars * progress);
			if (!rafRef.current) {
				rafRef.current = window.requestAnimationFrame(tick);
			}
		};

		const onScroll = () => {
			updateTarget();
		};

		targetCharsRef.current = Math.floor(totalChars * calculateProgress());
		renderedCharsRef.current = targetCharsRef.current;
		applyCharCount(renderedCharsRef.current);
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (rafRef.current) {
				window.cancelAnimationFrame(rafRef.current);
			}
			for (const item of textNodes) {
				item.node.textContent = item.original;
			}
		};
	}, []);

	return (
		<div className={className} ref={containerRef} data-typing-active="false">
			{children}
			<span
				className="typing-caret inline-block text-violet-300"
				style={{ marginLeft: "0.2rem" }}
				aria-hidden
			>
				|
			</span>
		</div>
	);
}
