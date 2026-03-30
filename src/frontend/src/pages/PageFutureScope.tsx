import { PageHeading } from "../components/PageHeading";
const features = [
  {
    icon: "🌍",
    title: "Global Expansion",
    desc: "International market access and worldwide customers through global shipping.",
  },
  {
    icon: "🤖",
    title: "AI Recommendation",
    desc: "Personalized product suggestions and smart shopping using AI algorithms.",
  },
  {
    icon: "👗",
    title: "Virtual Try-On",
    desc: "Try sarees digitally using AR/VR for better purchase decisions.",
  },
  {
    icon: "🧭",
    title: "Handloom Tourism",
    desc: "Visit weaving centers for cultural experiences and direct artisan interaction.",
  },
  {
    icon: "🎓",
    title: "Advanced Learning",
    desc: "Certified courses, workshops, and institutional collaborations.",
  },
];
export function PageFutureScope() {
  return (
    <div data-ocid="future.page">
      <PageHeading title="Future Scope" />
      <div className="mb-8 text-center">
        <span className="rounded-full border-2 border-gold bg-maroon px-6 py-2 font-serif text-sm font-bold text-gold shadow-heritage">
          FUTURE OF IKATDIRECT
        </span>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border-2 border-gold/50 bg-cream-dark p-6 shadow-heritage transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-2xl shadow-heritage">
              {f.icon}
            </div>
            <h3 className="mb-2 font-serif text-base font-bold text-maroon">
              {f.title}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-brown">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
        <p>
          The IkatDirect platform has significant potential for future growth
          and expansion. As the demand for authentic and handmade products
          continues to increase, the platform can evolve into a larger digital
          marketplace supporting artisans from different regions.
        </p>
        <p>
          The learning platform can also be expanded by offering certified
          courses, workshops, and collaborations with institutions, making it a
          hub for skill development and cultural knowledge sharing.
        </p>
      </div>
    </div>
  );
}
