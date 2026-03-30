import { FeatureBox, PageHeading } from "../components/PageHeading";
const products = [
  { name: "Pochampally Silk Saree", price: "₹4,500", tag: "Premium" },
  { name: "Ikat Cotton Saree", price: "₹2,200", tag: "Bestseller" },
  { name: "Double Ikat Saree", price: "₹8,900", tag: "Heritage" },
];
const flowSteps = ["Customer", "Browse", "Select", "Chat", "Purchase"];
export function PageCustomerPortal() {
  return (
    <div data-ocid="customer.page">
      <PageHeading title="Customer Portal" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
          <p>
            The Customer Portal in the IkatDirect platform is designed to
            provide a seamless and interactive shopping experience for users who
            wish to purchase authentic Pochampally sarees directly from weavers.
          </p>
          <p>
            After logging into the platform as a customer, users are directed to
            a personalized dashboard where they can browse a wide range of
            sarees categorized based on design, color, and price.
          </p>
          <p>
            One of the key features of the customer portal is the ability to
            directly interact with weavers. Through integrated messaging and
            live streaming options, customers can ask questions and observe the
            weaving process in real time.
          </p>
          <p>
            Additionally, the portal includes a learning section, where users
            can enroll in courses or tutorials related to weaving techniques,
            promoting cultural awareness and skill development.
          </p>
          <p>
            The Customer Portal is designed to ensure a smooth, transparent, and
            enriching experience, bridging the gap between traditional
            craftsmanship and modern digital consumers.
          </p>
        </div>
        <div className="space-y-3">
          <p className="font-serif text-sm font-semibold text-maroon">
            Product Listings
          </p>
          {products.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-4 rounded-xl border border-gold/40 bg-cream-dark p-4 shadow-xs"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-maroon/10 text-2xl">
                🧣
              </div>
              <div className="flex-1">
                <p className="font-sans text-sm font-semibold text-brown">
                  {p.name}
                </p>
                <p className="font-sans text-xs text-brown/60">
                  Direct from verified weaver
                </p>
              </div>
              <div className="text-right">
                <p className="font-sans text-sm font-bold text-maroon">
                  {p.price}
                </p>
                <span className="rounded-full bg-gold/20 px-2 py-0.5 font-sans text-xs text-gold-dark">
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
          <div className="mt-2 rounded-xl border border-gold/30 bg-maroon/5 p-3">
            <p className="mb-2 text-center font-sans text-xs font-bold text-maroon">
              Customer Flow
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {flowSteps.flatMap((s, i) => [
                <span
                  key={s}
                  className="rounded-lg bg-maroon px-2 py-1 font-sans text-xs text-cream-light"
                >
                  {s}
                </span>,
                ...(i < flowSteps.length - 1
                  ? [
                      <span key={`arrow-${s}`} className="text-gold">
                        →
                      </span>,
                    ]
                  : []),
              ])}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <FeatureBox
          icon="🔍"
          title="Browse Products"
          desc="Explore sarees by design, color, price"
        />
        <FeatureBox
          icon="🛒"
          title="Direct Purchase"
          desc="Buy directly from verified weavers"
        />
        <FeatureBox
          icon="📡"
          title="Live Interaction"
          desc="Watch live demos and chat with weavers"
        />
        <FeatureBox
          icon="🎓"
          title="Learning Access"
          desc="Enroll in weaving technique courses"
        />
      </div>
    </div>
  );
}
