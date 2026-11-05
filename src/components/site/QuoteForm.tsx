import { useState, type FormEvent } from "react";

const equipment = [
  "Excavator",
  "Loader",
  "Dump Truck",
  "Lowbed Transport",
  "Roller",
  "Shower Truck",
  "Fuel Truck",
  "Grader",
  "Multiple / Not sure",
];

const fieldClass =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/40";
const labelClass = "block text-sm font-semibold text-foreground";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-primary/40 bg-card p-8 text-center shadow-card">
        <h3 className="text-xl font-extrabold text-foreground">Request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you. Our team will contact you within one business day with availability and
          pricing.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className={labelClass} htmlFor="equipment">Equipment type</label>
          <select id="equipment" name="equipment" required className={`${fieldClass} mt-2`} defaultValue="">
            <option value="" disabled>Select equipment</option>
            {equipment.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="location">Project location</label>
          <input id="location" name="location" required placeholder="e.g. Bishoftu, Oromia" className={`${fieldClass} mt-2`} />
        </div>

        <div>
          <label className={labelClass} htmlFor="start">Rental start</label>
          <input id="start" name="start" type="date" required className={`${fieldClass} mt-2`} />
        </div>

        <div>
          <label className={labelClass} htmlFor="end">Rental end</label>
          <input id="end" name="end" type="date" required className={`${fieldClass} mt-2`} />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" required placeholder="+251 …" className={`${fieldClass} mt-2`} />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={`${fieldClass} mt-2`} />
        </div>

        {!compact && (
          <>
            <div>
              <label className={labelClass} htmlFor="name">Full name</label>
              <input id="name" name="name" required className={`${fieldClass} mt-2`} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="details">Project details</label>
              <textarea id="details" name="details" rows={4} className={`${fieldClass} mt-2`} placeholder="Scope of work, site access, operator needs…" />
            </div>
          </>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
      >
        Request Quote
      </button>
    </form>
  );
}
