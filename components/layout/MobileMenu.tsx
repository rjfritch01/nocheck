"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

const solutions = [
  { label: "Insurance", href: "/solutions/insurance" },
  { label: "Healthcare", href: "/solutions/healthcare" },
  { label: "Government", href: "/solutions/government" },
  { label: "Ticketing & Entertainment", href: "/solutions/ticketing" },
  { label: "Universities", href: "/solutions/universities" },
  { label: "Transportation", href: "/solutions/transportation" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why NoCheck", href: "/why-nocheck" },
  { label: "Security", href: "/security" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#141414] flex flex-col overflow-y-auto"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A2A]">
            <Link href="/" onClick={onClose} className="hover:opacity-90 transition-opacity">
              <Image
                src="/logos/logo-horizontal-dark.png"
                alt="NoCheck — Enterprise Payment Platform"
                width={140}
                height={29}
                className="h-7 w-auto"
              />
            </Link>
            <button
              onClick={onClose}
              className="text-white p-2 hover:text-[#C3E941] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-6 py-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-4 border-b border-[#2A2A2A] text-white font-body text-lg font-bold uppercase tracking-[0.04em] hover:text-[#C3E941] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Solutions */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                }}
              >
                <p className="pt-6 pb-3 text-[#8A8A8A] font-body text-xs uppercase tracking-[0.08em] font-bold">
                  Solutions
                </p>
                {solutions.map((sol) => (
                  <Link
                    key={sol.href}
                    href={sol.href}
                    onClick={onClose}
                    className="block py-3 border-b border-[#2A2A2A]/50 text-[#C9C9C9] font-body text-base hover:text-[#C3E941] transition-colors"
                  >
                    {sol.label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 py-8 border-t border-[#2A2A2A] space-y-4">
            <a
              href="tel:2486210900"
              className="block text-center text-[#C9C9C9] font-body text-sm"
            >
              248.621.0900
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="block text-center bg-[#C3E941] text-[#141414] font-bold uppercase tracking-[0.04em] px-8 py-4 rounded-lg hover:bg-[#D4F055] transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
