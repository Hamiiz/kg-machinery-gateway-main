import { t as home_background_default } from "./home-background-iA2XGrVW.js";
import { t as QuoteForm } from "./QuoteForm-11wW9RY4.js";
import { t as fleet } from "./fleet-DsuJuN4F.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CalendarClock, ShieldCheck, Truck, Wrench } from "lucide-react";
//#region src/components/site/HeroMarquee.tsx
var names = [
	{
		text: "ከፍያለው ግርማ ማሽነሪ ኪራይ እና የየብስ ትራንስፖርት ተዛማጅ ስራዋች",
		lang: "am"
	},
	{
		text: "Kefyalew Girma Machinery Rental & Land Transport",
		lang: "en"
	},
	{
		text: "克菲亚勒夫·吉尔马机械租赁与陆路运输",
		lang: "zh"
	}
];
function HeroMarquee() {
	const sequence = [...names, ...names];
	return /* @__PURE__ */ jsx("div", {
		className: "w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
		"aria-label": "Kefyalew Girma Machinery Rental & Land Transport",
		children: /* @__PURE__ */ jsx("div", {
			className: "marquee-track",
			"aria-hidden": "true",
			children: sequence.map((n, i) => /* @__PURE__ */ jsx("span", {
				lang: n.lang,
				className: "px-8 text-xl font-extrabold whitespace-nowrap text-cream drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-2xl lg:text-3xl",
				children: n.text
			}, `${n.lang}-${i}`))
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var benefits = [
	{
		icon: ShieldCheck,
		title: "Reliable equipment",
		body: "Well-maintained machines serviced on schedule to keep your programme on track."
	},
	{
		icon: Wrench,
		title: "Professional support",
		body: "Experienced operators, mechanics and site coordinators backing every hire."
	},
	{
		icon: CalendarClock,
		title: "Flexible rental",
		body: "Daily, weekly, monthly or project-based terms with or without an operator."
	},
	{
		icon: Truck,
		title: "Dependable transport",
		body: "Lowbed and tipper haulage with permits, routing and on-time delivery."
	}
];
function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none fixed inset-0 -z-20",
				children: /* @__PURE__ */ jsx("img", {
					src: home_background_default,
					alt: "Develon excavator in the machinery rental yard in Addis Ababa",
					width: 1079,
					height: 1920,
					fetchPriority: "high",
					className: "size-full object-cover"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none fixed inset-0 -z-10 bg-charcoal/75",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative flex min-h-[88vh] flex-col",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pb-16 pt-32 text-center",
					children: [
						/* @__PURE__ */ jsx(HeroMarquee, {}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-8 max-w-3xl text-3xl text-cream sm:text-4xl lg:text-5xl",
							children: "Reliable Machinery Rental & Land Transport in Addis Ababa"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-7 max-w-2xl text-base font-medium text-cream/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-lg",
							children: "Kefyalew Girma provides Machinery Rental & Land Transport from Addis Ababa to sites across Ethiopia — well-maintained equipment, experienced crews, and dependable delivery you can trust."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "rounded-md bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90",
								children: "Request a Quote"
							}), /* @__PURE__ */ jsx("a", {
								href: "tel:+251993936962",
								className: "rounded-md border border-cream/40 px-7 py-4 text-base font-bold text-cream transition-colors hover:bg-cream/10",
								children: "Call +251 993 936 962"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative z-10 -mt-14",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-5xl px-4 py-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-lg bg-forest px-6 py-6 text-forest-foreground shadow-lift sm:px-8",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-extrabold",
							children: "Get a quick quote"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-forest-foreground/75",
							children: "Tell us what you need and when — we respond within one business day."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-4",
						children: /* @__PURE__ */ jsx(QuoteForm, { compact: true })
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 py-24",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm font-bold uppercase tracking-widest text-gold",
							children: "Our Fleet"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-2 text-3xl text-cream sm:text-4xl",
							children: "Our Machinery Rental Fleet"
						})] }), /* @__PURE__ */ jsxs(Link, {
							to: "/fleet",
							className: "inline-flex items-center gap-2 text-sm font-bold text-gold hover:gap-3",
							children: ["View full fleet ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: fleet.map((item) => /* @__PURE__ */ jsxs(Link, {
							to: "/fleet",
							className: "group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-lift",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-4/3 overflow-hidden",
								children: /* @__PURE__ */ jsx("img", {
									src: item.image,
									alt: item.alt,
									loading: "lazy",
									width: item.width,
									height: item.height,
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-5",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-extrabold",
									children: item.title
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: item.summary
								})]
							})]
						}, item.slug))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 py-16",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl text-cream sm:text-4xl",
							children: "Land Transport Solutions"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-2xl text-cream/90",
							children: "Move machinery between sites with lowbed transport, or arrange dump trucks for aggregate, sand and soil. Our Addis Ababa team coordinates loads, route planning and deliveries across Ethiopia."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/transport",
							className: "mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold",
							children: ["Explore land transport ", /* @__PURE__ */ jsx(ArrowRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 py-24",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-sm font-bold uppercase tracking-widest text-gold",
							children: "Why choose us"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-2 max-w-2xl text-3xl text-cream sm:text-4xl",
							children: "Strong equipment, steady people, on-time delivery"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: benefits.map((b) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg bg-card/95 p-6 shadow-card backdrop-blur-sm",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "grid size-12 place-items-center rounded-md bg-primary/20 text-forest",
										children: /* @__PURE__ */ jsx(b.icon, {
											className: "size-6",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-5 text-lg font-extrabold",
										children: b.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: b.body
									})
								]
							}, b.title))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-20 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "max-w-xl text-3xl text-cream sm:text-4xl",
						children: "Need machinery for your next project?"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "rounded-md bg-primary px-7 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90",
							children: "Request a Quote"
						}), /* @__PURE__ */ jsx("a", {
							href: "tel:+251993936962",
							className: "rounded-md border border-cream/30 px-7 py-4 text-base font-bold text-cream hover:bg-cream/10",
							children: "Call +251 993 936 962"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
