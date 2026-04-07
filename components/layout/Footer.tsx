import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Why NoCheck", href: "/why-nocheck" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

const solutionLinks = [
  { label: "Insurance", href: "/solutions/insurance" },
  { label: "Healthcare", href: "/solutions/healthcare" },
  { label: "Government", href: "/solutions/government" },
  { label: "Ticketing & Entertainment", href: "/solutions/ticketing" },
  { label: "Universities", href: "/solutions/universities" },
  { label: "Transportation", href: "/solutions/transportation" },
];

const resourceLinks = [
  { label: "Security & Compliance", href: "/security" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Privacy Policy", href: "/privacy" },
];

const badges = [
  "PCI-DSS Compliant",
  "SOC2 Compliant",
  "HIPAA Compliant",
  "FedNow Service Provider",
  "Federal Reserve BPC Member",
];

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Company */}
          <div>
            <div className="mb-6">
              <Image
                src="/logos/logo-vertical-dark.png"
                alt="NoCheck — Enterprise Payment Platform"
                width={120}
                height={76}
                className="h-16 w-auto"
              />
            </div>
            <p className="font-body text-sm text-[#8A8A8A] leading-relaxed mb-6">
              Building financial internet applications since 1993. Trusted by the institutions that demand the most from their payment infrastructure.
            </p>
            <div className="space-y-1">
              <p className="font-body text-xs uppercase tracking-[0.06em] text-[#8A8A8A] font-bold mb-3">Company</p>
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-[#C9C9C9] hover:text-[#C3E941] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.06em] text-[#8A8A8A] font-bold mb-6">Solutions</p>
            <div className="space-y-1">
              {solutionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-[#C9C9C9] hover:text-[#C3E941] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.06em] text-[#8A8A8A] font-bold mb-6">Resources</p>
            <div className="space-y-1">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-[#C9C9C9] hover:text-[#C3E941] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.06em] text-[#8A8A8A] font-bold mb-6">Contact</p>
            <div className="space-y-4">
              <div>
                <p className="font-body text-xs text-[#8A8A8A] uppercase tracking-[0.06em] mb-1">Phone</p>
                <a
                  href="tel:2486210900"
                  className="font-body text-sm text-[#C9C9C9] hover:text-[#C3E941] transition-colors"
                >
                  248.621.0900
                </a>
              </div>
              <div>
                <p className="font-body text-xs text-[#8A8A8A] uppercase tracking-[0.06em] mb-1">Email</p>
                <a
                  href="mailto:sales@nocheck.com"
                  className="font-body text-sm text-[#C9C9C9] hover:text-[#C3E941] transition-colors"
                >
                  sales@nocheck.com
                </a>
              </div>
              <div>
                <p className="font-body text-xs text-[#8A8A8A] uppercase tracking-[0.06em] mb-1">Headquarters</p>
                <p className="font-body text-sm text-[#C9C9C9]">
                  Michigan, USA<br />
                  <span className="text-[#8A8A8A]">+ Luxembourg, EU</span>
                </p>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-block mt-2 bg-[#C3E941] text-[#141414] font-bold uppercase tracking-[0.04em] px-6 py-3 rounded-lg text-sm hover:bg-[#D4F055] transition-all duration-200"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="py-8 border-t border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src="/logos/badge-seal-dark.png"
              alt="NoCheck Brand Seal"
              width={64}
              height={64}
              className="w-16 h-16 opacity-60"
            />
            <div className="flex-1">
              <p className="font-body text-xs uppercase tracking-[0.08em] text-[#8A8A8A] font-bold mb-4 text-center">
                Compliance & Certifications
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] font-body text-xs font-bold uppercase tracking-[0.06em] text-[#C9C9C9]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <Image
              src="/logos/badge-seal-dark.png"
              alt="NoCheck Brand Seal"
              width={64}
              height={64}
              className="w-16 h-16 opacity-60 hidden md:block"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#8A8A8A]">
            © The NoCheck Group, LLC. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#8A8A8A]">
            Building financial internet applications since 1993 · Michigan, USA · Luxembourg, EU
          </p>
        </div>
      </div>
    </footer>
  );
}
