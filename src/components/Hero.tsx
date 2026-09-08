import type { Dictionary } from "@/dictionaries/en";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" className="pt-16 pb-20 sm:pt-24 md:pt-32">
      <div className="mx-auto grid max-w-(--container-page) grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line py-1.5 ps-2.5 pe-3.5 text-sm text-ink-soft">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-available opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-available" />
            </span>
            {dict.hero.status}
          </div>

          <h1 className="font-display text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[1.02] tracking-tight">
            {dict.hero.name}
          </h1>

          <p className="mt-4 max-w-[34ch] text-[clamp(1.05rem,2vw,1.25rem)] font-medium text-ink-soft">
            {dict.hero.role}
          </p>

          <p className="mt-4 max-w-[30ch] font-display text-[clamp(1.15rem,2.3vw,1.6rem)] font-medium leading-[1.35]">
            {dict.hero.statement}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-[10px] bg-accent px-6 py-3.5 text-sm font-semibold text-[#17130a] transition-transform hover:-translate-y-0.5"
            >
              {dict.hero.ctaWork}
            </a>
            <a
              href="#contact"
              className="rounded-[10px] border border-line px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              {dict.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="relative h-[260px] sm:h-[320px] md:h-[380px]" aria-hidden="true">
          {/* subtle dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              color: "var(--color-line)",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 90%)",
            }}
          />

          <div className="absolute left-0 top-[4%] h-[62%] w-[78%] animate-[float-a_9s_ease-in-out_infinite] rounded-xl border border-line bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
            <FrameChrome dotColor="var(--color-ink-faint)" />
            <FrameInner />
          </div>

          <div className="absolute end-0 top-[30%] h-[56%] w-[68%] animate-[float-b_11s_ease-in-out_infinite] rounded-xl border border-accent/35 bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
            <FrameChrome dotColor="var(--color-accent)" />
            <FrameInner />
          </div>

          <div className="absolute bottom-[2%] start-[14%] h-[40%] w-[50%] animate-[float-c_13s_ease-in-out_infinite] rounded-xl border border-line bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
            <FrameChrome dotColor="var(--color-ink-faint)" />
            <FrameInner />
          </div>

          {/* small orbiting accent dot – a quiet "cursor" touch */}
          <span className="absolute end-[8%] top-[10%] h-2 w-2 animate-[float-c_7s_ease-in-out_infinite] rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}

function FrameChrome({ dotColor }: { dotColor: string }) {
  return (
    <div className="flex h-[30px] items-center gap-[5px] border-b border-line-soft px-3">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: dotColor }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-line)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-line)" }} />
    </div>
  );
}

function FrameInner() {
  return (
    <div
      className="absolute inset-x-4 bottom-4 top-[34px] rounded-md opacity-60"
      style={{
        background: `linear-gradient(var(--color-surface-2) 0 8px, transparent 8px) 0 0/100% 16px repeat-y, var(--color-surface-2)`,
      }}
    />
  );
}
