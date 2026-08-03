type BlankHeroSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function BlankHeroSection({ eyebrow, title, subtitle }: BlankHeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-red-600 text-white">
      <div className="relative isolate aspect-[4/3] min-h-[420px] w-full overflow-hidden bg-red-600 sm:aspect-[16/9] lg:aspect-[16/9] lg:min-h-[580px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-14 text-center sm:px-8 sm:text-left">
          {eyebrow ? (
            <p className="text-sm uppercase tracking-[0.35em] text-red-200">{eyebrow}</p>
          ) : null}
          {title ? (
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
