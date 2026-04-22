import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Contact NoCheck | Request a Demo — Enterprise Payment Platform",
  description:
    "Request a demo or talk to our sales team. Phone: 248.621.0900. Email: sales@nocheck.com. Offices in Southfield, MI · Las Vegas, NV · Coral Gables, FL.",
  alternates: { canonical: "https://nocheck.com/contact" },
};

const industries = [
  "Insurance",
  "Healthcare & Medical Payers",
  "Government & Municipalities",
  "Ticketing & Entertainment",
  "Universities & Education",
  "Transportation & Logistics",
  "Financial Institutions",
  "Other",
];

const steps = [
  { n: "01", title: "Discovery", body: "We learn about your current payment operations, volume, and pain points." },
  { n: "02", title: "Demo", body: "We walk you through the NoCheck platform customized to your industry and use case." },
  { n: "03", title: "Technical Review", body: "Our team reviews your integration requirements, compliance needs, and infrastructure." },
  { n: "04", title: "Pilot", body: "We run a controlled pilot with real volume before full deployment." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#141414] min-h-[50vh] flex items-end pb-20 pt-40 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(195,233,65,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <SectionReveal>
            <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C3E941] mb-4 block">
              Contact
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] lg:text-[5rem] leading-none uppercase tracking-tight text-white mb-6 max-w-4xl">
              Let&apos;s Talk About Your Payment Operations.
            </h1>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <SectionReveal>
                <h2 className="font-display text-[2rem] leading-none uppercase tracking-tight text-[#141414] mb-8">
                  Request a Demo
                </h2>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <form className="space-y-6" action="#" method="POST">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] font-body text-base text-[#141414] bg-white focus:outline-none focus:border-[#C3E941] focus:ring-2 focus:ring-[#C3E941]/20 transition-colors"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] font-body text-base text-[#141414] bg-white focus:outline-none focus:border-[#C3E941] focus:ring-2 focus:ring-[#C3E941]/20 transition-colors"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] font-body text-base text-[#141414] bg-white focus:outline-none focus:border-[#C3E941] focus:ring-2 focus:ring-[#C3E941]/20 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] font-body text-base text-[#141414] bg-white focus:outline-none focus:border-[#C3E941] focus:ring-2 focus:ring-[#C3E941]/20 transition-colors"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] font-body text-base text-[#141414] bg-white focus:outline-none focus:border-[#C3E941] focus:ring-2 focus:ring-[#C3E941]/20 transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] font-body text-base text-[#141414] bg-white focus:outline-none focus:border-[#C3E941] focus:ring-2 focus:ring-[#C3E941]/20 transition-colors"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] font-body text-base text-[#141414] bg-white focus:outline-none focus:border-[#C3E941] focus:ring-2 focus:ring-[#C3E941]/20 transition-colors resize-none"
                      placeholder="Tell us about your current payment operations and what you're trying to solve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C3E941] text-[#141414] font-bold uppercase tracking-[0.04em] px-8 py-4 rounded-lg hover:bg-[#D4F055] transition-all duration-200 hover:scale-[1.01] font-body text-base"
                  >
                    Request a Demo
                  </button>
                </form>
              </SectionReveal>
            </div>

            {/* Right: Contact info + process */}
            <div className="space-y-8">
              <SectionReveal delay={0.2}>
                <div className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E5E5E3]">
                  <h3 className="font-body font-bold text-[#141414] text-base mb-6 uppercase tracking-[0.04em]">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <a href="tel:2486210900" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center shrink-0">
                        <Phone size={16} color="#C3E941" />
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A]">Phone</p>
                        <p className="font-body text-base font-bold text-[#141414] group-hover:text-[#C3E941] transition-colors">
                          248.621.0900
                        </p>
                      </div>
                    </a>
                    <a href="mailto:sales@nocheck.com" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center shrink-0">
                        <Mail size={16} color="#C3E941" />
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A]">Email</p>
                        <p className="font-body text-base font-bold text-[#141414] group-hover:text-[#C3E941] transition-colors">
                          sales@nocheck.com
                        </p>
                      </div>
                    </a>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center shrink-0">
                          <MapPin size={16} color="#C3E941" />
                        </div>
                        <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A]">Offices</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-[#141414] rounded-xl p-4 border border-[#C3E941]/30">
                          <span className="inline-block mb-2 px-2 py-0.5 rounded-full bg-[#C3E941]/10 border border-[#C3E941]/30 font-body text-[10px] font-bold uppercase tracking-[0.06em] text-[#C3E941]">
                            Headquarters
                          </span>
                          <p className="font-body font-bold text-white text-xs mb-1">Southfield, Michigan</p>
                          <p className="font-body text-xs text-[#8A8A8A] leading-relaxed">
                            24400 Northwestern Hwy<br />Suite 210<br />Michigan 48075
                          </p>
                        </div>
                        <div className="bg-[#F0F0EE] rounded-xl p-4 border border-[#E5E5E3]">
                          <p className="font-body font-bold text-[#141414] text-xs mb-2">Las Vegas</p>
                          <p className="font-body text-xs text-[#5A5A5A] leading-relaxed">
                            9360 W Flamingo Rd<br />Las Vegas, NV 89147
                          </p>
                        </div>
                        <div className="bg-[#F0F0EE] rounded-xl p-4 border border-[#E5E5E3]">
                          <p className="font-body font-bold text-[#141414] text-xs mb-2">Miami</p>
                          <p className="font-body text-xs text-[#5A5A5A] leading-relaxed">
                            2121 Ponce de Leon<br />Ste 250<br />Coral Gables, FL 33134
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="bg-[#141414] rounded-2xl p-8 border border-[#2A2A2A]">
                  <h3 className="font-body font-bold text-white text-base mb-6 uppercase tracking-[0.04em]">
                    What to Expect
                  </h3>
                  <div className="space-y-6">
                    {steps.map((step) => (
                      <div key={step.n} className="flex gap-5">
                        <span className="font-display text-2xl text-[#C3E941] leading-none shrink-0">{step.n}</span>
                        <div>
                          <p className="font-body font-bold text-white text-sm mb-1">{step.title}</p>
                          <p className="font-body text-sm text-[#8A8A8A] leading-[1.6]">{step.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div className="bg-[#F7F7F5] rounded-2xl p-6 border border-[#E5E5E3] flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C3E941] shrink-0" />
                  <p className="font-body text-sm text-[#5A5A5A]">
                    We respond to all demo requests within one business day.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
