import { t as QuoteForm } from "./QuoteForm-11wW9RY4.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
//#region src/assets/hero-site.jpg
var hero_site_default = "/assets/hero-site-62xktBmU.jpg";
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
var details = [
	{
		icon: MapPin,
		label: "Office",
		value: "Addis Ababa, Ethiopia"
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+251 993 936 962",
		href: "tel:+251993936962"
	},
	{
		icon: Mail,
		label: "Email",
		value: "info@kefyalewgirma.com",
		href: "mailto:info@kefyalewgirma.com"
	},
	{
		icon: Clock,
		label: "Hours",
		value: "Mon – Sat, 2:00 AM – 11:00 AM (EAT)"
	}
];
function ContactPage() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: hero_site_default,
				alt: "",
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 size-full object-cover"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 -z-10 bg-charcoal/70",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-sm font-bold uppercase tracking-widest text-primary",
						children: "Contact"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-3 max-w-2xl text-4xl text-cream sm:text-5xl",
						children: "Request a quote"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-2xl text-cream/80",
						children: "Send us your equipment needs, project location and rental dates. Our team will confirm availability and pricing within one business day."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]",
						children: [/* @__PURE__ */ jsx(QuoteForm, {}), /* @__PURE__ */ jsx("aside", {
							className: "space-y-4",
							children: details.map((d) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-card p-5 shadow-card",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
									children: [/* @__PURE__ */ jsx(d.icon, {
										className: "size-4 text-forest",
										"aria-hidden": "true"
									}), d.label]
								}), d.href ? /* @__PURE__ */ jsx("a", {
									href: d.href,
									className: "mt-2 block font-semibold hover:text-forest",
									children: d.value
								}) : /* @__PURE__ */ jsx("p", {
									className: "mt-2 font-semibold",
									children: d.value
								})]
							}, d.label))
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
