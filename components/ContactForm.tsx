"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-[#00d4ff]" />
        <h3 className="text-xl font-bold text-slate-100">Message sent!</h3>
        <p className="text-slate-400">I&apos;ll get back to you within 24–48 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-[#00d4ff] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border-[#00d4ff]/15 bg-slate-900/70 text-slate-50 placeholder:text-slate-500 focus-visible:ring-[#00d4ff]"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border-[#00d4ff]/15 bg-slate-900/70 text-slate-50 placeholder:text-slate-500 focus-visible:ring-[#00d4ff]"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell me a bit about your project, timeline, or idea..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="min-h-[140px] border-[#00d4ff]/15 bg-slate-900/70 text-slate-50 placeholder:text-slate-500 focus-visible:ring-[#00d4ff]"
          required
        />
        <p className="text-[0.7rem] text-slate-500">I usually respond within 24–48 hours on weekdays.</p>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#00d4ff] text-[#0a0a0f] font-semibold shadow-lg shadow-[#00d4ff]/20 transition hover:bg-sky-300 disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </span>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
