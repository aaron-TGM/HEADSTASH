"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const DESKTOP_SRC = "/joinheadstash-source-desktop.html";
const MOBILE_SRC = "/joinheadstash-source-mobile.html";
const MOBILE_BREAKPOINT = 768;

export function MockupEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [height, setHeight] = useState(1200);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const src = useMemo(() => (isMobile ? MOBILE_SRC : DESKTOP_SRC), [isMobile]);

  useEffect(() => {
    const frame = iframeRef.current;
    if (!frame) return;

    const updateHeight = () => {
      try {
        const doc = frame.contentWindow?.document;
        if (!doc) return;
        const nextHeight = Math.max(
          doc.body.scrollHeight,
          doc.documentElement.scrollHeight,
        );
        if (nextHeight > 0) setHeight(nextHeight);
      } catch {
        // same-origin on this route, but keep safe fallback
      }
    };

    frame.addEventListener("load", updateHeight);
    const poll = window.setInterval(updateHeight, 500);
    return () => {
      frame.removeEventListener("load", updateHeight);
      window.clearInterval(poll);
    };
  }, [src]);

  return (
    <main
      className="overflow-x-hidden bg-[#0E0E0E]"
      style={{ touchAction: "pan-y" }}
    >
      <iframe
        key={src}
        ref={iframeRef}
        src={src}
        title="Headstash consumer mockup render"
        className="w-full border-0"
        style={{ height, touchAction: "pan-y" }}
      />
    </main>
  );
}
