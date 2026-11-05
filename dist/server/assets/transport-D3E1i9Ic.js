import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Clock, FileCheck2, PackageCheck, Route } from "lucide-react";
//#region src/assets/transport.jpg
var transport_default = "/assets/transport-Btt1HtzR.jpg";
//#endregion
//#region src/routes/transport.tsx?tsr-split=component
var services = [
	{
		icon: PackageCheck,
		title: "Machinery relocation",
		body: "Lowbed transport of excavators, loaders, rollers and plant between project sites."
	},
	{
		icon: Route,
		title: "Bulk material hauling",
		body: "Aggregate, sand, soil and spoil hauled at volume with planned truck cycles."
	},
	{
		icon: FileCheck2,
		title: "Permits & compliance",
		body: "Route surveys, oversize permits and escort coordination arranged for you."
	},
	{
		icon: Clock,
		title: "Scheduled dispatch",
		body: "Fixed delivery windows with progress updates from loading to offloading."
	}
];
function TransportPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative isolate",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: transport_default,
				alt: "Heavy haulage trucks for land transport and machinery relocation",
				width: 1600,
				height: 900,
				className: "absolute inset-0 -z-10 size-full object-cover"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 -z-10 bg-charcoal/70",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 py-28",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-sm font-bold uppercase tracking-widest text-primary",
						children: "Land Transportation"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-3 max-w-3xl text-4xl text-cream sm:text-5xl",
						children: "Moving heavy loads across Ethiopia"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-2xl text-cream/80",
						children: "From a single machine relocation to continuous aggregate haulage, our trucks and crews keep material and equipment flowing to site."
					})
				]
			})
		]
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-20",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid gap-6 sm:grid-cols-2",
			children: services.map((s) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-border bg-card p-7 shadow-card",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "grid size-12 place-items-center rounded-md bg-primary/20 text-forest",
						children: /* @__PURE__ */ jsx(s.icon, {
							className: "size-6",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-5 text-xl font-extrabold",
						children: s.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.body
					})
				]
			}, s.title))
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-14 rounded-lg bg-forest px-6 py-12 text-center text-forest-foreground sm:px-12",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "text-3xl",
					children: "Planning a heavy move?"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-3 max-w-xl text-forest-foreground/80",
					children: "Share your load dimensions, origin and destination and we will return a transport plan with pricing."
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/contact",
					className: "mt-8 inline-flex rounded-md bg-primary px-7 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90",
					children: "Request a Quote"
				})
			]
		})]
	})] });
}
//#endregion
export { TransportPage as component };
