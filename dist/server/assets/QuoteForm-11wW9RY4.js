import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/QuoteForm.tsx
var equipment = [
	"Excavator",
	"Loader",
	"Dump Truck",
	"Lowbed Transport",
	"Roller",
	"Shower Truck",
	"Fuel Truck",
	"Grader",
	"Multiple / Not sure"
];
var fieldClass = "w-full rounded-md border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/40";
var labelClass = "block text-sm font-semibold text-foreground";
function QuoteForm({ compact = false }) {
	const [submitted, setSubmitted] = useState(false);
	function onSubmit(e) {
		e.preventDefault();
		setSubmitted(true);
	}
	if (submitted) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-primary/40 bg-card p-8 text-center shadow-card",
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "text-xl font-extrabold text-foreground",
				children: "Request received"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Thank you. Our team will contact you within one business day with availability and pricing."
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => setSubmitted(false),
				className: "mt-6 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90",
				children: "Send another request"
			})
		]
	});
	return /* @__PURE__ */ jsxs("form", {
		onSubmit,
		className: "rounded-lg border border-border bg-card p-6 shadow-card sm:p-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-5 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: compact ? "" : "sm:col-span-2",
					children: [/* @__PURE__ */ jsx("label", {
						className: labelClass,
						htmlFor: "equipment",
						children: "Equipment type"
					}), /* @__PURE__ */ jsxs("select", {
						id: "equipment",
						name: "equipment",
						required: true,
						className: `${fieldClass} mt-2`,
						defaultValue: "",
						children: [/* @__PURE__ */ jsx("option", {
							value: "",
							disabled: true,
							children: "Select equipment"
						}), equipment.map((e) => /* @__PURE__ */ jsx("option", {
							value: e,
							children: e
						}, e))]
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: labelClass,
					htmlFor: "location",
					children: "Project location"
				}), /* @__PURE__ */ jsx("input", {
					id: "location",
					name: "location",
					required: true,
					placeholder: "e.g. Bishoftu, Oromia",
					className: `${fieldClass} mt-2`
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: labelClass,
					htmlFor: "start",
					children: "Rental start"
				}), /* @__PURE__ */ jsx("input", {
					id: "start",
					name: "start",
					type: "date",
					required: true,
					className: `${fieldClass} mt-2`
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: labelClass,
					htmlFor: "end",
					children: "Rental end"
				}), /* @__PURE__ */ jsx("input", {
					id: "end",
					name: "end",
					type: "date",
					required: true,
					className: `${fieldClass} mt-2`
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: labelClass,
					htmlFor: "phone",
					children: "Phone number"
				}), /* @__PURE__ */ jsx("input", {
					id: "phone",
					name: "phone",
					type: "tel",
					required: true,
					placeholder: "+251 …",
					className: `${fieldClass} mt-2`
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: labelClass,
					htmlFor: "email",
					children: "Email"
				}), /* @__PURE__ */ jsx("input", {
					id: "email",
					name: "email",
					type: "email",
					required: true,
					placeholder: "you@example.com",
					className: `${fieldClass} mt-2`
				})] }),
				!compact && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: labelClass,
					htmlFor: "name",
					children: "Full name"
				}), /* @__PURE__ */ jsx("input", {
					id: "name",
					name: "name",
					required: true,
					className: `${fieldClass} mt-2`
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "sm:col-span-2",
					children: [/* @__PURE__ */ jsx("label", {
						className: labelClass,
						htmlFor: "details",
						children: "Project details"
					}), /* @__PURE__ */ jsx("textarea", {
						id: "details",
						name: "details",
						rows: 4,
						className: `${fieldClass} mt-2`,
						placeholder: "Scope of work, site access, operator needs…"
					})]
				})] })
			]
		}), /* @__PURE__ */ jsx("button", {
			type: "submit",
			className: "mt-6 w-full rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto",
			children: "Request Quote"
		})]
	});
}
//#endregion
export { QuoteForm as t };
