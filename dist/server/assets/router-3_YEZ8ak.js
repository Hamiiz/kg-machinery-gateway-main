import { t as home_background_default } from "./home-background-iA2XGrVW.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MapPin, Menu, Phone, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-DA8VmzAJ.css";
//#endregion
//#region src/assets/kg-logo.png
var kg_logo_default = "/assets/kg-logo-CE9gafTN.png";
//#endregion
//#region src/assets/kg-logo-light.png
var kg_logo_light_default = "/assets/kg-logo-light-eoI-hv90.png";
//#endregion
//#region src/components/site/Header.tsx
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/fleet",
		label: "Our Fleet"
	},
	{
		to: "/transport",
		label: "Land Transportation"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const transparent = useRouterState({ select: (s) => s.location.pathname }) === "/" && !scrolled && !open;
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ jsx("div", {
			className: transparent ? "bg-transparent" : "bg-forest text-forest-foreground",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm",
				children: [/* @__PURE__ */ jsxs("span", {
					className: `inline-flex items-center gap-2 ${transparent ? "text-cream/90" : ""}`,
					children: [/* @__PURE__ */ jsx(MapPin, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Addis Ababa, Ethiopia"]
				}), /* @__PURE__ */ jsxs("a", {
					className: `inline-flex items-center gap-2 hover:underline ${transparent ? "text-cream/90" : ""}`,
					href: "tel:+251993936962",
					children: [/* @__PURE__ */ jsx(Phone, {
						className: "size-4",
						"aria-hidden": "true"
					}), "+251 993 936 962"]
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: transparent ? "bg-transparent" : "border-b border-border bg-background/95 backdrop-blur",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "flex items-center",
						"aria-label": "Kefyalew Girma home",
						children: /* @__PURE__ */ jsx("img", {
							src: transparent ? kg_logo_light_default : kg_logo_default,
							alt: "Kefyalew Girma Machinery Rental & Land Transport",
							className: "h-10 w-auto sm:h-12"
						})
					}),
					/* @__PURE__ */ jsx("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"aria-label": "Main",
						children: nav.map((item) => /* @__PURE__ */ jsx(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/" },
							activeProps: { className: transparent ? "bg-white/15 text-cream" : "bg-secondary text-foreground" },
							className: `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${transparent ? "text-cream/90 hover:bg-white/10 hover:text-cream" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: `hidden rounded-md px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 sm:inline-flex ${transparent ? "border border-cream/40 text-cream hover:bg-cream/10" : "bg-primary text-primary-foreground hover:bg-primary/90"}`,
							children: "Request a Quote"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-label": "Toggle navigation menu",
							className: `grid size-11 place-items-center rounded-md border lg:hidden ${transparent ? "border-cream/40 text-cream" : "border-border"}`,
							children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
						})]
					})
				]
			}), open && /* @__PURE__ */ jsx("nav", {
				className: "border-t border-border bg-background lg:hidden",
				"aria-label": "Mobile",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl flex-col p-3",
					children: [nav.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "rounded-md px-3 py-3 text-base font-semibold text-foreground hover:bg-secondary",
						children: item.label
					}, item.to)), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "mt-2 rounded-md bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground",
						children: "Request a Quote"
					})]
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative z-10 bg-charcoal text-cream",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "sm:col-span-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "inline-flex rounded-md bg-cream p-2",
						children: /* @__PURE__ */ jsx("img", {
							src: kg_logo_default,
							alt: "Kefyalew Girma Machinery Rental & Land Transport",
							className: "h-14 w-auto"
						})
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-sm text-sm text-cream/70",
						children: "Machinery Rental & Land Transport. Excavators, wheel loaders, dump trucks and lowbed haulage for construction projects across Ethiopia."
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-sm font-bold uppercase tracking-wider text-primary",
					children: "Navigation"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "text-cream/80 hover:text-cream",
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/fleet",
							className: "text-cream/80 hover:text-cream",
							children: "Our Fleet"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/transport",
							className: "text-cream/80 hover:text-cream",
							children: "Land Transportation"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "text-cream/80 hover:text-cream",
							children: "About Us"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "text-cream/80 hover:text-cream",
							children: "Request a Quote"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-sm font-bold uppercase tracking-wider text-primary",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-cream/80",
					children: [
						/* @__PURE__ */ jsx("li", { children: "Addis Ababa, Ethiopia" }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							className: "hover:text-cream",
							href: "tel:+251993936962",
							children: "+251 993 936 962"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							className: "hover:text-cream",
							href: "mailto:info@kefyalewgirma.com",
							children: "info@kefyalewgirma.com"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ jsxs("p", {
				className: "mx-auto max-w-7xl px-4 py-6 text-xs text-cream/60",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Kefyalew Girma Machinery Rental & Land Transport. All rights reserved."
				]
			})
		})]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		console.error("Unhandled route error", error);
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				property: "og:site_name",
				content: "Kefyalew Girma Machinery Rental & Land Transport"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: `flex-1 ${isHome ? "" : "pt-28"}`,
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		})
	});
}
//#endregion
//#region src/assets/home-share.jpg
var home_share_default = "/assets/home-share-MCdkij6C.jpg";
//#endregion
//#region src/lib/site-seo.ts
var publicOrigin = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/"
}["VITE_PUBLIC_ORIGIN"]?.replace(/\/$/, "");
var shareImageUrl = publicOrigin ? `${publicOrigin}${home_share_default}` : home_share_default;
var homeTitle = "Machinery Rental & Land Transport | Addis Ababa";
var homeDescription = "Reliable machinery rental and land transport in Addis Ababa, Ethiopia. Hire excavators, loaders and trucks for your next project. Request a quote.";
var localBusiness = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Kefyalew Girma Machinery Rental & Land Transport",
	description: homeDescription,
	address: {
		"@type": "PostalAddress",
		addressLocality: "Addis Ababa",
		addressCountry: "ET"
	},
	telephone: "+251993936962",
	areaServed: {
		"@type": "Country",
		name: "Ethiopia"
	},
	url: "/"
};
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$4 = () => import("./routes--Lu0_3ir.js");
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: homeTitle },
			{
				name: "description",
				content: homeDescription
			},
			{
				property: "og:title",
				content: homeTitle
			},
			{
				property: "og:description",
				content: homeDescription
			},
			{
				property: "og:image",
				content: shareImageUrl
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Develon excavator in the Kefyalew Girma machinery yard"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: shareImageUrl
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}, {
			rel: "preload",
			as: "image",
			href: home_background_default,
			fetchPriority: "high"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(localBusiness)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$3 = () => import("./about-D-Nq3BX4.js");
var Route$4 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Us | Kefyalew Girma Machinery Rental & Land Transport" },
			{
				name: "description",
				content: "Based in Addis Ababa, Kefyalew Girma supplies heavy construction equipment and land transport to contractors, quarries and infrastructure projects across Ethiopia."
			},
			{
				property: "og:title",
				content: "About Kefyalew Girma Machinery Rental & Land Transport"
			},
			{
				property: "og:description",
				content: "An Ethiopian machinery rental and heavy haulage company built on reliability and practical support."
			},
			{
				property: "og:image",
				content: shareImageUrl
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: shareImageUrl
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-DCy2Y3FQ.js");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact & Request a Quote | Kefyalew Girma, Addis Ababa" },
			{
				name: "description",
				content: "Request a machinery rental or land transport quote. Call, email or send project details to our Addis Ababa team and get a response within one business day."
			},
			{
				property: "og:title",
				content: "Request a Quote | Kefyalew Girma"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:description",
				content: "Tell us your equipment, location and dates — we respond within one business day."
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/fleet.tsx
var $$splitComponentImporter$1 = () => import("./fleet-B8cl2xqt.js");
var Route$2 = createFileRoute("/fleet")({
	head: () => ({
		meta: [
			{ title: "Our Fleet | Excavators, Loaders & Dump Trucks in Ethiopia" },
			{
				name: "description",
				content: "Hire excavators, wheel loaders, dump trucks and lowbed transport from Kefyalew Girma. Well-maintained heavy equipment with operators across Ethiopia."
			},
			{
				property: "og:title",
				content: "Our Fleet | Kefyalew Girma Machinery Rental"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/fleet"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:description",
				content: "Excavators, wheel loaders, dump trucks and lowbed transport for hire in Ethiopia."
			}
		],
		links: [{
			rel: "canonical",
			href: "/fleet"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/transport.tsx
var $$splitComponentImporter = () => import("./transport-D3E1i9Ic.js");
var Route$1 = createFileRoute("/transport")({
	head: () => ({
		meta: [
			{ title: "Land Transportation Services in Ethiopia | Kefyalew Girma" },
			{
				name: "description",
				content: "Heavy haulage and land transportation across Ethiopia: lowbed machinery moves, bulk aggregate hauling, permits, routing and on-time delivery."
			},
			{
				property: "og:title",
				content: "Land Transportation | Kefyalew Girma"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/transport"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:description",
				content: "Lowbed machinery moves and bulk haulage across Ethiopia with permits and routing handled."
			}
		],
		links: [{
			rel: "canonical",
			href: "/transport"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	FleetRoute: Route$2.update({
		id: "/fleet",
		path: "/fleet",
		getParentRoute: () => Route$6
	}),
	TransportRoute: Route$1.update({
		id: "/transport",
		path: "/transport",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
