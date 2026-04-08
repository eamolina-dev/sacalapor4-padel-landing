import { useCallback, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { LocationPage } from "./pages/LocationPage";
import { routes, type PageType } from "./data/content";

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
    window.scrollTo({ top: 0, behavior: "auto" });
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

      if (nextUrl.pathname !== window.location.pathname) {
        window.history.pushState({}, "", nextUrl.pathname);
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

  const isCompactNav = page !== "home";

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar compact={isCompactNav} currentPage={page} />

      {page === "home" && <HomePage />}
      {page === "gallery" && <GalleryPage />}
      {page === "location" && <LocationPage />}
    </main>
  );
}

export default App;
