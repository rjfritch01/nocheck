import type { Metadata } from "next";
import Image from "next/image";
import CTABlock from "@/components/sections/CTABlock";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "About NoCheck | Enterprise Payment Platform — Built Since 1993",
  description:
    "Founded by Charles 'Chuck' Kopko in 1993. Federal Reserve BPC member. Four banking partners: JP Morgan Chase, US Bank, Bank of America, Key Bank. Offices in Southfield, MI · Las Vegas, NV · Coral Gables, FL.",
  alternates: { canonical: "https://nocheck.com/about" },
};

const timeline = [
  { year: "1993", event: "The NoCheck Group founded by Charles 'Chuck' Kopko. Financial internet applications from day one." },
  { year: "1996", event: "Named preferred service provider — a relationship built on performance, not promises." },
  { year: "2015", event: "Aflac names NoCheck Partner of the Year for Innovation and Technology." },
  { year: "Today", event: "Billions processed annually. Federal Reserve BPC membership. 4 banking partners. 3 US office locations." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#141414] min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden">
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
              About NoCheck
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] lg:text-[5rem] leading-none uppercase tracking-tight text-white mb-6 max-w-4xl">
              30+ Years of Moving Money Forward.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-lg text-[#C9C9C9] max-w-2xl leading-[1.7]">
              Building financial internet applications since 1993. Earning enterprise trust one payment at a time.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Founder story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Badge seal accent */}
          <div className="flex justify-center mb-16">
            <SectionReveal>
              <Image
                src="/logos/badge-seal-dark.png"
                alt="NoCheck Brand Seal"
                width={120}
                height={120}
                className="w-28 h-28 opacity-80"
              />
            </SectionReveal>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionReveal>
                <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight text-[#141414] mb-8">
                  The Company
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <div className="space-y-6 font-body text-lg text-[#5A5A5A] leading-[1.7]">
                  <p>
                    The NoCheck Group has been building financial internet applications since 1993. Founded by Charles &ldquo;Chuck&rdquo; Kopko, we&apos;ve spent three decades earning the trust of the institutions that demand the most from their payment infrastructure.
                  </p>
                  <p>
                    Today, our systems facilitate the movement of billions of dollars annually — accurately, securely, and with the kind of agile service that enterprise clients expect from a true partner, not a vendor.
                  </p>
                  <p>
                    We are headquartered in Southfield, Michigan, with additional offices in Las Vegas, Nevada and Coral Gables, Florida — serving clients across the United States and globally.
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Timeline */}
            <div>
              <SectionReveal delay={0.2}>
                <h3 className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-8">
                  Key Milestones
                </h3>
              </SectionReveal>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E5E5E3]" />
                <StaggerContainer className="space-y-8">
                  {timeline.map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex gap-6">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-[#141414] border-2 border-[#C3E941] flex items-center justify-center shrink-0 relative z-10">
                            <span className="font-display text-xs text-[#C3E941]">{item.year.slice(-2)}</span>
                          </div>
                        </div>
                        <div className="pt-3">
                          <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-1">{item.year}</p>
                          <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">{item.event}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Reserve */}
      <section className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C3E941] mb-4 block">
                  Federal Reserve Partnership
                </span>
                <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight text-white mb-6">
                  Shaping the Future of US Payments
                </h2>
                <div className="space-y-5 font-body text-lg text-[#C9C9C9] leading-[1.7]">
                  <p>
                    Chuck Kopko is a Work Group Member of the Federal Reserve Business Payments Coalition (BPC) — the body responsible for driving modernization of B2B payment infrastructure across the United States.
                  </p>
                  <p>
                    This isn&apos;t a passive affiliation. NoCheck actively participates in the working groups that shape how businesses send and receive payments — reducing manual processes, lowering costs, and advancing straight-through processing across the US economy.
                  </p>
                  <p>
                    NoCheck is also a participant in the FedNow Service Provider Showcase — validating our capability to deliver real-time payments on Federal Reserve infrastructure.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="space-y-4">
                {[
                  { badge: "Federal Reserve BPC", detail: "Work Group Member — B2B payment modernization" },
                  { badge: "FedNow Service Provider", detail: "Showcase participant — real-time payment delivery" },
                  { badge: "NACHA Member", detail: "ACH network — ISO, ML, NACHA format support" },
                  { badge: "Since 1993", detail: "30+ years of continuous enterprise production" },
                ].map((item) => (
                  <div key={item.badge} className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl p-6 flex items-center gap-6">
                    <span className="inline-flex shrink-0 px-3 py-1.5 rounded-full bg-[#C3E941]/10 border border-[#C3E941]/20 font-body text-xs font-bold uppercase tracking-[0.06em] text-[#C3E941]">
                      {item.badge}
                    </span>
                    <p className="font-body text-sm text-[#C9C9C9]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Banking partners */}
      <section className="bg-[#F7F7F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight text-[#141414] mb-4">
              Our Banking Partners
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-lg text-[#5A5A5A] leading-[1.7] max-w-2xl mb-12">
              We process payments in partnership with four of America&apos;s most trusted financial institutions — relationships built on decades of compliance, performance, and trust.
            </p>
          </SectionReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "JP Morgan Chase", detail: "Tier-1 banking partner since early operations" },
              { name: "US Bank", detail: "Multi-rail payment processing partnership" },
              { name: "Bank of America", detail: "Enterprise disbursement processing" },
              { name: "Key Bank", detail: "Regional and national payment operations" },
            ].map((bank, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-[#E5E5E3] rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-300">
                  {/* TODO: Replace with actual bank logo SVG when available */}
                  <p className="font-body font-bold text-base text-[#141414] mb-3">{bank.name}</p>
                  <p className="font-body text-xs text-[#8A8A8A]">{bank.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Global */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight text-[#141414] mb-12">
              Global Infrastructure
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-[#141414] rounded-2xl p-10 border border-[#2A2A2A]">
                <p className="font-display text-3xl text-[#C3E941] mb-2">USA</p>
                <h3 className="font-body font-bold text-white text-xl mb-4">Three US Locations</h3>
                <p className="font-body text-sm text-[#C9C9C9] leading-[1.7] mb-6">
                  Headquartered in Southfield, Michigan, with offices in Las Vegas and Coral Gables. Primary data center processing ACH, RTP®, FedNow, and all domestic US payment rails.
                </p>
                <ul className="space-y-2">
                  {[
                    "Southfield, Michigan — Headquarters",
                    "Las Vegas, Nevada — Western US Office",
                    "Coral Gables, Florida — Southeast Office",
                    "ACH · RTP® · FedNow · Push-to-Debit",
                  ].map((d) => (
                    <li key={d} className="flex items-center gap-3 font-body text-sm text-[#8A8A8A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C3E941] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-[#141414] rounded-2xl p-10 border border-[#2A2A2A]">
                <p className="font-display text-3xl text-[#C3E941] mb-2">EU</p>
                <h3 className="font-body font-bold text-white text-xl mb-4">Luxembourg, European Union</h3>
                <p className="font-body text-sm text-[#C9C9C9] leading-[1.7] mb-6">
                  Our European processing center. Direct access to SEPA payment infrastructure and international wire capabilities for global clients.
                </p>
                <ul className="space-y-2">
                  {["Secondary processing center", "SEPA payment infrastructure", "International wire · ISO · ML formats"].map((d) => (
                    <li key={d} className="flex items-center gap-3 font-body text-sm text-[#8A8A8A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C3E941] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CTABlock
        headline="30 Years of Trust. Ready When You Are."
        subhead="The infrastructure is proven. The relationships are real. Start a conversation about what NoCheck can do for your organization."
        contact={false}
      />
    </>
  );
}
