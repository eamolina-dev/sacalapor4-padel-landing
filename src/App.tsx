import { useCallback, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { routes, type PageType } from "./data/content";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Location } from "./pages/Location";

function getPageFromPath(pathname: string): PageType {
  if (pathname === routes.gallery) {
    return "gallery";
  }

  if (pathname === routes.location) {
    return "location";
  }

  return "home";
}

function shouldHandleAsSpaNavigation(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) {
    return false;
  }

  if (anchor.target === "_blank" || anchor.hasAttribute("download")) {
    return false;
  }

  const url = new URL(anchor.href, window.location.origin);
  if (url.origin !== window.location.origin) {
    return false;
  }

  return [routes.home, routes.gallery, routes.location].includes(url.pathname);
}

function App() {
  const [page, setPage] = useState<PageType>(() =>
    getPageFromPath(window.location.pathname),
  );

  const navigateToCurrentPath = useCallback(() => {
    setPage(getPageFromPath(window.location.pathname));

    requestAnimationFrame(() => {
      if (window.location.hash) {
        const sectionId = window.location.hash.replace("#", "");
        const target = document.getElementById(sectionId);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      navigateToCurrentPath();
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor || !shouldHandleAsSpaNavigation(anchor)) {
        return;
      }

      event.preventDefault();
      const nextUrl = new URL(anchor.href, window.location.origin);
      const nextPathWithHash = `${nextUrl.pathname}${nextUrl.hash}`;
      const currentPathWithHash = `${window.location.pathname}${window.location.hash}`;

      if (nextPathWithHash !== currentPathWithHash) {
        window.history.pushState({}, "", nextPathWithHash);
      }

      navigateToCurrentPath();
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [navigateToCurrentPath]);

  return (
    <main className="min-h-screen bg-[#102a43] text-slate-800">
      <Navbar currentPage={page} />

      {page === "home" && <Home />}
      {page === "gallery" && <Gallery />}
      {page === "location" && <Location />}
    </main>
  );
}

export default App;
