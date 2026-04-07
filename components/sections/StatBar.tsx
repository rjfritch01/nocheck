"use client";

import CountUp from "@/components/ui/CountUp";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

const stats = [
  { prefix: "", value: 30, suffix: "+", label: "Years in Business", decimals: 0 },
  { prefix: "$", value: 0, suffix: "B+", label: "Processed Annually", decimals: 0, display: "Billions" },
  { prefix: "", value: 99.99, suffix: "%", label: "Uptime SLA", decimals: 2 },
  { prefix: "", value: 250, suffix: "ms", label: "Response Time", decimals: 0 },
  { prefix: "", value: 2, suffix: "", label: "Continents — US + EU", decimals: 0 },
  { prefix: "", value: 4, suffix: "", label: "Banking Partners", decimals: 0 },
];

export default function StatBar() {
  return (
    <section className="bg-[#141414] py-16 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile/tablet: 2-col grid with gaps. Desktop: single row with dividers */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-12 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center lg:px-6 xl:px-8">
                {/* Number */}
                <div className="font-display text-[2rem] md:text-[2.25rem] leading-none text-[#C3E941] mb-1.5">
                  {stat.display ? (
                    <span>{stat.display}</span>
                  ) : (
                    <CountUp
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  )}
                </div>
                {/* Label — clearly distinct */}
                <p className="font-body text-[13px] uppercase tracking-[0.06em] text-white/50 leading-snug">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal delay={0.4}>
          <p className="text-center font-body text-xs text-[#8A8A8A] mt-12 uppercase tracking-[0.06em]">
            Preferred service provider since 1996 &nbsp;·&nbsp; Aflac Partner of the Year &nbsp;·&nbsp; Federal Reserve BPC Member
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
