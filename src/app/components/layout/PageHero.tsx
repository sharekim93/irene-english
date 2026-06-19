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
    <section className="bg-[linear-gradient(135deg,#fff,#fff7fb_52%,#eefaff)] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold text-pink-600">{eyebrow}</p>
        <h1
          className={`font-extrabold leading-tight text-gray-950 ${titleClassName ?? "max-w-4xl text-4xl sm:text-5xl"}`}
        >
          {title}
        </h1>
        <p
          className={`mt-6 text-gray-600 ${descriptionClassName ?? "max-w-3xl whitespace-pre-line text-lg leading-8"}`}
        >
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
