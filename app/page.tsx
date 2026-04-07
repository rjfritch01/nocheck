import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import StatBar from "@/components/sections/StatBar";
import CTABlock from "@/components/sections/CTABlock";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "NoCheck — Enterprise Payment Platform | Move Billions Without Checks",
  description:
    "Replace paper checks with instant digital disbursements. Trusted by Aflac, AT&T, and leading institutions to move billions securely, instantly, and at scale. PCI-DSS · SOC2 · HIPAA compliant.",
  alternates: { canonical: "https://nocheck.com" },
  openGraph: {
    title: "NoCheck — Enterprise Payment Platform",
    description:
      "Trusted by Aflac, AT&T, and leading institutions. Move billions without checks.",
    url: "https://nocheck.com",
  },
};

const paymentMethods = [
  "ACH / Same-Day ACH",
  "Real-Time Payments (RTP®)",
  "FedNow® Service",
  "Push-to-Debit",
  "Prepaid Cards",
  "Virtual Cards",
  "Electronic Checks",
  "PayPal · Apple Pay · Google Pay",
  "SEPA & International Wire",
  "Digital Wallet Delivery",
];

const platformCapabilities = [
  {
    title: "Branded Transaction Portals",
    description:
      "Fully white-labeled payment hubs — your fonts, your colors, your domain. Recipients never leave your brand experience.",
  },
  {
    title: "Branded Call Center",
    description:
      "On-shore, US-based call center staff trained to represent your brand. Not a generic outsourced line.",
  },
  {
    title: "Enrollment & Forms Processing",
    description:
      "Secure enrollment with real-time identity and bank account verification. W-8, W-9, and EIN validation built in.",
  },
  {
    title: "Administration Portals",
    description:
      "Role-based dashboards for authorized staff. Granular access controls aligned to your org structure.",
  },
  {
    title: "Multi-Rail Orchestration",
    description:
      "Route payments across ACH, RTP®, FedNow, SEPA, wire, debit, prepaid, and digital wallet rails — automatically.",
  },
  {
    title: "Prepaid Card Disbursement",
    description:
      "Reach unbanked and underbanked recipients. Critical for government benefits, insurance claims, and university refunds.",
  },
  {
    title: "Dual Payment Processing",
    description:
      "Proprietary software for complex disbursements — multiple claimants, multi-party settlements, repair shops, and payees.",
  },
  {
    title: "e2check",
    description:
      "Our consumer-facing electronic check platform extends NoCheck infrastructure to direct-to-consumer payment delivery.",
  },
];

const securityItems = [
  { label: "PCI-DSS Compliant", description: "Payment Card Industry Data Security Standard validated annually." },
  { label: "SOC2 Compliant", description: "Independently audited controls for security, availability, and confidentiality." },
  { label: "HIPAA Compliant", description: "Protected health information handled with required safeguards for healthcare data." },
  { label: "AES 256 Encryption", description: "End-to-end encryption from your system to our data vault. All stored data encrypted at rest." },
  { label: "Proprietary Fraud Detection", description: "IP filtering, duplicate detection, SSN monitoring, and Early Warning System verification." },
  { label: "Dual Infrastructure", description: "Primary data center in Michigan. Secondary processing in Luxembourg, EU. Always on." },
];

const industries = [
  {
    name: "Insurance",
    description: "Claims payouts, policy refunds, settlements, and medical provider payments.",
    href: "/solutions/insurance",
    callout: "Aflac Partner of the Year",
  },
  {
    name: "Healthcare & Medical Payers",
    description: "HIPAA-compliant disbursements for health plans, TPAs, and pharmacy benefit managers.",
    href: "/solutions/healthcare",
  },
  {
    name: "Government",
    description: "State unemployment, tax refunds, grant disbursements, and program payments.",
    href: "/solutions/government",
  },
  {
    name: "Ticketing & Entertainment",
    description: "Real-time payments for ticket sellers, event settlements, and multi-party payouts.",
    href: "/solutions/ticketing",
  },
  {
    name: "Universities & Education",
    description: "Student refunds, financial aid disbursements, and research grants.",
    href: "/solutions/universities",
  },
  {
    name: "Transportation & Logistics",
    description: "Serving Wheels, Inc. and CGB Enterprises plus next-gen EV payment processing.",
    href: "/solutions/transportation",
  },
  {
    name: "Financial Institutions",
    description: "Processing at the highest levels of security and compliance alongside JP Morgan Chase, US Bank, BofA, and Key Bank.",
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#141414] flex items-center overflow-hidden">
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(195,233,65,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Faint lime glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C3E941]/[0.03] blur-3xl pointer-events-none" />

        {/* Icon — large background brand element, offset right */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none select-none hidden lg:block">
          <Image
            src="/logos/icon-lime-square-dark.png"
            alt=""
            fill
            className="object-contain opacity-[0.45]"
            aria-hidden="true"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="max-w-4xl">
            {/* Pre-label */}
            <SectionReveal>
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[#C3E941]" />
                <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C3E941]">
                  Enterprise Payment Platform
                </span>
              </div>
            </SectionReveal>

            {/* Headline */}
            <SectionReveal delay={0.1}>
              <h1 className="font-display text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-none uppercase tracking-tight text-white mb-8">
                Move Money
                <br />
                <span className="text-[#C3E941]">Forward.</span>
                <br />
                Without Checks.
              </h1>
            </SectionReveal>

            {/* Subheadline */}
            <SectionReveal delay={0.2}>
              <p className="font-body text-lg md:text-xl text-[#C9C9C9] max-w-2xl leading-[1.7] mb-12">
                The enterprise payment platform trusted by Aflac, AT&amp;T, and leading institutions to move billions — securely, instantly, and at scale.
              </p>
            </SectionReveal>

            {/* CTAs */}
            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#C3E941] text-[#141414] font-bold uppercase tracking-[0.04em] px-10 py-4 rounded-lg hover:bg-[#D4F055] transition-all duration-200 hover:scale-[1.02] font-body text-base"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold uppercase tracking-[0.04em] px-10 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 font-body text-base"
                >
                  Talk to Sales
                </Link>
              </div>
            </SectionReveal>

            {/* Social proof micro-strip */}
            <SectionReveal delay={0.4}>
              <div className="mt-16 pt-10 border-t border-[#2A2A2A]">
                <div className="flex flex-wrap gap-6 items-center">
                  <span className="font-body text-xs uppercase tracking-[0.1em] text-[#8A8A8A] font-bold">
                    Trusted by:
                  </span>
                  {["Aflac", "AT&T", "Zurich", "JP Morgan Chase"].map((name) => (
                    <span
                      key={name}
                      className="font-body text-sm font-bold uppercase tracking-[0.06em] text-white/60"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ──────────────────────────────────────────── */}
      <TrustStrip />

      {/* ─── STAT BAR ─────────────────────────────────────────────── */}
      <StatBar />

      {/* ─── THE PROBLEM ──────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionReveal>
                <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8A8A8A] mb-4 block">
                  The Problem
                </span>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <h2 className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-none uppercase tracking-tight text-[#141414] mb-8">
                  Paper Checks Cost More Than You Think.
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="space-y-5 font-body text-lg text-[#5A5A5A] leading-[1.7]">
                  <p>
                    Every check your organization sends carries hidden costs — printing, postage, manual reconciliation, fraud exposure, and the operational drag of waiting days or weeks for funds to land.
                  </p>
                  <p>
                    The average paper check costs{" "}
                    <strong className="text-[#141414]">$4–$12 to process</strong>. Multiply that across thousands of disbursements per month, and checks become one of the most expensive line items in your payment operations.
                  </p>
                  <p>
                    Meanwhile, check fraud continues to accelerate. Recipients wait. Support teams field &ldquo;where&apos;s my payment?&rdquo; calls. And finance teams burn hours on manual reconciliation that should take seconds.
                  </p>
                  <p className="font-bold text-[#141414]">
                    Your payments infrastructure shouldn&apos;t be a liability.
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Visual: cost comparison */}
            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <div className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E5E5E3]">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-6">
                    Cost per disbursement
                  </p>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm font-bold text-[#141414]">Paper Check</span>
                      <span className="font-body text-sm font-bold text-[#141414]">$4–$12</span>
                    </div>
                    <div className="h-3 bg-[#E5E5E3] rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-[#8A8A8A] rounded-full" />
                    </div>
                    <p className="font-body text-xs text-[#8A8A8A] mt-2">+ 7–14 day delivery · fraud exposure · manual reconciliation</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm font-bold text-[#141414]">NoCheck Digital</span>
                      <span className="font-body text-sm font-bold text-[#C3E941]">Fractions of the cost</span>
                    </div>
                    <div className="h-3 bg-[#E5E5E3] rounded-full overflow-hidden">
                      <div className="h-full w-[12%] bg-[#C3E941] rounded-full" />
                    </div>
                    <p className="font-body text-xs text-[#8A8A8A] mt-2">Instant delivery · fraud-protected · full audit trail</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F7F7F5] rounded-2xl p-6 border border-[#E5E5E3] text-center">
                    <div className="font-display text-3xl text-[#8A8A8A] mb-2">7–14</div>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A]">Days by check</p>
                  </div>
                  <div className="bg-[#141414] rounded-2xl p-6 border border-[#2A2A2A] text-center">
                    <div className="font-display text-3xl text-[#C3E941] mb-2">&lt;60s</div>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-white/70">By NoCheck</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionReveal>
              <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8A8A8A] mb-4 block">
                The Solution
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-none uppercase tracking-tight text-[#141414] mb-8">
                The Proven Way to Move Money.
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="font-body text-lg text-[#5A5A5A] leading-[1.7]">
                NoCheck replaces outdated check workflows with a secure, multi-rail digital payment platform — giving recipients immediate access to funds while eliminating cost and complexity from your operations.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.1}>
            <p className="text-center font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-8">
              Every payment method. One platform.
            </p>
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {paymentMethods.map((method) => (
              <StaggerItem key={method}>
                <div className="bg-white border border-[#E5E5E3] rounded-xl px-4 py-3 text-center hover:border-[#C3E941] hover:shadow-sm transition-all duration-200">
                  <span className="font-body text-sm font-bold text-[#141414]">{method}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <SectionReveal delay={0.4}>
            <p className="text-center font-body text-base italic text-[#5A5A5A] mt-12">
              Recipients choose how they receive funds. You choose how fast you want to move.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8A8A8A] mb-4 block">
                How It Works
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-none uppercase tracking-tight text-[#141414]">
                Enterprise-Grade for You.
                <br />
                Instant for Your Recipients.
              </h2>
            </SectionReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* For operations */}
            <div>
              <SectionReveal>
                <h3 className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-8 border-b border-[#E5E5E3] pb-4">
                  For Your Operations
                </h3>
              </SectionReveal>
              <StaggerContainer className="space-y-10">
                {[
                  {
                    n: "01",
                    title: "Integrate Once",
                    body: "Connect via API, secure file upload, or our branded dashboard. NoCheck slots into your existing systems — no rip-and-replace.",
                  },
                  {
                    n: "02",
                    title: "Automate Processing",
                    body: "Payments are validated, fraud-screened, and routed across the optimal rail automatically. Our proprietary fraud detection catches bad actors before funds move.",
                  },
                  {
                    n: "03",
                    title: "Track Everything",
                    body: "Real-time reporting, full audit trails, and role-based administration portals give your team complete visibility into every transaction.",
                  },
                ].map((step) => (
                  <StaggerItem key={step.n}>
                    <div className="flex gap-6">
                      <div className="shrink-0">
                        <span className="font-display text-4xl text-[#C3E941] leading-none">{step.n}</span>
                      </div>
                      <div>
                        <h4 className="font-body font-bold text-lg text-[#141414] mb-2">{step.title}</h4>
                        <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">{step.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* For recipients */}
            <div>
              <SectionReveal>
                <h3 className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-8 border-b border-[#E5E5E3] pb-4">
                  For Your Recipients
                </h3>
              </SectionReveal>
              <StaggerContainer className="space-y-10">
                {[
                  {
                    n: "01",
                    title: "Get Notified",
                    body: "Recipients receive a secure, branded notification via email or SMS — consistent with your organization's identity.",
                  },
                  {
                    n: "02",
                    title: "Choose Their Method",
                    body: "They select their preferred payout option from the full menu of payment rails — from ACH to digital wallets to prepaid cards.",
                  },
                  {
                    n: "03",
                    title: "Receive Funds Instantly",
                    body: "Money arrives in minutes, not days. No checks to deposit. No waiting. No calling your support team.",
                  },
                ].map((step) => (
                  <StaggerItem key={step.n}>
                    <div className="flex gap-6">
                      <div className="shrink-0">
                        <span className="font-display text-4xl text-[#C3E941] leading-none">{step.n}</span>
                      </div>
                      <div>
                        <h4 className="font-body font-bold text-lg text-[#141414] mb-2">{step.title}</h4>
                        <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">{step.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PLATFORM ─────────────────────────────────────────── */}
      <section className="bg-[#141414] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <SectionReveal>
              <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C3E941] mb-4 block">
                The Platform
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-none uppercase tracking-tight text-white mb-6">
                More Than Payouts. A Complete Payment Operations Platform.
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="font-body text-lg text-[#8A8A8A] leading-[1.7]">
                Most digital payout tools stop at sending a link. NoCheck is the full infrastructure layer.
              </p>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformCapabilities.map((cap, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-2xl p-8 h-full hover:border-[#C3E941]/30 transition-colors duration-300">
                  <h3 className="font-body font-bold text-white text-base mb-3">{cap.title}</h3>
                  <p className="font-body text-sm text-[#8A8A8A] leading-[1.7]">{cap.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SECURITY & COMPLIANCE ────────────────────────────────── */}
      <section className="bg-[#F7F7F5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionReveal>
              <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8A8A8A] mb-4 block">
                Security & Compliance
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-none uppercase tracking-tight text-[#141414] mb-6">
                Bank-Grade Security.
                <br />
                Audited Annually.
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="font-body text-lg text-[#5A5A5A] leading-[1.7]">
                We don&apos;t just say we&apos;re secure. We prove it — every year, to the most demanding auditors in financial services.
              </p>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityItems.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-[#E5E5E3] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-[#C3E941] mt-2" />
                    <div>
                      <h3 className="font-body font-bold text-[#141414] text-base mb-2">{item.label}</h3>
                      <p className="font-body text-sm text-[#5A5A5A] leading-[1.6]">{item.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <SectionReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/security"
                className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-[0.06em] text-[#141414] hover:text-[#C3E941] transition-colors"
              >
                View Full Security Details <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionReveal>
              <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8A8A8A] mb-4 block">
                Industries
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-none uppercase tracking-tight text-[#141414]">
                Proven Across the Industries That Matter Most.
              </h2>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <StaggerItem key={i}>
                <Link
                  href={ind.href}
                  className="group block bg-[#F7F7F5] border border-[#E5E5E3] rounded-2xl p-8 hover:border-[#141414] hover:bg-[#141414] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-body font-bold text-[#141414] text-lg group-hover:text-white transition-colors pr-4">
                      {ind.name}
                    </h3>
                    <ArrowRight
                      size={16}
                      className="text-[#8A8A8A] group-hover:text-[#C3E941] transition-colors shrink-0 mt-1"
                    />
                  </div>
                  <p className="font-body text-sm text-[#5A5A5A] leading-[1.6] group-hover:text-[#C9C9C9] transition-colors">
                    {ind.description}
                  </p>
                  {ind.callout && (
                    <span className="inline-block mt-4 px-3 py-1 rounded-full bg-[#C3E941]/10 border border-[#C3E941]/30 font-body text-xs font-bold uppercase tracking-[0.06em] text-[#C3E941]">
                      {ind.callout}
                    </span>
                  )}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <SectionReveal delay={0.4}>
            <p className="text-center font-body text-sm text-[#8A8A8A] mt-10">
              Also serving: Energy, utilities, communications, construction, music royalty, and federal government.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ─── CASE STUDIES ─────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionReveal>
              <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8A8A8A] mb-4 block">
                Case Studies
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-none uppercase tracking-tight text-[#141414]">
                Don&apos;t Take Our Word for It.
              </h2>
            </SectionReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Aflac */}
            <SectionReveal delay={0.1}>
              <div className="bg-white border border-[#E5E5E3] rounded-2xl p-10 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-1">Client</p>
                    {/* TODO: Replace with actual Aflac logo SVG when available. Expected: ~100px wide, color version */}
                    <h3 className="font-display text-2xl text-[#141414] uppercase">Aflac</h3>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-[#C3E941]/10 border border-[#C3E941]/30 font-body text-xs font-bold uppercase tracking-[0.06em] text-[#C3E941]">
                    Partner of the Year
                  </span>
                </div>

                <div className="mb-8">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">The Challenge</p>
                  <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">
                    Aflac needed a secure, single sign-on enrollment portal for claims payments — fast enough for their customer expectations, invisible enough that policyholders never left Aflac&apos;s ecosystem.
                  </p>
                </div>

                <div className="border-t border-[#E5E5E3] pt-8">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-6">The Results</p>
                  <div className="text-center mb-6">
                    <div className="font-display text-[2.25rem] text-[#C3E941] mb-1">99.99%</div>
                    <p className="font-body text-[13px] uppercase tracking-[0.06em] text-[#8A8A8A]">System Uptime</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Branded Transaction Portal seamlessly integrated into claims workflow",
                      "State-of-the-art firewalls with intrusion detection",
                      "Named Aflac's 2015 Partner of the Year for Innovation and Technology",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-sm text-[#5A5A5A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3E941] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>

            {/* AT&T */}
            <SectionReveal delay={0.2}>
              <div className="bg-white border border-[#E5E5E3] rounded-2xl p-10 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-1">Client</p>
                    {/* TODO: Replace with actual AT&T logo SVG when available. Expected: ~100px wide, color version */}
                    <h3 className="font-display text-2xl text-[#141414] uppercase">AT&amp;T</h3>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">The Challenge</p>
                  <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">
                    AT&amp;T wanted to increase electronic enrollment rates versus paper applications. Customers preferred mailing paper forms — requiring opening, sorting, scanning, indexing, data entry, and validation.
                  </p>
                </div>

                <div className="border-t border-[#E5E5E3] pt-8">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-6">The Results</p>
                  <div className="text-center mb-6">
                    <div className="font-display text-[2.25rem] text-[#C3E941] mb-1">99.999%</div>
                    <p className="font-body text-[13px] uppercase tracking-[0.06em] text-[#8A8A8A]">Processing Accuracy</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "24/7 access to enrollment status, history, and corrections",
                      "Real-time reporting through dedicated Administration Portal",
                      "Customers served through preferred method without sacrificing operational efficiency",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-sm text-[#5A5A5A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3E941] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-[0.06em] text-[#141414] hover:text-[#C3E941] transition-colors"
              >
                View Full Case Studies <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── ABOUT / COMPANY BRIEF ────────────────────────────────── */}
      <section className="bg-[#141414] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionReveal>
                <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C3E941] mb-4 block">
                  The Company
                </span>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <h2 className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-none uppercase tracking-tight text-white mb-8">
                  30+ Years of Moving Money Forward.
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="space-y-5 font-body text-lg text-[#C9C9C9] leading-[1.7]">
                  <p>
                    The NoCheck Group has been building financial internet applications since 1993. Founded by Charles &ldquo;Chuck&rdquo; Kopko, we&apos;ve spent three decades earning the trust of institutions that demand the most from their payment infrastructure.
                  </p>
                  <p>
                    Today, our systems facilitate the movement of billions of dollars annually — accurately, securely, and with the kind of agile service that enterprise clients expect from a true partner, not a vendor.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="mt-10">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-[0.06em] text-[#C3E941] hover:text-white transition-colors"
                  >
                    Learn More About NoCheck <ArrowRight size={14} />
                  </Link>
                </div>
              </SectionReveal>
            </div>

            <div className="space-y-6">
              <SectionReveal delay={0.2}>
                <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-2xl p-8">
                  <h3 className="font-body font-bold text-white text-base mb-3">Federal Reserve Partnership</h3>
                  <p className="font-body text-sm text-[#8A8A8A] leading-[1.7]">
                    Chuck Kopko is a Work Group Member of the Federal Reserve Business Payments Coalition (BPC), working to modernize B2B payments through innovation and lower-cost straight-through processing. NoCheck is a FedNow Service Provider Showcase participant.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-2xl p-8">
                  <h3 className="font-body font-bold text-white text-base mb-5">Banking Partners</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["JP Morgan Chase", "US Bank", "Bank of America", "Key Bank"].map((bank) => (
                      <div
                        key={bank}
                        className="font-body text-sm font-bold uppercase tracking-[0.04em] text-[#C9C9C9] py-3 px-4 bg-[#141414] rounded-lg border border-[#2A2A2A] text-center"
                        /* TODO: Replace with actual banking partner logo SVG when available */
                      >
                        {bank}
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-2xl p-8">
                  <h3 className="font-body font-bold text-white text-base mb-5">Global Infrastructure</h3>
                  <div className="flex gap-8 items-center">
                    <div className="text-center flex-1">
                      <p className="font-display text-2xl text-[#C3E941] mb-1">USA</p>
                      <p className="font-body text-xs uppercase tracking-[0.06em] text-[#8A8A8A]">Michigan<br />Primary Data Center</p>
                    </div>
                    <div className="w-px h-16 bg-[#2A2A2A]" />
                    <div className="text-center flex-1">
                      <p className="font-display text-2xl text-[#C3E941] mb-1">EU</p>
                      <p className="font-body text-xs uppercase tracking-[0.06em] text-[#8A8A8A]">Luxembourg<br />Secondary Processing</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <CTABlock
        headline="Eliminate Checks. Join the Companies That Already Have."
        subhead="Aflac did it. AT&T did it. Multiple state governments did it. Major health plans did it. Your organization can move billions faster, safer, and cheaper — starting with a conversation."
      />
    </>
  );
}
