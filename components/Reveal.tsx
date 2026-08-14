"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One restrained entrance: content fades and rises 12px the first time it
 * enters view, then never animates again. Below the fold only — nothing above
 * it is ever held at opacity 0, which would push Largest Contentful Paint out
 * by the whole duration. The audit scored this site 100/100 on speed and told
 * them to protect it, so the rebuild spends its JavaScript budget carefully.
 * prefers-reduced-motion is handled in CSS and opts out completely.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
