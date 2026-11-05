import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#endregion
//#region src/routes/about.tsx?tsr-split=component
var teamImage = "/assets/about-yard-FH5ZPQa6.jpg";
var stats = [
	{
		value: "10+",
		label: "Years on Ethiopian sites"
	},
	{
		value: "40+",
		label: "Machines & trucks dispatched"
	},
	{
		value: "24/7",
		label: "Site support line"
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				children: [/* @__PURE__ */ jsx("img", {
					src: teamImage,
					alt: "Develon excavator and equipment at the Kefyalew Girma machinery rental yard",
					className: "size-full object-cover"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-charcoal/70" })]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2",
				children: /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-sm font-bold uppercase tracking-widest text-gold",
						children: "About Us"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-3 text-4xl sm:text-5xl text-cream",
						children: "Built for the work Ethiopia is doing"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-cream/80",
						children: "Kefyalew Girma Machinery Rental & Land Transport is an Ethiopian company supplying heavy construction equipment and land transportation to contractors, quarries, real estate developers and infrastructure projects."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-cream/80",
						children: "We operate from Addis Ababa and mobilise nationwide. Our approach is practical: keep the machines serviced, keep the crews skilled, and keep clients informed from the first quote to the final offload."
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "mt-8 inline-flex rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90",
						children: "Work with us"
					})
				] })
			}),
			/* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-3",
				children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-lg bg-card/90 p-8 text-center shadow-card backdrop-blur-sm",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-4xl font-extrabold text-gold",
						children: s.value
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm font-semibold text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			}) })
		]
	});
}
//#endregion
export { AboutPage as component };
