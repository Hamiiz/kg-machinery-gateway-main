import { Link } from "@tanstack/react-router";
import logo from "@/assets/kg-logo.png";

export function Footer() {
  return (
    <footer className="relative z-10 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="inline-flex rounded-md bg-cream p-2">
            <img
              src={logo}
              alt="Kefyalew Girma Machinery Rental & Land Transport"
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/70">
            Machinery Rental & Land Transport. Excavators, wheel loaders, dump trucks and
            lowbed haulage for construction projects across Ethiopia.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-cream/80 hover:text-cream">Home</Link></li>
            <li><Link to="/fleet" className="text-cream/80 hover:text-cream">Our Fleet</Link></li>
            <li><Link to="/transport" className="text-cream/80 hover:text-cream">Land Transportation</Link></li>
            <li><Link to="/about" className="text-cream/80 hover:text-cream">About Us</Link></li>
            <li><Link to="/contact" className="text-cream/80 hover:text-cream">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>Addis Ababa, Ethiopia</li>
            <li><a className="hover:text-cream" href="tel:+251993936962">+251 993 936 962</a></li>
            <li><a className="hover:text-cream" href="mailto:info@kefyalewgirma.com">info@kefyalewgirma.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-cream/60">
          © {new Date().getFullYear()} Kefyalew Girma Machinery Rental & Land Transport. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
