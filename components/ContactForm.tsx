// components/ContactForm.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <form className="space-y-5">
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border-slate-700/80 bg-slate-900/70 text-slate-50 placeholder:text-slate-500 focus-visible:ring-teal-500"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border-slate-700/80 bg-slate-900/70 text-slate-50 placeholder:text-slate-500 focus-visible:ring-teal-500"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell me a bit about your project, timeline, or idea..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="min-h-[140px] border-slate-700/80 bg-slate-900/70 text-slate-50 placeholder:text-slate-500 focus-visible:ring-teal-500"
        />
        <p className="text-[0.7rem] text-slate-500">
          I usually respond within 24–48 hours on weekdays.
        </p>
      </div>

      <Button
        type="submit"
        className="w-full bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
      >
        Send message
      </Button>
    </form>
  );
}
