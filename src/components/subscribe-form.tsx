"use client";

import { FormEvent, useId, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function SubscribeForm() {
  const emailId = useId();

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!consent || loading) return;

    setLoading(true);
    setMessage("");
    setSuccess(false);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          consent,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(true);
      setMessage(
        "Thanks! Your signup was received. Check your inbox for the course.",
      );
      setEmail("");
      setConsent(false);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Email input and button */}
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_290px]">
        <label className="sr-only" htmlFor={emailId}>
          Email address
        </label>

        <input
          id={emailId}
          type="email"
          data-lpignore="true"
          data-1p-ignore
          autoComplete="email"
          required
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          className="block h-14 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-5 text-base text-[#0b1438] outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
        />

        <button
          type="submit"
          disabled={loading || !consent}
          className="flex h-14 w-full min-w-0 items-center justify-center gap-3 rounded-xl bg-[#6025dc] px-6 text-base font-bold text-white transition hover:bg-[#5016c9] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              {siteConfig.course.buttonText}
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>

      {/* Consent checkbox */}
      <label className="mt-3 flex items-start gap-2 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-violet-700"
          required
        />

        <span>
          I agree to receive the free five-day email course from Alternative
          Tech Path. I can unsubscribe at any time.
        </span>
      </label>

      {/* Success or error message */}
      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-3 text-sm ${
            success ? "text-violet-700" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
