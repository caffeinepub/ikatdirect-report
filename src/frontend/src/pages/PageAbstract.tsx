import { PageHeading } from "../components/PageHeading";
export function PageAbstract() {
  return (
    <div data-ocid="abstract.page">
      <PageHeading title="Abstract" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-gold/30 bg-cream-dark p-6 shadow-heritage">
          <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
            <p>
              Traditional handloom industries such as Pochampally weaving
              represent a rich cultural heritage of India. However, in recent
              years, these artisans have been facing significant economic and
              social challenges due to the involvement of middlemen, lack of
              direct market access, and limited digital exposure. As a result,
              weavers often receive low profits despite the high value of their
              products.
            </p>
            <p>
              This mini project proposes a digital service platform called{" "}
              <strong className="text-maroon">"IkatDirect"</strong>, which aims
              to establish a direct connection between weavers and customers.
              The platform eliminates intermediaries and enables transparent
              transactions, ensuring fair pricing and better income
              opportunities for artisans.
            </p>
            <p>
              In addition to e-commerce functionality, the platform integrates
              advanced features such as live streaming, real-time messaging, and
              a learning portal. The live streaming feature allows weavers to
              showcase their products and weaving process interactively, similar
              to social media platforms.
            </p>
            <p>
              Overall, this project demonstrates how digital transformation can
              empower traditional industries, improve livelihoods, and create a
              sustainable ecosystem that benefits both producers and consumers.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-2xl border-4 border-gold/60 shadow-heritage">
            <img
              src="/assets/generated/pochampally-saree.dim_600x400.jpg"
              alt="Pochampally Ikat Saree"
              className="h-auto w-full max-w-sm object-cover"
            />
            <p className="bg-maroon px-4 py-2 text-center font-sans text-xs text-gold">
              Authentic Pochampally Ikat Saree
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border-2 border-gold bg-cream-dark p-5 shadow-heritage">
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-lg bg-maroon px-3 py-1.5 font-serif text-sm font-bold text-gold">
            Key Idea
          </div>
          <p className="font-sans text-sm leading-relaxed text-brown">
            Digital platform connecting weavers directly to customers,
            eliminating middlemen and promoting fair trade.
          </p>
        </div>
      </div>
    </div>
  );
}
