import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CTABlock from "@/components/sections/CTABlock";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Why NoCheck | Enterprise Payment Platform — Built Different",
  description:
    "30+ years. 4 banking partners. Federal Reserve BPC. HIPAA + PCI-DSS + SOC2. Dual US/EU infrastructure. NoCheck isn't a payment startup — it's proven enterprise infrastructure.",
  alternates: { canonical: "https://nocheck.com/why-nocheck" },
};

const differentiators = [
  {
    number: "01",
    title: "30+ Years of Proven Infrastructure",
    body: "NoCheck was founded in 1993 — before most payment startups existed. Three decades of enterprise production means we've already solved the edge cases, the compliance challenges, and the scale problems that newer platforms are still discovering.",
    proof: "In production since 1993. Preferred service provider since 1996.",
    dark: false,
  },
  {
    number: "02",
    title: "Four Tier-1 Banking Partners",
    body: "JP Morgan Chase. US Bank. Bank of America. Key Bank. These aren't marketing partnerships — they're operational relationships built over decades. Processing at the highest levels of security and compliance requires banking relationships that take years to build. We have them.",
    proof: "JP Morgan Chase · US Bank · Bank of America · Key Bank",
    dark: true,
  },
  {
    number: "03",
    title: "Federal Reserve Business Payments Coalition",
    body: "Chuck Kopko, founder of The NoCheck Group, is a Work Group Member of the Federal Reserve Business Payments Coalition — directly involved in shaping the future of US payment infrastructure. NoCheck is also a FedNow Service Provider Showcase participant.",
    proof: "Federal Reserve BPC Member · FedNow Service Provider",
    dark: false,
  },
  {
    number: "04",
    title: "Triple-Certified Compliance",
    body: "HIPAA. PCI-DSS. SOC2. Audited annually by independent third parties. Not self-assessed, not in progress — validated. For enterprise buyers in insurance, healthcare, and government, this isn't a nice-to-have. It's the baseline.",
    proof: "HIPAA · PCI-DSS · SOC2 — Audited Annually",
    dark: true,
  },
  {
    number: "05",
    title: "Dual US + EU Infrastructure",
    body: "Primary data center in Michigan. Secondary processing in Luxembourg with direct access to European payment rails including SEPA. Organizations with global payment operations get a single platform that covers both continents — with the redundancy to guarantee 99.99% uptime.",
    proof: "Michigan, USA · Luxembourg, EU · 99.99% Uptime SLA",
    dark: false,
  },
  {
    number: "06",
    title: "Branded Everything",
    body: "Your portal. Your fonts. Your colors. Your domain. Your call center — answered by on-shore, US-based staff trained to represent your brand. Most payment platforms send your customers to a generic checkout experience. NoCheck keeps them inside your ecosystem entirely.",
    proof: "White-label portals · On-shore call center · Your domain",
    dark: true,
  },
  {
    number: "07",
    title: "Proprietary Fraud Detection",
    body: "NoCheck's fraud detection system includes direct access to the US banking system's Early Warning System — the same network that major banks use to verify account ownership and flag fraudulent activity. Combined with duplicate enrollment IP filtering, SSN reuse monitoring, and real-time bank account verification.",
    proof: "Early Warning System · Duplicate detection · SSN monitoring",
    dark: false,
  },
  {
    number: "08",
    title: "True Enterprise Service",
    body: "NoCheck is not a platform that routes you to documentation. We're a true service partner — with dedicated support, custom configuration, and the kind of relationship where your payment operations team knows who to call. Aflac didn't name us Partner of the Year for our self-serve onboarding.",
    proof: "Aflac 2015 Partner of the Year for Innovation and Technology",
    dark: true,
  },
];

export default function WhyNocheckPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#141414] min-h-[70vh] flex items-end pb-20 pt-40 overflow-hidden">
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
              Why NoCheck
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] lg:text-[5rem] leading-none uppercase tracking-tight text-white mb-8 max-w-5xl">
              Not Every Payment Platform Is Built the Same.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-lg md:text-xl text-[#C9C9C9] max-w-2xl leading-[1.7]">
              When you&apos;re moving billions in enterprise disbursements, the difference between a platform built in 1993 and one built in 2020 isn&apos;t a feature list — it&apos;s decades of solved problems, proven infrastructure, and institutional trust you can&apos;t fake.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Differentiators */}
      {differentiators.map((d) => (
        <section
          key={d.number}
          className={`py-24 ${d.dark ? "bg-[#141414]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <SectionReveal>
                <div>
                  <span className={`font-display text-[5rem] leading-none ${d.dark ? "text-[#C3E941]/20" : "text-[#E5E5E3]"} block mb-4`}>
                    {d.number}
                  </span>
                  <h2 className={`font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight mb-6 ${d.dark ? "text-white" : "text-[#141414]"}`}>
                    {d.title}
                  </h2>
                  <p className={`font-body text-lg leading-[1.7] ${d.dark ? "text-[#C9C9C9]" : "text-[#5A5A5A]"}`}>
                    {d.body}
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className={`rounded-2xl p-8 border ${d.dark ? "bg-[#1E1E1E] border-[#2A2A2A]" : "bg-[#F7F7F5] border-[#E5E5E3]"}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-5 h-5 rounded-full bg-[#C3E941] flex items-center justify-center shrink-0">
                      <Check size={12} color="#141414" strokeWidth={3} />
                    </div>
                    <span className={`font-body text-xs font-bold uppercase tracking-[0.08em] ${d.dark ? "text-[#8A8A8A]" : "text-[#8A8A8A]"}`}>
                      Proven
                    </span>
                  </div>
                  <p className={`font-body text-base font-bold ${d.dark ? "text-white" : "text-[#141414]"} leading-[1.6]`}>
                    {d.proof}
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      ))}

      {/* The Bottom Line */}
      <section className="bg-[#F7F7F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal>
              <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8A8A8A] mb-4 block">
                The Bottom Line
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-[2.5rem] md:text-[3.5rem] leading-none uppercase tracking-tight text-[#141414] mb-8">
                When the Money Has to Move, You Need a Platform That Has.
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="font-body text-xl text-[#5A5A5A] leading-[1.7] mb-12">
                Aflac chose NoCheck. AT&amp;T chose NoCheck. Multiple state governments chose NoCheck. They all had options. They chose 30 years of proven infrastructure, Federal Reserve credentials, four Tier-1 banking partnerships, and a team that treats payment operations as a mission — not a product feature.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#C3E941] text-[#141414] font-bold uppercase tracking-[0.04em] px-10 py-4 rounded-lg hover:bg-[#D4F055] transition-all duration-200 hover:scale-[1.02] font-body"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/security"
                  className="inline-flex items-center gap-2 justify-center border-2 border-[#141414] text-[#141414] font-bold uppercase tracking-[0.04em] px-10 py-4 rounded-lg hover:bg-[#141414]/5 transition-all duration-200 font-body"
                >
                  View Security Details <ArrowRight size={14} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Stop Evaluating. Start Moving."
        subhead="Every day your organization sends paper checks is a day of unnecessary cost, fraud risk, and operational drag. NoCheck is ready when you are."
        contact={false}
      />
    </>
  );
}
