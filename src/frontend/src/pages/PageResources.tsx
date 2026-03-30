import { PageHeading } from "../components/PageHeading";
const boxes = [
  {
    icon: "👨‍💻",
    title: "Human Resources",
    cls: "border-green-700/40 bg-green-900/10",
    tc: "text-green-800",
    items: ["Web Developers", "UI/UX Designers", "Support Team"],
  },
  {
    icon: "💻",
    title: "Technical Resources",
    cls: "border-blue-700/40 bg-blue-900/10",
    tc: "text-blue-900",
    items: ["Website & App", "Web Servers", "Database", "Hosting Services"],
  },
  {
    icon: "📊",
    title: "Data / Material",
    cls: "border-gold/60 bg-cream-dark",
    tc: "text-maroon",
    items: ["Weaver Details", "Product Data & Images", "Pricing Information"],
  },
  {
    icon: "💰",
    title: "Financial Resources",
    cls: "border-gold/60 bg-gold/10",
    tc: "text-maroon",
    items: ["Development Cost", "Maintenance Budget", "Marketing Fund"],
  },
];
export function PageResources() {
  return (
    <div data-ocid="resources.page">
      <PageHeading title="Main Money Material / Resources" />
      <div className="mb-6 text-center">
        <span className="rounded-full border-2 border-gold bg-maroon px-6 py-2 font-serif text-sm font-bold text-gold shadow-heritage">
          RESOURCES REQUIRED FOR IKATDIRECT
        </span>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {boxes.map((box) => (
          <div
            key={box.title}
            className={`rounded-2xl border-2 p-6 shadow-heritage ${box.cls}`}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl">{box.icon}</span>
              <h3 className={`font-serif text-base font-bold ${box.tc}`}>
                {box.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {box.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-sans text-sm text-brown"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
        <p>
          The successful development and implementation of the IkatDirect
          platform requires various resources categorized into human, technical,
          and material components, all playing a vital role in ensuring smooth
          functioning.
        </p>
        <p>
          Effective utilization of these resources is essential for building a
          strong digital platform. Proper allocation and management of financial
          resources ensure the long-term sustainability of the startup.
        </p>
      </div>
      <div className="mt-6 rounded-xl border border-gold/60 bg-cream-dark p-4 text-center shadow-xs">
        <p className="font-sans text-sm font-semibold text-maroon">
          ✅ Efficient resource management ensures project success.
        </p>
      </div>
    </div>
  );
}
