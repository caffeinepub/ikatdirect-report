import { useState } from "react";
import { Navigation, PAGE_TITLES } from "./components/Navigation";
import { PageAbstract } from "./pages/PageAbstract";
import { PageConclusion } from "./pages/PageConclusion";
import { PageCriticalPath } from "./pages/PageCriticalPath";
import { PageCustomerPortal } from "./pages/PageCustomerPortal";
import { PageFailures } from "./pages/PageFailures";
import { PageFinance } from "./pages/PageFinance";
import { PageFutureScope } from "./pages/PageFutureScope";
import { PageIntroduction } from "./pages/PageIntroduction";
import { PagePlatformFeatures } from "./pages/PagePlatformFeatures";
import { PageResources } from "./pages/PageResources";
import { PageRiskManagement } from "./pages/PageRiskManagement";
import { PageSynopsis } from "./pages/PageSynopsis";
import { PageTimeline1Year } from "./pages/PageTimeline1Year";
import { PageTimelinePreLaunch } from "./pages/PageTimelinePreLaunch";
import { PageWeaverPortal } from "./pages/PageWeaverPortal";
import { PageWebsitePrototype } from "./pages/PageWebsitePrototype";

const TOTAL_PAGES = 16;

const PAGES = [
  <PageAbstract key="abstract" />,
  <PageIntroduction key="intro" />,
  <PageSynopsis key="synopsis" />,
  <PageWebsitePrototype key="prototype" />,
  <PageCustomerPortal key="customer" />,
  <PageWeaverPortal key="weaver" />,
  <PagePlatformFeatures key="features" />,
  <PageTimelinePreLaunch key="tl-pre" />,
  <PageTimeline1Year key="tl-1y" />,
  <PageCriticalPath key="cpm" />,
  <PageResources key="resources" />,
  <PageFinance key="finance" />,
  <PageFailures key="failures" />,
  <PageRiskManagement key="risk" />,
  <PageFutureScope key="future" />,
  <PageConclusion key="conclusion" />,
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const goTo = (page: number) => {
    const clamped = Math.max(1, Math.min(TOTAL_PAGES, page));
    setCurrentPage(clamped);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        pageTitle={PAGE_TITLES[currentPage - 1]}
        onPrev={() => goTo(currentPage - 1)}
        onNext={() => goTo(currentPage + 1)}
        onGoTo={goTo}
      />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-20">
        <div className="mb-6 flex items-center justify-between rounded-xl border border-gold/30 bg-maroon/5 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-maroon font-sans text-xs font-bold text-gold">
              {currentPage}
            </span>
            <span className="font-serif text-sm font-semibold text-maroon">
              {PAGE_TITLES[currentPage - 1]}
            </span>
          </div>
          <span className="font-sans text-xs text-brown/50">
            IkatDirect — Digital Project Report
          </span>
        </div>

        <div className="rounded-2xl bg-cream-light p-8 shadow-heritage">
          {PAGES[currentPage - 1]}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            data-ocid="footer.pagination_prev"
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-2 rounded-xl border border-gold/50 bg-cream-dark px-5 py-2.5 font-sans text-sm font-semibold text-maroon shadow-xs transition hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ◀ Previous
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            {PAGE_TITLES.map((title, i) => (
              <button
                key={title}
                type="button"
                data-ocid={`page.item.${i + 1}`}
                onClick={() => goTo(i + 1)}
                className={`h-2 rounded-full transition-all ${
                  i + 1 === currentPage
                    ? "w-6 bg-maroon"
                    : "w-2 bg-gold/40 hover:bg-gold"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            data-ocid="footer.pagination_next"
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === TOTAL_PAGES}
            className="flex items-center gap-2 rounded-xl border border-gold/50 bg-cream-dark px-5 py-2.5 font-sans text-sm font-semibold text-maroon shadow-xs transition hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next ▶
          </button>
        </div>

        <footer className="mt-12 border-t border-gold/30 pt-6 text-center">
          <p className="font-sans text-xs text-brown/50">
            © {new Date().getFullYear()}. Built with ❤ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="text-maroon underline hover:text-gold"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
