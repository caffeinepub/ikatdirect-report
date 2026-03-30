import { FeatureBox, PageHeading } from "../components/PageHeading";
const weaverFlow = ["Weaver", "Upload", "Display", "Interact", "Sale"];
export function PageWeaverPortal() {
  return (
    <div data-ocid="weaver.page">
      <PageHeading title="Weaver Portal" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border-2 border-gold/60 shadow-heritage">
            <div className="bg-maroon px-4 py-3">
              <p className="font-serif text-sm font-bold text-gold">
                Weaver Dashboard
              </p>
              <p className="font-sans text-xs text-cream-light/70">
                Welcome, Ramaiah G.
              </p>
            </div>
            <div className="bg-cream-light p-4">
              <div className="mb-4 grid grid-cols-3 gap-2">
                {[
                  { v: "12", l: "Products" },
                  { v: "₹48K", l: "Earnings" },
                  { v: "34", l: "Orders" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-lg bg-maroon/10 p-2 text-center"
                  >
                    <p className="font-sans text-sm font-bold text-maroon">
                      {s.v}
                    </p>
                    <p className="font-sans text-xs text-brown/60">{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-gold/40 p-3">
                <p className="mb-2 font-sans text-xs font-bold text-maroon">
                  Upload New Product
                </p>
                <div className="space-y-2">
                  <div className="flex h-7 items-center rounded border border-gold/30 bg-cream-dark px-2">
                    <span className="font-sans text-xs text-brown/40">
                      Saree name...
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex h-7 flex-1 items-center rounded border border-gold/30 bg-cream-dark px-2">
                      <span className="font-sans text-xs text-brown/40">
                        Price ₹
                      </span>
                    </div>
                    <button
                      type="button"
                      className="rounded bg-maroon px-3 py-1 font-sans text-xs text-cream-light"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gold/30 bg-maroon/5 p-3">
            <p className="mb-2 text-center font-sans text-xs font-bold text-maroon">
              Weaver Flow
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {weaverFlow.flatMap((s, i) => [
                <span
                  key={s}
                  className="rounded-lg bg-maroon px-2 py-1 font-sans text-xs text-cream-light"
                >
                  {s}
                </span>,
                ...(i < weaverFlow.length - 1
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
        <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
          <p>
            The Weaver Portal is a crucial component of the IkatDirect platform,
            designed to empower traditional artisans by providing them with
            direct access to the market without intermediaries.
          </p>
          <p>
            Upon logging into the platform as a weaver, users are directed to a
            personalized dashboard where they can upload and manage their
            products with full control over pricing and product information.
          </p>
          <p>
            One of the key advantages of the weaver portal is the ability to
            engage with customers in real time through integrated messaging and
            live streaming features.
          </p>
          <p>
            The portal also provides tools for managing orders and tracking
            customer preferences, enabling weavers to improve their services and
            expand their reach.
          </p>
          <p>
            Overall, the Weaver Portal transforms the role of artisans from
            dependent sellers to independent entrepreneurs in a competitive
            digital marketplace.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <FeatureBox
          icon="📤"
          title="Upload Products"
          desc="Add and manage product listings easily"
        />
        <FeatureBox
          icon="💰"
          title="Set Pricing"
          desc="Full control over your product prices"
        />
        <FeatureBox
          icon="📦"
          title="Manage Orders"
          desc="Track and fulfill customer orders"
        />
        <FeatureBox
          icon="🎥"
          title="Live Interaction"
          desc="Stream your weaving process live"
        />
      </div>
    </div>
  );
}
