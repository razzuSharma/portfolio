import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-24 text-slate-50">
      {/* teal glow accents */}
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <main className="relative mx-auto max-w-6xl space-y-16">
        {/* Text and GIFs Section */}
        <section className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Text Content */}
          <div className="flex-1 space-y-5 lg:max-w-xl">
            <p className="inline-flex items-center rounded-full border border-teal-500/30 bg-slate-950/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-teal-300/90">
              Let&apos;s connect
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block text-slate-100">
                Have a project in mind?
              </span>
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Tell me about it.
              </span>
            </h1>
            <p className="text-sm text-slate-300/90 sm:text-base">
              Whether you&apos;re looking for a dark-mode dashboard, a polished
              marketing site, or a full product experience, I&apos;d love to
              hear what you&apos;re building. Share as much detail as you can,
              and I&apos;ll follow up with ideas and next steps.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-[0.7rem] text-slate-300 sm:text-xs">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-3">
                <p className="font-semibold text-slate-100">Typical projects</p>
                <p className="mt-1 text-slate-400">
                  Product UIs, dashboards, marketing sites, portfolio
                  experiences.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-3">
                <p className="font-semibold text-slate-100">Tech</p>
                <p className="mt-1 text-slate-400">
                  Next.js, TypeScript, Tailwind, Framer Motion.
                </p>
              </div>
            </div>
          </div>
          {/* GIFs Section */}
          <div className="flex flex-1 flex-col gap-4 lg:max-w-xl">
            <div className="relative overflow-hidden  shadow-teal-500/10">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/contact-image.png"
                  alt="Creative collaboration"
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw" // Updated sizes for performance
                  quality={100} // Bumped quality slightly
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mx-auto w-full max-w-2xl">
          <div className="rounded-3xl border border-teal-500/25 bg-slate-950/85 p-6 shadow-[0_20px_70px_rgba(15,118,110,0.5)] backdrop-blur lg:p-8">
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
              Contact form
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
