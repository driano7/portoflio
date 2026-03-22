"use client";

import { useEffect, useMemo, useState } from "react";
import { RefreshCw } from "lucide-react";

type XocoPaymentCardDemoProps = {
  playSequence: boolean;
  cardholder: string;
};

function randomDigits(length: number) {
  let value = "";
  for (let i = 0; i < length; i += 1) {
    value += Math.floor(Math.random() * 10).toString();
  }
  return value;
}

function formatCardNumber(digits: string) {
  return digits.match(/.{1,4}/g)?.join(" ") ?? digits;
}

function buildRandomCardData() {
  const number = formatCardNumber(randomDigits(16));
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const year = String((new Date().getFullYear() + 1 + Math.floor(Math.random() * 6)) % 100).padStart(2, "0");
  const cvv = randomDigits(3);
  return {
    number,
    expiry: `${month}/${year}`,
    cvv,
  };
}

export function XocoPaymentCardDemo({ playSequence, cardholder }: XocoPaymentCardDemoProps) {
  const [cardData, setCardData] = useState(() => buildRandomCardData());
  const [side, setSide] = useState<"back" | "front">("back");
  const [scale, setScale] = useState(1);
  const [typedNumber, setTypedNumber] = useState("");
  const [typedExpiry, setTypedExpiry] = useState("");
  const [typedCvv, setTypedCvv] = useState("");
  const [typedName, setTypedName] = useState("");
  const [sequenceId, setSequenceId] = useState(0);
  const [sequenceDone, setSequenceDone] = useState(false);
  const normalizedCardholder = useMemo(() => cardholder.toUpperCase().slice(0, 19), [cardholder]);

  useEffect(() => {
    if (!playSequence) return;

    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    const typeText = async (fullText: string, setter: (value: string) => void, speedMs: number) => {
      for (let i = 1; i <= fullText.length; i += 1) {
        if (cancelled) return;
        setter(fullText.slice(0, i));
        await sleep(speedMs);
      }
    };

    const nextCardData = buildRandomCardData();

    const run = async () => {
      setCardData(nextCardData);
      setSide("back");
      setScale(1);
      setTypedNumber("");
      setTypedExpiry("");
      setTypedCvv("");
      setTypedName("");
      setSequenceDone(false);

      await sleep(420);
      if (cancelled) return;
      setScale(1.12);

      await sleep(560);
      if (cancelled) return;
      await typeText(nextCardData.number, setTypedNumber, 68);
      await sleep(180);
      await typeText(nextCardData.expiry, setTypedExpiry, 112);
      await sleep(180);
      await typeText(nextCardData.cvv, setTypedCvv, 108);

      await sleep(520);
      if (cancelled) return;
      setScale(0.95);

      await sleep(620);
      if (cancelled) return;
      setSide("front");

      await sleep(900);
      if (cancelled) return;
      setScale(1.07);

      await sleep(380);
      if (cancelled) return;
      await typeText(normalizedCardholder, setTypedName, 78);
      if (cancelled) return;
      setSequenceDone(true);
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [normalizedCardholder, playSequence, sequenceId]);

  const replaySequence = () => {
    setSequenceId((prev) => prev + 1);
  };

  return (
    <div className="relative mx-auto w-full min-h-[240px] sm:min-h-[340px] md:min-h-[560px] flex flex-col items-center justify-center gap-4">
      <div
        className="relative w-full max-w-[340px] aspect-[1.58/1] transition-transform duration-700"
        style={{ transform: `scale(${scale})` }}
      >
        <div
          className="relative h-full w-full transition-transform duration-1000"
          style={{
            transformStyle: "preserve-3d",
            transform: side === "back" ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 p-5 shadow-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <p className="text-[11px] tracking-[0.2em] text-zinc-300">XOCO SUITE</p>
                <div className="text-right">
                  <p className="text-[10px] text-zinc-400">Mastercard</p>
                  <div className="mt-1 flex items-center justify-end -space-x-2">
                    <span className="h-4 w-4 rounded-full bg-[#eb001b]" />
                    <span className="h-4 w-4 rounded-full bg-[#f79e1b]" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-[1.14rem] tracking-[0.11em] leading-tight text-zinc-100 whitespace-nowrap overflow-hidden text-ellipsis">
                  {cardData.number}
                </p>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">Cardholder</p>
                    <p className="mt-1 truncate text-[1.03rem] font-semibold leading-tight text-zinc-100">
                      {typedName}
                      {typedName.length < normalizedCardholder.length ? <span className="typing-caret">|</span> : null}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">Expires</p>
                    <p className="mt-1 font-mono text-[1.02rem] leading-tight text-zinc-100">{cardData.expiry}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-2xl"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="h-full w-full p-4 flex flex-col">
              <div className="h-9 rounded-sm bg-zinc-800/90" />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Card data</p>
                <p className="text-[11px] font-bold tracking-[0.18em] text-zinc-100">VISA</p>
              </div>
              <div className="mt-3 rounded bg-zinc-100/90 px-2 py-1 text-right">
                <p className="font-mono text-sm tracking-[0.22em] text-zinc-900">
                  {typedCvv}
                  {typedCvv.length < cardData.cvv.length ? <span className="typing-caret">|</span> : null}
                </p>
              </div>
              <div className="mt-5 space-y-3 min-w-0">
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-zinc-500">Number</p>
                  <p className="mt-1 font-mono text-[0.96rem] tracking-[0.11em] leading-tight text-zinc-100 break-words">
                    {typedNumber}
                    {typedNumber.length < cardData.number.length ? <span className="typing-caret">|</span> : null}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-zinc-500">Expiry</p>
                  <p className="mt-1 font-mono text-sm tracking-[0.16em] text-zinc-100">
                    {typedExpiry}
                    {typedExpiry.length < cardData.expiry.length ? <span className="typing-caret">|</span> : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {sequenceDone ? (
        <button
          type="button"
          onClick={replaySequence}
          className="xoco-reload-button no-frosted group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-violet-400/35 bg-zinc-900/60 text-zinc-100 transition-transform duration-200 hover:scale-105 hover:border-violet-300/60 active:scale-95 dark:bg-zinc-950/70"
          aria-label="Replay card animation"
        >
          <span className="pointer-events-none absolute inset-0 theme-toggle-gradient" aria-hidden />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
          <RefreshCw className="relative h-4 w-4 text-violet-200" />
        </button>
      ) : null}
    </div>
  );
}
