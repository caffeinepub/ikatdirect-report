export const PAGE_TITLES = [
  "Abstract",
  "Introduction",
  "Synopsis",
  "Website Prototype",
  "Customer Portal",
  "Weaver Portal",
  "Platform Features",
  "Timeline: Pre-Launch",
  "Timeline: 1 Year Plan",
  "Critical Path Method",
  "Resources",
  "Finance & Assistance",
  "Failures & Challenges",
  "Risk Management",
  "Future Scope",
  "Conclusion",
];

interface Props {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (p: number) => void;
  pageTitle: string;
}

export function Navigation({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onGoTo,
}: Props) {
  return (
    <nav
      data-ocid="nav.panel"
      className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b border-gold/40 bg-maroon px-4 shadow-heritage"
    >
      <div className="flex items-center gap-1">
        <span className="font-serif text-lg font-bold tracking-wider text-gold">
          IKAT
        </span>
        <span className="font-serif text-lg font-bold tracking-wider text-cream-light">
          DIRECT
        </span>
      </div>
      <select
        data-ocid="nav.select"
        value={currentPage}
        onChange={(e) => onGoTo(Number(e.target.value))}
        className="rounded border border-gold/40 bg-maroon-dark px-2 py-1 font-sans text-xs text-cream-light focus:outline-none focus:ring-1 focus:ring-gold"
      >
        {PAGE_TITLES.map((t, i) => (
          <option key={t} value={i + 1}>
            {i + 1}. {t}
          </option>
        ))}
      </select>
      <div className="flex items-center gap-3">
        <button
          type="button"
          data-ocid="nav.pagination_prev"
          onClick={onPrev}
          disabled={currentPage === 1}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ◀
        </button>
        <span className="font-sans text-xs text-cream-dark">
          {currentPage} / {totalPages}
        </span>
        <button
          type="button"
          data-ocid="nav.pagination_next"
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ▶
        </button>
      </div>
    </nav>
  );
}
