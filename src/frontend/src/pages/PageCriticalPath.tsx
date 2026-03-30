import { PageHeading } from "../components/PageHeading";
const tasks = [
  { id: "A", name: "Planning", duration: "2 wks", critical: false },
  { id: "B", name: "Development", duration: "8 wks", critical: true },
  { id: "C", name: "Testing", duration: "4 wks", critical: true },
  { id: "D", name: "Deployment", duration: "2 wks", critical: true },
];
export function PageCriticalPath() {
  return (
    <div data-ocid="cpm.page">
      <PageHeading title="Critical Path Method" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-4 font-sans text-sm leading-relaxed text-brown [text-align:justify] lg:col-span-2">
          <p>
            The Critical Path Method (CPM) is a project management technique
            used to identify the sequence of tasks that are essential for the
            successful completion of a project, helping determine the most
            important activities that must be completed on time.
          </p>
          <p>
            In the development of the IkatDirect platform, CPM plays a crucial
            role in organizing and managing different stages. Key activities
            such as platform development, system testing, and final deployment
            are considered part of the critical path.
          </p>
          <p>
            By applying CPM, the project team can effectively monitor progress,
            allocate resources efficiently, and avoid unnecessary delays. It
            also helps in identifying non-critical tasks that can be adjusted
            without affecting the overall schedule.
          </p>
        </div>
        <div className="rounded-xl border-2 border-gold bg-maroon p-5 shadow-heritage">
          <h3 className="mb-3 font-serif text-sm font-bold text-gold">
            Definition
          </h3>
          <p className="font-sans text-xs leading-relaxed text-cream-light">
            Critical Path is the sequence of tasks that must be completed on
            time to avoid project delay.
          </p>
          <div className="mt-4 h-px bg-gold/40" />
          <p className="mt-3 font-sans text-xs italic text-gold/80">
            Used in: Construction, Software, Project Management
          </p>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-gold/40 bg-cream-dark p-6 shadow-heritage">
        <h3 className="mb-6 text-center font-serif text-base font-bold text-maroon">
          Critical Path Diagram
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-0">
          {tasks.flatMap((task, i) => [
            <div
              key={task.id}
              className={`flex min-w-[90px] flex-col items-center rounded-xl p-4 shadow-heritage ${task.critical ? "border-2 border-gold bg-maroon" : "border-2 border-gold/40 bg-cream-light"}`}
            >
              <span
                className={`rounded-full px-2 py-0.5 font-sans text-xs font-bold ${task.critical ? "bg-gold text-maroon" : "bg-maroon/20 text-maroon"}`}
              >
                {task.id}
              </span>
              <span
                className={`mt-1 font-serif text-sm font-bold ${task.critical ? "text-cream-light" : "text-maroon"}`}
              >
                {task.name}
              </span>
              <span
                className={`font-sans text-xs ${task.critical ? "text-gold" : "text-brown/60"}`}
              >
                {task.duration}
              </span>
              {task.critical && (
                <span className="mt-1 rounded-full bg-gold/20 px-2 py-0.5 font-sans text-xs text-gold">
                  CRITICAL
                </span>
              )}
            </div>,
            ...(i < tasks.length - 1
              ? [
                  <span
                    key={`arrow-${task.id}`}
                    className="px-2 text-2xl font-bold text-gold"
                  >
                    →
                  </span>,
                ]
              : []),
          ])}
        </div>
      </div>
      <div className="mt-6 rounded-xl border border-gold/60 bg-cream-dark p-4 text-center shadow-xs">
        <p className="font-sans text-sm font-semibold text-maroon">
          ⚠ Delay in any critical activity will delay the entire project.
        </p>
      </div>
    </div>
  );
}
