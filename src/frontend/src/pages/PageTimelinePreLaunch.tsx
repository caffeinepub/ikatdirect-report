import { PageHeading } from "../components/PageHeading";
const steps = [
  {
    n: 1,
    icon: "📊",
    title: "Research",
    points: ["Market analysis", "Problem identification"],
  },
  {
    n: 2,
    icon: "📝",
    title: "Planning & Design",
    points: ["UI design", "Portal structure"],
  },
  {
    n: 3,
    icon: "💻",
    title: "Development",
    points: ["Website creation", "Feature integration"],
  },
  {
    n: 4,
    icon: "🔍",
    title: "Testing",
    points: ["Error fixing", "Performance check"],
  },
  {
    n: 5,
    icon: "🚀",
    title: "Pre-Launch Setup",
    points: ["Weaver onboarding", "Final preparation"],
  },
];
export function PageTimelinePreLaunch() {
  return (
    <div data-ocid="timeline-prelaunch.page">
      <PageHeading title="Project Time Line – Pre-Launch" />
      <p className="mb-8 font-sans text-sm leading-relaxed text-brown">
        Before launching the IkatDirect platform, several essential activities
        must be completed to ensure smooth implementation and long-term
        sustainability. This is the pre-launch phase where the foundation of the
        project is developed.
      </p>
      <div className="relative mb-8">
        <div className="absolute left-0 right-0 top-10 h-1 rounded-full bg-gradient-to-r from-maroon via-gold to-maroon" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {steps.map((step) => (
            <div key={step.n} className="flex flex-col items-center">
              <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-gold bg-maroon shadow-heritage">
                <span className="text-2xl">{step.icon}</span>
                <span className="font-sans text-xs font-bold text-gold">
                  {step.n}
                </span>
              </div>
              <div className="mt-3 rounded-xl border border-gold/40 bg-cream-dark p-3 text-center shadow-xs">
                <p className="font-serif text-xs font-bold text-maroon">
                  {step.title}
                </p>
                <ul className="mt-1 space-y-0.5">
                  {step.points.map((pt) => (
                    <li key={pt} className="font-sans text-xs text-brown/70">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border-2 border-gold bg-maroon p-5 text-center shadow-heritage">
        <p className="font-sans text-sm font-semibold text-cream-light">
          <span className="font-serif font-bold text-gold">Goal: </span>To
          prepare the platform for a smooth and successful launch.
        </p>
      </div>
    </div>
  );
}
