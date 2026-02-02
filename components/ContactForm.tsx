"use client";

import { FormEvent, useState } from "react";

type PrimaryGoal =
  | "More RFQs"
  | "New accounts"
  | "Market expansion"
  | "Other"
  | "";

type FormState = {
  name: string;
  company: string;
  email: string;
  website: string;
  manufacturingDetails: string;
  primaryGoal: PrimaryGoal;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  website: "",
  manufacturingDetails: "",
  primaryGoal: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate(data: FormState): FormErrors {
    const nextErrors: FormErrors = {};

    if (!data.name.trim()) nextErrors.name = "Name is required.";
    if (!data.company.trim()) nextErrors.company = "Company is required.";
    if (!data.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!data.manufacturingDetails.trim()) {
      nextErrors.manufacturingDetails =
        "Please share what you manufacture or the services you provide.";
    }
    if (!data.primaryGoal) {
      nextErrors.primaryGoal = "Select a primary goal.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const validation = validate(values);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSubmitted(false);
      return;
    }

    // For now, just log the values and show a confirmation message.
    // eslint-disable-next-line no-console
    console.log("Lead form submitted", values);

    setSubmitted(true);
    setValues(initialState);
    setErrors({});
  }

  return (
    <section
      id="contact"
      className="section-spacing border-b border-slate-200 bg-slate-50"
      aria-labelledby="contact-title"
    >
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] lg:items-start">
        <div>
          <h2
            id="contact-title"
            className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            Share a brief overview of your manufacturing work.
          </h2>
          <p className="mt-3 text-base text-slate-700">
            The information below is used only to understand fit and prepare for
            a structured discussion. No commitments are made until both sides
            have reviewed scope, expectations, and next steps.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Typical reply times are 1–2 business days. If there is not a good
            fit, you will receive a clear explanation so you can close the loop
            internally.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 text-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400"
                  value={values.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                >
                  Company<span className="text-red-600">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400"
                  value={values.company}
                  onChange={(event) =>
                    handleChange("company", event.target.value)
                  }
                  aria-required="true"
                  aria-invalid={errors.company ? "true" : "false"}
                />
                {errors.company && (
                  <p className="mt-1 text-xs text-red-600">{errors.company}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                >
                  Work email<span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400"
                  value={values.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                >
                  Website <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  autoComplete="url"
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400"
                  value={values.website}
                  onChange={(event) =>
                    handleChange("website", event.target.value)
                  }
                  aria-required="false"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="primaryGoal"
                className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
              >
                Primary goal<span className="text-red-600">*</span>
              </label>
              <select
                id="primaryGoal"
                name="primaryGoal"
                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                value={values.primaryGoal}
                onChange={(event) =>
                  handleChange(
                    "primaryGoal",
                    event.target.value as PrimaryGoal
                  )
                }
                aria-required="true"
                aria-invalid={errors.primaryGoal ? "true" : "false"}
              >
                <option value="">Select an option</option>
                <option value="More RFQs">More RFQs</option>
                <option value="New accounts">New accounts</option>
                <option value="Market expansion">Market expansion</option>
                <option value="Other">Other</option>
              </select>
              {errors.primaryGoal && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.primaryGoal}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="manufacturingDetails"
                className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
              >
                What do you manufacture?<span className="text-red-600">*</span>
              </label>
              <textarea
                id="manufacturingDetails"
                name="manufacturingDetails"
                rows={4}
                className="block w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400"
                value={values.manufacturingDetails}
                onChange={(event) =>
                  handleChange("manufacturingDetails", event.target.value)
                }
                aria-required="true"
                aria-invalid={errors.manufacturingDetails ? "true" : "false"}
              />
              {errors.manufacturingDetails && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.manufacturingDetails}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-[#0B1F3B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-900"
                aria-label="Submit your details to request a call"
              >
                Submit
              </button>
              <p className="text-xs text-slate-500">
                By submitting, you confirm you are sharing this on behalf of a
                business, not for consumer services.
              </p>
            </div>

            {submitted && (
              <p
                className="mt-3 text-sm text-sky-700"
                role="status"
                aria-live="polite"
              >
                Thanks — we will reply within 1–2 business days.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

