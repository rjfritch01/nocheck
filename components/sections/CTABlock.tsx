import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";

interface CTABlockProps {
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  contact?: boolean;
}

export default function CTABlock({
  headline = "Eliminate Checks. Join the Companies That Already Have.",
  subhead = "Aflac did it. AT&T did it. Multiple state governments did it. Your organization can move billions faster, safer, and cheaper — starting with a conversation.",
  primaryLabel = "Request a Demo",
  primaryHref = "/contact",
  secondaryLabel = "Talk to Sales",
  secondaryHref = "/contact",
  contact = true,
}: CTABlockProps) {
  return (
    <section className="bg-[#141414] py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionReveal>
          <h2 className="font-display text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] leading-none uppercase tracking-tight text-white mb-6 max-w-4xl mx-auto">
            {headline}
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="font-body text-lg text-[#C9C9C9] max-w-2xl mx-auto mb-10 leading-relaxed">
            {subhead}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center bg-[#C3E941] text-[#141414] font-bold uppercase tracking-[0.04em] px-10 py-4 rounded-lg hover:bg-[#D4F055] transition-all duration-200 hover:scale-[1.02] font-body"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold uppercase tracking-[0.04em] px-10 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 font-body"
            >
              {secondaryLabel}
            </Link>
          </div>
        </SectionReveal>

        {contact && (
          <SectionReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 font-body text-sm text-[#8A8A8A]">
              <a href="tel:2486210900" className="hover:text-white transition-colors">
                📞 248.621.0900
              </a>
              <span className="hidden sm:block text-[#2A2A2A]">|</span>
              <a href="mailto:sales@nocheck.com" className="hover:text-white transition-colors">
                ✉️ sales@nocheck.com
              </a>
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
