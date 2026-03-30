import { PageHeading } from "../components/PageHeading";
export function PageConclusion() {
  return (
    <div data-ocid="conclusion.page">
      <PageHeading title="Conclusion" />
      <div className="mb-8 space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
        <p>
          The IkatDirect platform presents a practical and innovative solution
          to the challenges faced by traditional Pochampally weavers. By
          leveraging digital technology, the project successfully addresses the
          issues of middlemen, lack of market access, and limited communication
          between producers and consumers.
        </p>
        <p>
          Through the development of a user-friendly digital platform, the
          project enables direct interaction between weavers and customers,
          ensuring transparency, fair pricing, and authenticity. The inclusion
          of advanced features such as live streaming, messaging, and a learning
          portal further enhances the functionality of the platform.
        </p>
        <p>
          The project also highlights the importance of integrating technology
          with traditional industries to promote sustainability and economic
          growth. By empowering weavers and providing them with direct market
          access, the platform contributes to improving their livelihoods and
          preserving cultural heritage.
        </p>
        <p>
          In addition, the structured approach involving timeline planning,
          critical path method, resource management, and risk analysis
          demonstrates the feasibility and scalability of the startup.
        </p>
        <p>
          Overall, IkatDirect serves as a model for how digital platforms can
          transform traditional sectors, creating opportunities for growth,
          innovation, and cultural preservation. The project reflects a balance
          between modern technology and traditional craftsmanship, making it a
          meaningful and impactful startup initiative.
        </p>
      </div>
      <div className="mb-8 flex justify-center">
        <div className="overflow-hidden rounded-2xl border-4 border-gold/60 shadow-heritage">
          <img
            src="/assets/generated/pochampally-saree.dim_600x400.jpg"
            alt="Pochampally Saree"
            className="h-48 w-auto max-w-full object-cover"
          />
        </div>
      </div>
      <div className="rounded-2xl border-2 border-gold bg-maroon p-6 text-center shadow-heritage">
        <p className="font-serif text-lg font-bold italic text-gold">
          &ldquo;Empowering Weavers, Preserving Culture, and Connecting the
          World.&rdquo;
        </p>
        <p className="mt-2 font-sans text-xs text-cream-light/70">
          — IkatDirect Mission
        </p>
      </div>
    </div>
  );
}
