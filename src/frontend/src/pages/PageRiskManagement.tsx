import { PageHeading } from "../components/PageHeading";
const pairs = [
  { problem: "Digital illiteracy", solution: "Training & awareness programs" },
  { problem: "Technical issues", solution: "Strong technical system" },
  { problem: "Logistics problems", solution: "Delivery partnerships" },
  { problem: "Competition", solution: "Marketing strategies" },
  { problem: "Lack of trust", solution: "Verification & reviews" },
];
export function PageRiskManagement() {
  return (
    <div data-ocid="risk.page">
      <PageHeading title="Risk Management and Solutions" />
      <div className="mb-8 rounded-2xl border border-gold/40 bg-cream-dark p-6 shadow-heritage">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-xl border-2 border-red-700/60 bg-red-900/20 px-4 py-2">
            <p className="font-serif text-sm font-bold text-red-800">
              ⚠ Challenges
            </p>
          </div>
          <span className="text-2xl font-bold text-gold">→</span>
          <div className="rounded-xl border-2 border-maroon bg-maroon px-4 py-2">
            <p className="font-serif text-sm font-bold text-gold">
              ✔ Solutions
            </p>
          </div>
          <span className="text-2xl font-bold text-gold">→</span>
          <div className="rounded-xl border-2 border-green-700/60 bg-green-900/20 px-4 py-2">
            <p className="font-serif text-sm font-bold text-green-800">
              🎯 Success
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {pairs.map((pair) => (
            <div key={pair.problem} className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-red-700/30 bg-red-900/10 px-3 py-2">
                <span className="text-red-700">✗</span>
                <span className="font-sans text-sm text-brown">
                  {pair.problem}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-green-700/30 bg-green-900/10 px-3 py-2">
                <span className="text-green-700">✓</span>
                <span className="font-sans text-sm text-brown">
                  {pair.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
        <p>
          In order to ensure the successful implementation of the IkatDirect
          platform, it is essential to address the identified challenges through
          effective risk management strategies.
        </p>
        <p>
          To overcome the issue of low digital literacy among weavers, training
          programs and awareness workshops can be conducted. Simple tutorials
          and multilingual support can help weavers understand and use the
          platform effectively.
        </p>
        <p>
          Building trust between customers and weavers is crucial. This can be
          achieved by verifying weaver profiles, providing product authenticity
          details, and allowing customer reviews and ratings.
        </p>
      </div>
      <div className="mt-6 rounded-xl border-2 border-gold bg-maroon p-4 text-center shadow-heritage">
        <p className="font-sans text-sm font-semibold text-cream-light">
          Proper risk management ensures smooth functioning and long-term
          sustainability.
        </p>
      </div>
    </div>
  );
}
