import { PageHeading } from "../components/PageHeading";
const infoBoxes = [
  {
    icon: "💰",
    title: "Development Cost",
    items: ["Website creation", "Hosting services", "Maintenance"],
  },
  {
    icon: "📢",
    title: "Marketing",
    items: ["Social media campaigns", "Promotions", "Awareness campaigns"],
  },
  {
    icon: "🏛",
    title: "Government Support",
    items: ["MSME schemes", "Handloom development programs"],
  },
  {
    icon: "💼",
    title: "Other Sources",
    items: ["Bank loans", "Private investors", "Crowdfunding"],
  },
];
export function PageFinance() {
  return (
    <div data-ocid="finance.page">
      <PageHeading title="Finance & Assistance" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify]">
          <p>
            Financial support plays a crucial role in the successful development
            and sustainability of any startup. For the IkatDirect platform,
            adequate funding is required for website development, maintenance,
            marketing, and operational activities.
          </p>
          <p>
            Initially, funds are required for platform development, including
            designing, coding, and testing. Additional expenses include server
            costs, hosting services, and technical tools needed to maintain the
            platform.
          </p>
          <p>
            The startup can also benefit from various financial assistance
            programs provided by the government including MSME support programs,
            startup incubation centers, and handloom development initiatives.
          </p>
          <p>
            Additionally, financial support can be obtained through bank loans,
            private investors, and crowdfunding platforms, helping in expanding
            the platform and improving its features over time.
          </p>
          <p>
            Overall, effective financial management and the utilization of
            available assistance programs are essential for ensuring the growth
            and long-term success of the IkatDirect startup.
          </p>
        </div>
        <div className="space-y-4">
          {infoBoxes.map((box) => (
            <div
              key={box.title}
              className="rounded-xl border border-gold/40 bg-cream-dark p-4 shadow-xs"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{box.icon}</span>
                <h3 className="font-serif text-sm font-bold text-maroon">
                  {box.title}
                </h3>
              </div>
              <ul className="space-y-1">
                {box.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-sans text-xs text-brown"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 rounded-xl border-2 border-gold bg-maroon p-4 text-center shadow-heritage">
        <p className="font-sans text-sm font-semibold text-cream-light">
          <span className="text-gold">★ </span>Proper funding ensures growth and
          sustainability of the startup.
        </p>
      </div>
    </div>
  );
}
