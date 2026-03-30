import { PageHeading } from "../components/PageHeading";
const feats = [
  {
    icon: "🎥",
    title: "Live Streaming",
    desc: "Real-time product showcasing and interaction",
  },
  {
    icon: "💬",
    title: "Messaging System",
    desc: "Direct communication between customer and weaver",
  },
  {
    icon: "🎓",
    title: "Learning Platform",
    desc: "Learn weaving from expert artisans",
  },
  {
    icon: "🖥",
    title: "Easy Interface",
    desc: "Simple, clean, and user-friendly design",
  },
];
export function PagePlatformFeatures() {
  return (
    <div data-ocid="features.page">
      <PageHeading title="Platform Features" />
      <div className="mb-8 rounded-2xl border border-gold/40 bg-cream-dark p-8 shadow-heritage">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          <div className="rounded-xl border-2 border-gold/60 bg-maroon p-4 shadow-heritage">
            <div className="mb-2 text-3xl">{feats[0].icon}</div>
            <h3 className="font-serif text-sm font-bold text-gold">
              {feats[0].title}
            </h3>
            <p className="mt-1 font-sans text-xs text-cream-light/80">
              {feats[0].desc}
            </p>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-gold bg-maroon shadow-heritage">
              <div className="text-center">
                <p className="font-serif text-xs font-bold leading-tight text-gold">
                  IKAT DIRECT
                </p>
                <p className="font-serif text-xs leading-tight text-cream-light/80">
                  FEATURES
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border-2 border-gold/60 bg-maroon p-4 shadow-heritage">
            <div className="mb-2 text-3xl">{feats[1].icon}</div>
            <h3 className="font-serif text-sm font-bold text-gold">
              {feats[1].title}
            </h3>
            <p className="mt-1 font-sans text-xs text-cream-light/80">
              {feats[1].desc}
            </p>
          </div>
          <div className="rounded-xl border-2 border-gold/60 bg-maroon p-4 shadow-heritage">
            <div className="mb-2 text-3xl">{feats[2].icon}</div>
            <h3 className="font-serif text-sm font-bold text-gold">
              {feats[2].title}
            </h3>
            <p className="mt-1 font-sans text-xs text-cream-light/80">
              {feats[2].desc}
            </p>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <p className="font-sans text-xs text-brown/50">
              Integrated Platform
            </p>
          </div>
          <div className="rounded-xl border-2 border-gold/60 bg-maroon p-4 shadow-heritage">
            <div className="mb-2 text-3xl">{feats[3].icon}</div>
            <h3 className="font-serif text-sm font-bold text-gold">
              {feats[3].title}
            </h3>
            <p className="mt-1 font-sans text-xs text-cream-light/80">
              {feats[3].desc}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
        <p>
          The IkatDirect platform integrates multiple innovative features that
          enhance user experience, improve communication, and promote cultural
          exchange between weavers and customers.
        </p>
        <p>
          <strong className="text-maroon">Live Streaming</strong> allows weavers
          to showcase their products and weaving process in real time, enabling
          customers to view authenticity and make informed purchasing decisions.
        </p>
        <p>
          The <strong className="text-maroon">Messaging System</strong>{" "}
          facilitates direct communication, allowing questions, custom designs,
          and product clarification — improving transparency and trust.
        </p>
        <p>
          The <strong className="text-maroon">Learning Portal</strong> provides
          users with the opportunity to learn weaving techniques directly from
          skilled artisans, preserving traditional weaving skills.
        </p>
      </div>
    </div>
  );
}
