export function SectionHeading({
  number,
  eyebrow,
  title,
  copy,
}: {
  number: string;
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {eyebrow}
        </p>
        <h2 className="section-title">{title}</h2>
      </div>
      {copy && <p className="max-w-xl text-base leading-7 text-muted md:justify-self-end">{copy}</p>}
    </div>
  );
}
