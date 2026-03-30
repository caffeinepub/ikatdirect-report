import { FeatureBox, PageHeading } from "../components/PageHeading";
export function PageWebsitePrototype() {
  return (
    <div data-ocid="prototype.page">
      <PageHeading title="Website Prototype" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
          <p>
            The IkatDirect platform is designed as a user-friendly and
            interactive web-based application that connects customers and
            weavers through a structured digital interface. The website serves
            as the core component of the startup, enabling seamless
            communication, product browsing, and transactions.
          </p>
          <p>
            The platform begins with a login interface, where users are required
            to select their role as either a Customer or a Weaver. Based on this
            selection, the system redirects users to their respective
            dashboards.
          </p>
          <p>
            The website is designed using modern web technologies with a focus
            on simplicity, accessibility, and visual appeal. The interface
            incorporates a clean layout, intuitive navigation, and categorized
            product sections to enhance usability.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm overflow-hidden rounded-2xl border-2 border-gold/60 shadow-heritage">
            <div className="flex items-center gap-2 bg-maroon-dark px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 flex-1 rounded bg-maroon/40 px-2 py-0.5 font-sans text-xs text-cream-light/60">
                ikatdirect.com/login
              </span>
            </div>
            <div className="bg-cream-light p-6 text-center">
              <p className="font-serif text-xl font-bold text-maroon">IKAT</p>
              <p className="font-serif text-xl font-bold text-gold">DIRECT</p>
              <p className="mt-1 font-sans text-xs text-brown/60">
                Connecting Weavers to the World
              </p>
              <div className="my-4 h-px bg-gold/40" />
              <p className="mb-4 font-sans text-sm font-semibold text-maroon">
                Select Your Role
              </p>
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full rounded-lg border-2 border-maroon bg-maroon px-4 py-3 font-sans text-sm font-semibold text-cream-light"
                >
                  🛍 Customer
                </button>
                <button
                  type="button"
                  className="w-full rounded-lg border-2 border-gold bg-cream-dark px-4 py-3 font-sans text-sm font-semibold text-maroon"
                >
                  🧵 Weaver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <FeatureBox
          icon="🔐"
          title="Login System"
          desc="Role-based access for customers and weavers"
        />
        <FeatureBox
          icon="📊"
          title="User Dashboard"
          desc="Personalized portal for each user type"
        />
        <FeatureBox
          icon="🖼"
          title="Product Display"
          desc="Browse authentic sarees with full details"
        />
        <FeatureBox
          icon="✨"
          title="Interactive UI"
          desc="Modern, responsive and intuitive interface"
        />
      </div>
    </div>
  );
}
