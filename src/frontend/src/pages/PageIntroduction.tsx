import { PageHeading } from "../components/PageHeading";
export function PageIntroduction() {
  return (
    <div data-ocid="introduction.page">
      <PageHeading title="Introduction" />
      <div className="mb-6 space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
        <p>
          Urban environments and traditional industries are both undergoing
          rapid transformation due to technological advancements and changing
          market dynamics. While cities are becoming more digitized, many
          traditional sectors such as handloom weaving still rely on outdated
          systems of production and distribution.
        </p>
        <p>
          Pochampally weaving is not only an economic activity but also a
          representation of cultural identity and craftsmanship. Despite the
          effort involved, weavers often receive minimal financial returns due
          to the dominance of middlemen in the supply chain.
        </p>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
          <p>
            In today’s digital era, technology provides an opportunity to bridge
            this gap by creating direct and transparent systems. Digital
            platforms have transformed industries such as retail, education, and
            communication by enabling direct access and interaction.
          </p>
          <p>
            This project introduces{" "}
            <strong className="text-maroon">IkatDirect</strong>, a digital
            platform designed to connect weavers directly with customers,
            ensuring better pricing, authenticity, and accessibility.
          </p>
          <p>
            The introduction of such a platform not only supports economic
            growth but also contributes to the preservation of traditional
            crafts by combining technology with heritage.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-2xl border-4 border-gold/60 shadow-heritage">
            <img
              src="/assets/generated/weaver-loom.dim_600x400.jpg"
              alt="Weaver at Loom"
              className="h-auto w-full max-w-xs object-cover"
            />
            <p className="bg-maroon px-4 py-2 text-center font-sans text-xs text-gold">
              Traditional Pochampally Weaver at Work
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-gold/40 bg-cream-dark p-6 shadow-heritage">
        <h3 className="mb-6 text-center font-serif text-lg font-bold text-maroon">
          Problems in Handloom Industry
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            { icon: "🔗", label: "Middlemen" },
            { icon: "📉", label: "Low Profit" },
            { icon: "🚫", label: "No Direct Market" },
            { icon: "📵", label: "Lack of Digital Exposure" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl border-2 border-gold/60 bg-maroon px-5 py-4 shadow-heritage"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-sans text-xs font-semibold text-cream-light">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
