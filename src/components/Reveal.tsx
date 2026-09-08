"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.setAttribute(stagger ? "data-reveal-stagger" : "data-reveal", "visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger]);

  return (
    <Tag
      ref={ref}
      className={className}
      {...(stagger ? { "data-reveal-stagger": "hidden" } : { "data-reveal": "hidden" })}
    >
      {children}
    </Tag>
  );
}
