import { PageHeading } from "../components/PageHeading";
const challenges = [
  {
    icon: "⚠",
    title: "Digital Gap",
    desc: "Weavers not familiar with technology",
    detail:
      "Many traditional artisans may not be familiar with digital platforms, which can make it difficult for them to use the system effectively.",
  },
  {
    icon: "⚙",
    title: "Technical Issues",
    desc: "Website errors, Internet problems",
    detail:
      "Technical challenges such as website errors, system crashes, or poor internet connectivity in rural areas can affect platform performance.",
  },
  {
    icon: "🚚",
    title: "Logistics",
    desc: "Delivery challenges, Product handling",
    detail:
      "Ensuring timely delivery, maintaining product quality, and handling returns can be complex when dealing with multiple sellers.",
  },
  {
    icon: "🏪",
    title: "Competition",
    desc: "Existing platforms, Market pressure",
    detail:
      "Competing with established e-commerce platforms requires continuous innovation and effective marketing strategies.",
  },
];
export function PageFailures() {
  return (
    <div data-ocid="failures.page">
      <PageHeading title="Failures and Challenges" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {challenges.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border-2 border-gold/50 bg-cream-dark p-6 shadow-heritage"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-xl shadow-heritage">
                {c.icon}
              </span>
              <div>
                <h3 className="font-serif text-base font-bold text-maroon">
                  {c.title}
                </h3>
                <p className="font-sans text-xs text-brown/70">{c.desc}</p>
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-brown">
              {c.detail}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
        <p>
          Every startup faces certain challenges during its development and
          implementation. Identifying these potential failures in advance helps
          in better planning and improves the chances of success.
        </p>
        <p>
          Additionally, trust-building between customers and weavers can be a
          challenge in the initial stages. Customers may hesitate to purchase
          directly from unknown sellers without proper verification systems.
        </p>
      </div>
      <div className="mt-6 rounded-xl border-2 border-gold bg-maroon/10 p-5 shadow-xs">
        <p className="text-center font-sans text-sm font-semibold text-maroon">
          💡 Identifying failures helps in better planning and risk reduction.
        </p>
      </div>
    </div>
  );
}
