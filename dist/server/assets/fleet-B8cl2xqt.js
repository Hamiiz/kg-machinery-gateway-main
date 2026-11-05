import { t as fleet } from "./fleet-DsuJuN4F.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Check } from "lucide-react";
//#region src/routes/fleet.tsx?tsr-split=component
function FleetPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-forest",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-bold uppercase tracking-widest text-primary",
					children: "Our Fleet"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-3 max-w-3xl text-4xl text-forest-foreground sm:text-5xl",
					children: "Heavy equipment ready for hire"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-2xl text-base text-forest-foreground/80",
					children: "Every machine is inspected, serviced and dispatched with the support you need to keep production moving."
				})
			]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "mx-auto max-w-7xl space-y-14 px-4 py-20",
		children: fleet.map((item, i) => /* @__PURE__ */ jsxs("article", {
			id: item.slug,
			className: "grid items-center gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: `overflow-hidden rounded-lg shadow-card ${i % 2 ? "md:order-2" : ""}`,
				children: /* @__PURE__ */ jsx("img", {
					src: item.image,
					alt: item.alt,
					loading: "lazy",
					width: item.width,
					height: item.height,
					className: "aspect-4/3 size-full object-cover"
				})
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h2", {
					className: "text-3xl",
					children: item.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-muted-foreground",
					children: item.summary
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-6 space-y-3",
					children: item.specs.map((s) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 text-sm font-medium",
						children: [/* @__PURE__ */ jsx(Check, {
							className: "mt-0.5 size-5 shrink-0 text-forest",
							"aria-hidden": "true"
						}), s]
					}, s))
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/contact",
					className: "mt-8 inline-flex rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90",
					children: "Request a Quote"
				})
			] })]
		}, item.slug))
	})] });
}
//#endregion
export { FleetPage as component };
