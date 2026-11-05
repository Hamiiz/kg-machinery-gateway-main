import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logo from "@/assets/kg-logo.png";
import logoLight from "@/assets/kg-logo-light.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/transport", label: "Land Transportation" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const transparent = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={transparent ? "bg-transparent" : "bg-forest text-forest-foreground"}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <span className={`inline-flex items-center gap-2 ${transparent ? "text-cream/90" : ""}`}>
            <MapPin className="size-4" aria-hidden="true" />
            Addis Ababa, Ethiopia
          </span>
          <a
            className={`inline-flex items-center gap-2 hover:underline ${transparent ? "text-cream/90" : ""}`}
            href="tel:+251993936962"
          >
            <Phone className="size-4" aria-hidden="true" />
            +251 993 936 962
          </a>
        </div>
      </div>

      <div
        className={
          transparent
            ? "bg-transparent"
            : "border-b border-border bg-background/95 backdrop-blur"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center" aria-label="Kefyalew Girma home">
            <img
              src={transparent ? logoLight : logo}
              alt="Kefyalew Girma Machinery Rental & Land Transport"
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: transparent
                    ? "bg-white/15 text-cream"
                    : "bg-secondary text-foreground",
                }}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  transparent
                    ? "text-cream/90 hover:bg-white/10 hover:text-cream"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className={`hidden rounded-md px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 sm:inline-flex ${
                transparent
                  ? "border border-cream/40 text-cream hover:bg-cream/10"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Request a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className={`grid size-11 place-items-center rounded-md border lg:hidden ${
                transparent ? "border-cream/40 text-cream" : "border-border"
              }`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
            <div className="mx-auto flex max-w-7xl flex-col p-3">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-semibold text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
