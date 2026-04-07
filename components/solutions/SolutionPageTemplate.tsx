import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABlock from "@/components/sections/CTABlock";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

interface Benefit {
  title: string;
  description: string;
}

interface CaseStudy {
  client: string;
  challenge: string;
  result: string;
  resultLabel: string;
  award?: string;
  bullets: string[];
}

interface ComplianceNote {
  badge: string;
  description: string;
}

interface SolutionPageProps {
  hero: {
    label: string;
    headline: string;
    subhead: string;
  };
  overview: {
    body: string[];
    callout?: string;
  };
  benefits: Benefit[];
  useCases: string[];
  howItWorks?: string;
  caseStudy?: CaseStudy;
  compliance?: ComplianceNote[];
  cta: {
    headline: string;
    subhead?: string;
  };
}

export default function SolutionPageTemplate({
  hero,
  overview,
  benefits,
  useCases,
  howItWorks,
  caseStudy,
  compliance,
  cta,
}: SolutionPageProps) {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#141414] min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(195,233,65,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-[#C3E941]/[0.03] blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <SectionReveal>
            <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C3E941] mb-4 block">
              {hero.label}
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-none uppercase tracking-tight text-white mb-6 max-w-4xl">
              {hero.headline}
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-lg text-[#C9C9C9] max-w-2xl leading-[1.7] mb-10">
              {hero.subhead}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#C3E941] text-[#141414] font-bold uppercase tracking-[0.04em] px-10 py-4 rounded-lg hover:bg-[#D4F055] transition-all duration-200 hover:scale-[1.02] font-body text-base"
            >
              Request a Demo
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ─── OVERVIEW ─────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {overview.body.map((para, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <p className="font-body text-lg text-[#5A5A5A] leading-[1.7] mb-6">{para}</p>
              </SectionReveal>
            ))}
            {overview.callout && (
              <SectionReveal delay={0.3}>
                <div className="mt-8 pl-6 border-l-2 border-[#C3E941]">
                  <p className="font-body text-base font-bold text-[#141414] leading-[1.7]">
                    {overview.callout}
                  </p>
                </div>
              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* ─── KEY BENEFITS ─────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="font-display text-[2.25rem] md:text-[2.75rem] leading-none uppercase tracking-tight text-[#141414] mb-12">
              Key Benefits
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-[#E5E5E3] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-body font-bold text-[#141414] text-lg mb-3">{benefit.title}</h3>
                  <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── USE CASES ────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionReveal>
                <h2 className="font-display text-[2.25rem] md:text-[2.75rem] leading-none uppercase tracking-tight text-[#141414] mb-10">
                  Use Cases
                </h2>
              </SectionReveal>
              <StaggerContainer className="flex flex-wrap gap-3">
                {useCases.map((uc, i) => (
                  <StaggerItem key={i}>
                    <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#F7F7F5] border border-[#E5E5E3] font-body text-sm font-bold text-[#141414]">
                      {uc}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {howItWorks && (
              <SectionReveal delay={0.2}>
                <div className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E5E5E3]">
                  <h3 className="font-body font-bold text-[#141414] text-base mb-4 uppercase tracking-[0.04em]">
                    How It Works
                  </h3>
                  <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">{howItWorks}</p>
                </div>
              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ───────────────────────────────────────────── */}
      {caseStudy && (
        <section className="bg-[#F7F7F5] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionReveal>
              <h2 className="font-display text-[2.25rem] md:text-[2.75rem] leading-none uppercase tracking-tight text-[#141414] mb-12">
                In Practice
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="bg-white border border-[#E5E5E3] rounded-2xl p-10 shadow-sm max-w-3xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#8A8A8A] mb-1">Client</p>
                    <h3 className="font-display text-2xl text-[#141414] uppercase">{caseStudy.client}</h3>
                  </div>
                  {caseStudy.award && (
                    <span className="px-4 py-2 rounded-full bg-[#C3E941]/10 border border-[#C3E941]/30 font-body text-xs font-bold uppercase tracking-[0.06em] text-[#C3E941]">
                      {caseStudy.award}
                    </span>
                  )}
                </div>

                <div className="mb-8">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-2">The Challenge</p>
                  <p className="font-body text-base text-[#5A5A5A] leading-[1.7]">{caseStudy.challenge}</p>
                </div>

                <div className="border-t border-[#E5E5E3] pt-8">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-[#8A8A8A] mb-6">The Results</p>
                  <div className="text-center mb-6">
                    <div className="font-display text-5xl text-[#C3E941] mb-2">{caseStudy.result}</div>
                    <p className="font-body text-sm uppercase tracking-[0.06em] text-[#8A8A8A]">{caseStudy.resultLabel}</p>
                  </div>
                  <ul className="space-y-2">
                    {caseStudy.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 font-body text-sm text-[#5A5A5A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3E941] mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="mt-8">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-[0.06em] text-[#141414] hover:text-[#C3E941] transition-colors"
                >
                  View Full Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* ─── COMPLIANCE ───────────────────────────────────────────── */}
      {compliance && compliance.length > 0 && (
        <section className="bg-[#141414] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionReveal>
              <h2 className="font-display text-[2.25rem] md:text-[2.75rem] leading-none uppercase tracking-tight text-white mb-12">
                Security & Compliance
              </h2>
            </SectionReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {compliance.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-2xl p-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#C3E941]/10 border border-[#C3E941]/20 font-body text-xs font-bold uppercase tracking-[0.08em] text-[#C3E941] mb-4">
                      {item.badge}
                    </span>
                    <p className="font-body text-sm text-[#8A8A8A] leading-[1.7]">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <CTABlock
        headline={cta.headline}
        subhead={cta.subhead}
        contact={false}
      />
    </>
  );
}
