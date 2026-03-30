import { PageHeading } from "../components/PageHeading";
const objectives = [
  "To create a user-friendly digital platform for direct interaction between weavers and customers",
  "To eliminate intermediaries and improve profit margins for weavers",
  "To provide customers with authentic and high-quality Pochampally sarees",
  "To integrate features such as live streaming and messaging for better engagement",
  "To develop a learning platform where users can learn weaving techniques from skilled artisans",
  "To promote and sustain traditional handloom industries through digital transformation",
];
const steps = [
  { n: "01", title: "Research", desc: "Problem ID" },
  { n: "02", title: "Design", desc: "Planning" },
  { n: "03", title: "Development", desc: "Features" },
  { n: "04", title: "Testing", desc: "Validation" },
  { n: "05", title: "Launch", desc: "Deploy" },
];
export function PageSynopsis() {
  return (
    <div data-ocid="synopsis.page">
      <PageHeading title="Synopsis" />
      <div className="mb-6 rounded-xl bg-maroon p-6 shadow-heritage">
        <h2 className="mb-3 font-serif text-lg font-bold uppercase tracking-wider text-gold">
          Aim of the Project
        </h2>
        <p className="font-sans text-sm leading-relaxed text-cream-light [text-align:justify]">
          The aim of this project is to develop a digital service platform
          called <strong className="text-gold">IkatDirect</strong> that connects
          Pochampally weavers directly with customers. The platform is designed
          to eliminate middlemen, ensure fair pricing, and promote transparency
          in the handloom market. Additionally, it aims to preserve traditional
          weaving practices by integrating modern technology with cultural
          heritage.
        </p>
      </div>
      <div className="mb-6 rounded-xl border border-gold/40 bg-cream-dark p-6 shadow-xs">
        <h2 className="mb-4 font-serif text-lg font-bold uppercase tracking-wider text-maroon">
          Objectives
        </h2>
        <ul className="space-y-2">
          {objectives.map((obj) => (
            <li
              key={obj}
              className="flex items-start gap-3 font-sans text-sm text-brown"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maroon text-xs font-bold text-gold">
                {objectives.indexOf(obj) + 1}
              </span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-gold/40 bg-cream-light p-6 shadow-xs">
        <h2 className="mb-6 font-serif text-lg font-bold uppercase tracking-wider text-maroon">
          Methodology
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-0">
          {steps.flatMap((step, i) => [
            <div
              key={step.n}
              className="flex flex-col items-center rounded-xl border-2 border-gold/60 bg-maroon px-4 py-4 shadow-heritage"
            >
              <span className="mb-1 font-sans text-xs text-gold/70">
                {step.n}
              </span>
              <span className="font-serif text-sm font-bold text-cream-light">
                {step.title}
              </span>
              <span className="mt-0.5 font-sans text-xs text-cream-dark/80">
                {step.desc}
              </span>
            </div>,
            ...(i < steps.length - 1
              ? [
                  <span
                    key={`arrow-${step.n}`}
                    className="px-2 text-xl text-gold"
                  >
                    →
                  </span>,
                ]
              : []),
          ])}
        </div>
      </div>
    </div>
  );
}
