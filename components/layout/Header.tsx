"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";

const solutions = [
  { label: "Insurance", href: "/solutions/insurance" },
  { label: "Healthcare", href: "/solutions/healthcare" },
  { label: "Government", href: "/solutions/government" },
  { label: "Ticketing & Entertainment", href: "/solutions/ticketing" },
  { label: "Universities", href: "/solutions/universities" },
  { label: "Transportation", href: "/solutions/transportation" },
];

const navLinks = [
  { label: "Why NoCheck", href: "/why-nocheck" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setSolutionsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isSolutionActive = pathname.startsWith("/solutions");

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#141414]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity">
              <Image
                src="/logos/logo-horizontal-dark.png"
                alt="NoCheck — Enterprise Payment Platform"
                width={160}
                height={33}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Solutions dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-body text-sm font-bold uppercase tracking-[0.04em] transition-colors ${
                    isSolutionActive ? "text-[#C3E941]" : "text-white hover:text-[#C3E941]"
                  }`}
                >
                  Solutions
                  <motion.span
                    animate={{ rotate: solutionsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-56 bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl shadow-2xl overflow-hidden"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {solutions.map((sol) => (
                        <Link
                          key={sol.href}
                          href={sol.href}
                          className="block px-5 py-3 text-sm font-body text-[#C9C9C9] hover:bg-[#2A2A2A] hover:text-[#C3E941] transition-colors border-b border-[#2A2A2A] last:border-0"
                        >
                          {sol.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm font-bold uppercase tracking-[0.04em] transition-colors relative ${
                    isActive(link.href)
                      ? "text-[#C3E941]"
                      : "text-white hover:text-[#C3E941]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C3E941]"
                      layoutId="nav-indicator"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:2486210900"
                className="flex items-center gap-2 text-[#C9C9C9] hover:text-white transition-colors font-body text-sm"
              >
                <Phone size={14} />
                248.621.0900
              </a>
              <Link
                href="/contact"
                className="bg-[#C3E941] text-[#141414] font-bold uppercase tracking-[0.04em] px-6 py-2.5 rounded-lg text-sm hover:bg-[#D4F055] transition-all duration-200 hover:scale-[1.02]"
              >
                Request a Demo
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2 hover:text-[#C3E941] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
