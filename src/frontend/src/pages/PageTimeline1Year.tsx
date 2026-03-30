import { PageHeading } from "../components/PageHeading";
const phases = [
  {
    phase: "Phase 1",
    period: "0–3 Months",
    icon: "📊",
    title: "Research & Planning",
    points: ["Problem study", "Idea development", "Design planning"],
  },
  {
    phase: "Phase 2",
    period: "3–6 Months",
    icon: "💻",
    title: "Development Phase",
    points: ["Website creation", "Portal development", "Feature integration"],
  },
  {
    phase: "Phase 3",
    period: "6–9 Months",
    icon: "🔍",
    title: "Testing Phase",
    points: ["Debugging", "Performance testing", "Improvements"],
  },
  {
    phase: "Phase 4",
    period: "9–12 Months",
    icon: "🚀",
    title: "Launch Phase",
    points: ["Deployment", "User onboarding", "Market introduction"],
  },
];
export function PageTimeline1Year() {
  return (
    <div data-ocid="timeline-1year.page">
      <PageHeading title="Project Time Line – 1 Year Plan" />
      <p className="mb-8 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
        To ensure the successful implementation of the IkatDirect platform, the
        project follows a structured timeline divided over a period of 6–12
        months, allowing for systematic development, testing, and deployment.
      </p>
      <div className="space-y-4">
        {phases.map((phase, i) => (
          <div
            key={phase.phase}
            className="flex flex-col overflow-hidden rounded-xl border border-gold/40 shadow-heritage sm:flex-row"
          >
            <div className="flex w-full flex-col items-center justify-center bg-maroon p-4 sm:w-40">
              <span className="text-3xl">{phase.icon}</span>
              <p className="mt-1 font-serif text-sm font-bold text-gold">
                {phase.phase}
              </p>
              <p className="font-sans text-xs text-cream-light/70">
                {phase.period}
              </p>
            </div>
            <div className="flex flex-1 items-center gap-6 bg-cream-dark p-4">
              <div>
                <h3 className="font-serif text-base font-bold text-maroon">
                  {phase.title}
                </h3>
                <ul className="mt-2 space-y-1">
                  {phase.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 font-sans text-sm text-brown"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto hidden flex-col items-end gap-1 sm:flex">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-maroon/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-maroon to-gold"
                    style={{ width: `${(i + 1) * 25}%` }}
                  />
                </div>
                <p className="font-sans text-xs text-brown/50">
                  {(i + 1) * 25}% Complete
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border-2 border-gold bg-maroon p-4 text-center shadow-heritage">
        <p className="font-sans text-sm font-semibold text-cream-light">
          <span className="font-serif font-bold text-gold">
            Total Project Duration:{" "}
          </span>
          6–12 Months (1 Year)
        </p>
      </div>
    </div>
  );
}
