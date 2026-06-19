export default function PageHero({
  eyebrow,
  title,
  titleClassName,
  description,
  descriptionClassName,
  children,
}: {
  eyebrow: string;
  title: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-[linear-gradient(135deg,#fff,#fff7fb_52%,#f4fbff)] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold text-pink-600">{eyebrow}</p>
        <h1
          className={`break-keep font-extrabold leading-[1.18] text-gray-950 sm:leading-tight ${titleClassName ?? "max-w-4xl text-[2rem] sm:text-5xl"}`}
        >
          {title}
        </h1>
        <p
          className={`mt-6 break-keep text-gray-600 ${descriptionClassName ?? "max-w-3xl whitespace-pre-line text-base leading-7 sm:text-lg sm:leading-8"}`}
        >
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
