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
const TYPING_SPEED_CHARS_PER_SECOND = 92;

export function ScrollTyping({ children, className }: ScrollTypingProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const renderedCharsRef = useRef(0);
	const rafRef = useRef<number | null>(null);
	const lastFrameRef = useRef(0);
	const carryRef = useRef(0);

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

		const tick = (timestamp: number) => {
			if (lastFrameRef.current === 0) {
				lastFrameRef.current = timestamp;
			}

			const elapsedSeconds = (timestamp - lastFrameRef.current) / 1000;
			lastFrameRef.current = timestamp;
			carryRef.current += elapsedSeconds * TYPING_SPEED_CHARS_PER_SECOND;

			const nextChars = Math.floor(carryRef.current);
			if (nextChars <= 0) {
				rafRef.current = window.requestAnimationFrame(tick);
				return;
			}

			carryRef.current -= nextChars;
			renderedCharsRef.current = clamp(renderedCharsRef.current + nextChars, 0, totalChars);
			applyCharCount(renderedCharsRef.current);

			if (renderedCharsRef.current >= totalChars) {
				container.dataset.typingActive = "false";
				rafRef.current = null;
				return;
			}

			container.dataset.typingActive = "true";
			rafRef.current = window.requestAnimationFrame(tick);
		};

		renderedCharsRef.current = 0;
		lastFrameRef.current = 0;
		carryRef.current = 0;
		applyCharCount(0);
		container.dataset.typingActive = totalChars > 0 ? "true" : "false";
		rafRef.current = window.requestAnimationFrame(tick);

		return () => {
			if (rafRef.current) {
				window.cancelAnimationFrame(rafRef.current);
			}
			for (const item of textNodes) {
				item.node.textContent = item.original;
			}
		};
	}, [children]);

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
