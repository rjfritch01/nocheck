import type { Metadata } from "next";
import Image from "next/image";
import CTABlock from "@/components/sections/CTABlock";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Case Studies — Aflac & AT&T | NoCheck — Enterprise Payment Platform",
  description:
    "Aflac Partner of the Year for Innovation and Technology. 99.999% processing accuracy for AT&T. See how NoCheck delivers for the enterprises that can't afford to get payments wrong.",
  alternates: { canonical: "https://nocheck.com/case-studies" },
};

export default function CaseStudiesPage() {
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
              Case Studies
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] lg:text-[5rem] leading-none uppercase tracking-tight text-white mb-6 max-w-4xl">
              Don&apos;t Take Our Word for It.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-lg text-[#C9C9C9] max-w-2xl leading-[1.7]">
              Two of America&apos;s most demanding enterprises trusted NoCheck with their payment operations. Here&apos;s what happened.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Aflac */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: case study info */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-2">Client</p>
                    {/* TODO: Replace with actual Aflac logo SVG when available */}
                    <h2 className="font-display text-4xl text-[#141414] uppercase">Aflac</h2>
                  </div>
                  <span className="px-5 py-2.5 rounded-full bg-[#C3E941]/10 border border-[#C3E941]/30 font-body text-sm font-bold uppercase tracking-[0.06em] text-[#C3E941]">
                    Partner of the Year 2015
                  </span>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="mb-10">
                  <h3 className="font-body font-bold text-[#141414] text-xl mb-4">The Challenge</h3>
                  <p className="font-body text-lg text-[#5A5A5A] leading-[1.7]">
                    Aflac needed a secure, single sign-on enrollment portal for claims payments that was fast enough to keep up with their customer expectations — and invisible enough that policyholders never knew they&apos;d left Aflac&apos;s ecosystem.
                  </p>
                  <p className="font-body text-lg text-[#5A5A5A] leading-[1.7] mt-4">
                    The challenge wasn&apos;t just technical — it was brand. Aflac had built deep policyholder trust over decades, and any payment experience that felt &ldquo;third-party&rdquo; risked undermining that trust at the worst possible moment: when a policyholder was filing a claim.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="mb-10">
                  <h3 className="font-body font-bold text-[#141414] text-xl mb-4">The Solution</h3>
                  <p className="font-body text-lg text-[#5A5A5A] leading-[1.7]">
                    NoCheck designed a Branded Transaction Portal — a fully white-labeled payment hub integrated directly into Aflac&apos;s claims workflow. The entire enrollment and payment experience lives under Aflac&apos;s brand identity, using Aflac&apos;s fonts, colors, and domain.
                  </p>
                  <p className="font-body text-lg text-[#5A5A5A] leading-[1.7] mt-4">
                    Policyholders experience single sign-on through Aflac&apos;s existing authentication infrastructure. The payment selection interface — which gives policyholders the full range of digital payout options — is indistinguishable from the rest of the Aflac digital experience.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div>
                  <h3 className="font-body font-bold text-[#141414] text-xl mb-6">The Results</h3>
                  <StaggerContainer className="space-y-4">
                    {[
                      "99.99% system uptime — meeting Aflac's demanding SLA requirements",
                      "Monthly system upgrades — the platform continuously improves without downtime",
                      "Complete security invisible to end users — state-of-the-art firewalls with real-time intrusion detection",
                      "Policyholders never leave the Aflac brand experience — zero visible handoff to a third-party system",
                      "Named Aflac's 2015 Partner of the Year for Innovation and Technology",
                    ].map((result, i) => (
                      <StaggerItem key={i}>
                        <div className="flex items-start gap-4">
                          <span className="w-2 h-2 rounded-full bg-[#C3E941] mt-2.5 shrink-0" />
                          <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">{result}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </SectionReveal>
            </div>

            {/* Right: key stat */}
            <div className="space-y-6">
              <SectionReveal delay={0.2}>
                <div className="bg-[#141414] rounded-2xl p-8 text-center border border-[#2A2A2A]">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-4">System Uptime</p>
                  <div className="font-display text-[2.25rem] text-[#C3E941] mb-1">99.99%</div>
                  <p className="font-body text-[13px] uppercase tracking-[0.06em] text-white/50">SLA-backed. In production.</p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E5E5E3]">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-4">Recognition</p>
                  <div className="flex items-center gap-4 mb-3">
                    <Image
                      src="/logos/badge-seal-dark.png"
                      alt="NoCheck Brand Seal"
                      width={48}
                      height={48}
                      className="w-12 h-12 shrink-0"
                    />
                    <div>
                      <p className="font-body text-base font-bold text-[#141414]">Aflac Partner of the Year 2015</p>
                      <p className="font-body text-sm text-[#5A5A5A]">For Innovation and Technology</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.4}>
                <div className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E5E5E3]">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-4">Industry</p>
                  <p className="font-body text-base font-bold text-[#141414]">Insurance</p>
                  <p className="font-body text-sm text-[#5A5A5A] mt-2">Claims payment disbursements</p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* AT&T */}
      <section className="bg-[#F7F7F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: case study */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="mb-10">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-2">Client</p>
                  {/* TODO: Replace with actual AT&T logo SVG when available */}
                  <h2 className="font-display text-4xl text-[#141414] uppercase">AT&amp;T</h2>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="mb-10">
                  <h3 className="font-body font-bold text-[#141414] text-xl mb-4">The Challenge</h3>
                  <p className="font-body text-lg text-[#5A5A5A] leading-[1.7]">
                    AT&amp;T wanted to increase electronic enrollment rates versus paper applications. Customers consistently preferred mailing in paper forms — which required opening, sorting, scanning, indexing, data entry, and validation at AT&amp;T&apos;s end.
                  </p>
                  <p className="font-body text-lg text-[#5A5A5A] leading-[1.7] mt-4">
                    The operational cost of paper processing was significant. But AT&amp;T didn&apos;t want to simply eliminate the paper option — they needed to serve customers through their preferred channel while achieving digital accuracy and real-time operational visibility.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="mb-10">
                  <h3 className="font-body font-bold text-[#141414] text-xl mb-4">The Solution</h3>
                  <p className="font-body text-lg text-[#5A5A5A] leading-[1.7]">
                    NoCheck deployed its Branded Call Center and Application Forms Verification system to process paper applications with digital precision — scanning, indexing, validating, and entering data at 99.999% accuracy rates while giving AT&amp;T real-time reporting through a dedicated Administration Portal.
                  </p>
                  <p className="font-body text-lg text-[#5A5A5A] leading-[1.7] mt-4">
                    The result: customers could enroll through their preferred method — paper or digital — without AT&amp;T sacrificing operational efficiency. The NoCheck Administration Portal gave AT&amp;T&apos;s finance team 24/7 access to enrollment status, processing history, and exception management.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div>
                  <h3 className="font-body font-bold text-[#141414] text-xl mb-6">The Results</h3>
                  <StaggerContainer className="space-y-4">
                    {[
                      "99.999% processing accuracy — fewer exceptions and corrections than any prior system",
                      "24/7 access to enrollment status, history, and corrections via the NoCheck Administration Portal",
                      "Customers served through their preferred enrollment method — paper or digital — without sacrificing AT&T's operational efficiency",
                      "Real-time reporting and exception flagging eliminated end-of-day reconciliation backlog",
                    ].map((result, i) => (
                      <StaggerItem key={i}>
                        <div className="flex items-start gap-4">
                          <span className="w-2 h-2 rounded-full bg-[#C3E941] mt-2.5 shrink-0" />
                          <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">{result}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </SectionReveal>
            </div>

            {/* Right: key stat */}
            <div className="space-y-6">
              <SectionReveal delay={0.2}>
                <div className="bg-[#141414] rounded-2xl p-8 text-center border border-[#2A2A2A]">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-4">Processing Accuracy</p>
                  <div className="font-display text-[2.25rem] text-[#C3E941] mb-1">99.999%</div>
                  <p className="font-body text-[13px] uppercase tracking-[0.06em] text-white/50">In production.</p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="bg-white rounded-2xl p-8 border border-[#E5E5E3]">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-4">Services Used</p>
                  <ul className="space-y-2">
                    {["Branded Call Center", "Forms Processing", "Administration Portal", "Real-Time Reporting"].map((s) => (
                      <li key={s} className="flex items-center gap-3 font-body text-sm text-[#5A5A5A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3E941] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.4}>
                <div className="bg-white rounded-2xl p-8 border border-[#E5E5E3]">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-4">Industry</p>
                  <p className="font-body text-base font-bold text-[#141414]">Telecommunications</p>
                  <p className="font-body text-sm text-[#5A5A5A] mt-2">Enrollment processing & administration</p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to Be the Next Success Story?"
        subhead="Aflac and AT&T chose NoCheck. See what 30 years of proven infrastructure can do for your payment operations."
        contact={false}
      />
    </>
  );
}
