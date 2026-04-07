import type { Metadata } from "next";
import CTABlock from "@/components/sections/CTABlock";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Security & Compliance | NoCheck — Enterprise Payment Platform",
  description:
    "PCI-DSS, SOC2, and HIPAA compliant. AES 256 encryption. Dual data centers in Michigan and Luxembourg. Proprietary fraud detection. Audited annually.",
  alternates: { canonical: "https://nocheck.com/security" },
};

const certifications = [
  {
    badge: "PCI-DSS",
    name: "Payment Card Industry Data Security Standard",
    description:
      "NoCheck maintains full PCI-DSS compliance, validated annually by an independent Qualified Security Assessor. Every cardholder data environment meets the strictest standards in the payment industry.",
  },
  {
    badge: "SOC2",
    name: "SOC2 Type II",
    description:
      "Our SOC2 audit covers security, availability, and confidentiality — the three trust service criteria most critical to enterprise payment operations. Independently assessed every year.",
  },
  {
    badge: "HIPAA",
    name: "Health Insurance Portability and Accountability Act",
    description:
      "Protected health information is handled with the full complement of HIPAA technical, administrative, and physical safeguards. NoCheck takes compliance responsibility for sensitive health data so you don't have to.",
  },
  {
    badge: "Data Privacy Framework",
    name: "International Data Privacy",
    description:
      "Our Luxembourg-based processing center operates under EU data protection frameworks, enabling compliant cross-border payment processing for organizations with European operations.",
  },
  {
    badge: "FedNow",
    name: "FedNow Service Provider Showcase",
    description:
      "Certified participant in the Federal Reserve's FedNow Service Provider Showcase — validated for real-time payment processing on Federal Reserve infrastructure.",
  },
  {
    badge: "Federal Reserve BPC",
    name: "Business Payments Coalition Member",
    description:
      "Active Work Group Member of the Federal Reserve Business Payments Coalition — directly involved in shaping national payment modernization standards.",
  },
];

const infrastructureItems = [
  {
    title: "Primary Data Center",
    location: "Michigan, USA",
    details: ["Tier III certified facility", "Physical access controls", "24/7 monitoring", "Redundant power and cooling"],
  },
  {
    title: "Secondary Processing Center",
    location: "Luxembourg, EU",
    details: ["European payment rail access", "SEPA processing capability", "EU data protection compliance", "Geographic redundancy"],
  },
];

const fraudItems = [
  {
    title: "Early Warning System",
    description: "Direct integration with the US banking system's Early Warning System for real-time bank account ownership verification and fraud flagging.",
  },
  {
    title: "Duplicate Enrollment Detection",
    description: "IP address filtering and fingerprinting to identify and block duplicate enrollment attempts before they reach the payment stage.",
  },
  {
    title: "Duplicate Bank Account Detection",
    description: "Cross-enrollment monitoring to identify when the same bank account is being used across multiple recipient profiles.",
  },
  {
    title: "SSN Reuse Monitoring",
    description: "Real-time detection of Social Security Number reuse patterns consistent with identity theft and synthetic identity fraud.",
  },
  {
    title: "Real-Time Account Verification",
    description: "Every bank account is verified for ownership and active status before a payment is issued — not after.",
  },
  {
    title: "Intrusion Detection",
    description: "State-of-the-art firewall infrastructure with real-time intrusion detection and alerting across all payment processing systems.",
  },
];

export default function SecurityPage() {
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
              Security & Compliance
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] lg:text-[5rem] leading-none uppercase tracking-tight text-white mb-8 max-w-4xl">
              Bank-Grade Security. Audited Annually.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-lg text-[#C9C9C9] max-w-2xl leading-[1.7]">
              We don&apos;t just say we&apos;re secure. We prove it — every year, to the most demanding auditors in financial services.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight text-[#141414] mb-12">
              Certifications & Affiliations
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#F7F7F5] border border-[#E5E5E3] rounded-2xl p-8 h-full hover:shadow-md transition-shadow duration-300">
                  <span className="inline-block px-4 py-2 rounded-full bg-[#141414] font-body text-xs font-bold uppercase tracking-[0.08em] text-[#C3E941] mb-6">
                    {cert.badge}
                  </span>
                  <h3 className="font-body font-bold text-[#141414] text-base mb-3">{cert.name}</h3>
                  <p className="font-body text-sm text-[#5A5A5A] leading-[1.7]">{cert.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Encryption */}
      <section className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight text-white mb-6">
                  AES 256 Encryption End-to-End
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <div className="space-y-4 font-body text-lg text-[#C9C9C9] leading-[1.7]">
                  <p>
                    Every piece of data that enters the NoCheck system is encrypted using AES 256 — the same standard used by the US government for classified information.
                  </p>
                  <p>
                    Encryption is applied end-to-end: from your system to our API, throughout our processing pipeline, and at rest in our data vaults. There is no point in the payment lifecycle where sensitive data is stored in plaintext.
                  </p>
                </div>
              </SectionReveal>
            </div>
            <SectionReveal delay={0.2}>
              <div className="space-y-3">
                {[
                  { stage: "Transit", detail: "TLS 1.3 for all API communication" },
                  { stage: "Processing", detail: "AES 256 at every processing stage" },
                  { stage: "Storage", detail: "AES 256 encryption at rest in data vaults" },
                  { stage: "Backup", detail: "Encrypted backups, geographically distributed" },
                ].map((item) => (
                  <div key={item.stage} className="flex items-center gap-6 bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl p-5">
                    <span className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] w-24 shrink-0">{item.stage}</span>
                    <div className="flex-1 h-px bg-[#2A2A2A]" />
                    <span className="font-body text-sm text-white">{item.detail}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-[#F7F7F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight text-[#141414] mb-12">
              Dual-Continent Infrastructure
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {infrastructureItems.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#E5E5E3] rounded-2xl p-8 shadow-sm">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-2">{item.title}</p>
                  <h3 className="font-display text-2xl text-[#141414] mb-6">{item.location}</h3>
                  <ul className="space-y-3">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 font-body text-sm text-[#5A5A5A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3E941] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="bg-[#141414] rounded-2xl p-8 border border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left md:px-4">
                <span className="font-display text-[2rem] md:text-[2.25rem] text-[#C3E941] leading-none block mb-1">99.99%</span>
                <p className="font-body text-[13px] uppercase tracking-[0.06em] text-white/50">Uptime SLA</p>
              </div>
              <div className="h-px md:h-10 w-full md:w-px bg-[#2A2A2A]" />
              <div className="text-center md:text-left md:px-4">
                <span className="font-display text-[2rem] md:text-[2.25rem] text-[#C3E941] leading-none block mb-1">250ms</span>
                <p className="font-body text-[13px] uppercase tracking-[0.06em] text-white/50">Response Time</p>
              </div>
              <div className="h-px md:h-10 w-full md:w-px bg-[#2A2A2A]" />
              <div className="text-center md:text-left md:px-4">
                <span className="font-display text-[2rem] md:text-[2.25rem] text-[#C3E941] leading-none block mb-1">2</span>
                <p className="font-body text-[13px] uppercase tracking-[0.06em] text-white/50">Data Centers</p>
              </div>
              <div className="h-px md:h-10 w-full md:w-px bg-[#2A2A2A]" />
              <div className="text-center md:text-left md:px-4">
                <span className="font-display text-[2rem] md:text-[2.25rem] text-[#C3E941] leading-none block mb-1">US + EU</span>
                <p className="font-body text-[13px] uppercase tracking-[0.06em] text-white/50">Continents</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Fraud Prevention */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-none uppercase tracking-tight text-[#141414] mb-4">
              Proprietary Fraud Detection
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-lg text-[#5A5A5A] leading-[1.7] max-w-2xl mb-12">
              NoCheck&apos;s fraud detection system goes beyond standard industry tools — with direct access to US banking infrastructure and proprietary detection layers built over three decades.
            </p>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fraudItems.map((item, i) => (
              <StaggerItem key={i}>
                <div className="border-l-2 border-[#C3E941] pl-6">
                  <h3 className="font-body font-bold text-[#141414] text-base mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-[#5A5A5A] leading-[1.7]">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABlock
        headline="Security You Can Show Your Board."
        subhead="PCI-DSS. SOC2. HIPAA. Federal Reserve. Request a demo and get access to our full compliance documentation."
        contact={false}
      />
    </>
  );
}
