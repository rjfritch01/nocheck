"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

const clients = ["Aflac", "AT&T", "Zurich", "Wheels, Inc.", "CGB Enterprises"];
const bankingPartners = ["JP Morgan Chase", "US Bank", "Bank of America", "Key Bank"];
const badges = [
  "FedNow Service Provider",
  "Federal Reserve BPC Member",
  "PCI-DSS Compliant",
  "SOC2 Compliant",
  "HIPAA Compliant",
];

export default function TrustStrip() {
  return (
    <section className="bg-[#1A1A1A] py-16 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="space-y-10">
          {/* Label */}
          <StaggerItem>
            <p className="text-center font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8A8A8A]">
              Trusted by the companies that can&apos;t afford to get payments wrong.
            </p>
          </StaggerItem>

          {/* Client logos */}
          <StaggerItem>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clients.map((client) => (
                <div
                  key={client}
                  className="font-body font-bold text-base uppercase tracking-[0.06em] text-white/60 hover:text-white/100 transition-opacity duration-300 cursor-default"
                  /* TODO: Replace text with actual client logo SVG/image when available. Expected format: SVG, ~120x40px, white version */
                >
                  {client}
                </div>
              ))}
            </div>
          </StaggerItem>

          {/* Divider */}
          <StaggerItem>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#2A2A2A]" />
              <p className="font-body text-xs uppercase tracking-[0.1em] text-[#8A8A8A] font-bold shrink-0">
                Banking Partners
              </p>
              <div className="flex-1 h-px bg-[#2A2A2A]" />
            </div>
          </StaggerItem>

          {/* Banking partners */}
          <StaggerItem>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {bankingPartners.map((bank) => (
                <div
                  key={bank}
                  className="font-body font-bold text-sm uppercase tracking-[0.06em] text-white/50 hover:text-white/80 transition-opacity duration-300 cursor-default"
                  /* TODO: Replace text with actual banking partner logo SVG when available. Expected format: SVG, ~100x32px, white version */
                >
                  {bank}
                </div>
              ))}
            </div>
          </StaggerItem>

          {/* Compliance badges */}
          <StaggerItem>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C3E941]/10 border border-[#C3E941]/20 font-body text-xs font-bold uppercase tracking-[0.06em] text-[#C3E941]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
