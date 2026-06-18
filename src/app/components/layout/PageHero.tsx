export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-[linear-gradient(135deg,#fff,#fff7fb_52%,#eefaff)] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold text-pink-600">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-gray-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-8 text-gray-600">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
