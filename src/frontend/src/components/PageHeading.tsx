export function PageHeading({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h1 className="font-serif text-3xl font-bold uppercase tracking-widest text-maroon">
        {title}
      </h1>
      <div className="mt-3 h-[3px] w-full rounded-full bg-gradient-to-r from-gold via-gold-light to-transparent" />
    </div>
  );
}

export function FeatureBox({
  icon,
  title,
  desc,
}: { icon: string; title: string; desc?: string }) {
  return (
    <div className="rounded-xl border border-gold/40 bg-cream-dark p-4 shadow-xs">
      <div className="mb-1 text-2xl">{icon}</div>
      <div className="font-serif text-sm font-bold text-maroon">{title}</div>
      {desc && <p className="mt-1 font-sans text-xs text-brown/80">{desc}</p>}
    </div>
  );
}
