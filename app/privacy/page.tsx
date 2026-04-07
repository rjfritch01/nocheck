import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NoCheck — Enterprise Payment Platform",
  description:
    "NoCheck privacy policy covering data collection, processing, security, and your rights. PCI-DSS, SOC2, and HIPAA compliant.",
  alternates: { canonical: "https://nocheck.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#141414] pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#C3E941] mb-4 block">Legal</span>
          <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] leading-none uppercase tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="font-body text-base text-[#8A8A8A] mt-4">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose max-w-none font-body text-[#5A5A5A] leading-[1.8] text-base space-y-10">

            <div>
              <h2 className="font-display text-xl text-[#141414] uppercase tracking-tight mb-4">1. Overview</h2>
              <p>
                The NoCheck Group, LLC (&ldquo;NoCheck,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy and security of personal information entrusted to us in connection with our enterprise payment platform and related services.
              </p>
              <p className="mt-4">
                This Privacy Policy describes how we collect, use, store, and protect personal information in connection with our services, website (nocheck.com), and business operations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#141414] uppercase tracking-tight mb-4">2. Information We Collect</h2>
              <p>We collect information in the following ways:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-[#141414]">Business Information:</strong> Company name, contact information, and details about your organization&apos;s payment operations.</li>
                <li><strong className="text-[#141414]">Personal Information:</strong> Name, email address, phone number, and role provided when requesting a demo or contacting us.</li>
                <li><strong className="text-[#141414]">Payment Data:</strong> In the course of providing payment processing services to enterprise clients, we handle personal and financial information of payment recipients, including bank account information, government identifiers, and transaction records.</li>
                <li><strong className="text-[#141414]">Technical Information:</strong> IP addresses, browser type, device information, and usage data collected through standard web technologies.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#141414] uppercase tracking-tight mb-4">3. How We Use Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, operate, and improve our payment platform and related services</li>
                <li>Process payment transactions on behalf of our enterprise clients</li>
                <li>Communicate with prospective and current clients about our services</li>
                <li>Maintain security and prevent fraud</li>
                <li>Comply with legal obligations, including financial regulations and data protection laws</li>
                <li>Fulfill our obligations as a PCI-DSS, SOC2, and HIPAA compliant organization</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#141414] uppercase tracking-tight mb-4">4. Data Security</h2>
              <p>
                NoCheck implements industry-leading security measures to protect personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>AES 256 encryption for all data in transit and at rest</li>
                <li>PCI-DSS compliant cardholder data environments</li>
                <li>SOC2 Type II certified security controls</li>
                <li>HIPAA-compliant handling of protected health information</li>
                <li>Proprietary fraud detection systems including Early Warning System integration</li>
                <li>Physical access controls at our Michigan and Luxembourg data centers</li>
                <li>Annual third-party security audits</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#141414] uppercase tracking-tight mb-4">5. Data Sharing</h2>
              <p>
                We do not sell personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-[#141414]">Banking Partners:</strong> JP Morgan Chase, US Bank, Bank of America, and Key Bank, in connection with payment processing.</li>
                <li><strong className="text-[#141414]">Payment Networks:</strong> ACH, RTP®, FedNow, and other payment rail operators as required to process transactions.</li>
                <li><strong className="text-[#141414]">Regulatory Authorities:</strong> As required by applicable law, regulation, or legal process.</li>
                <li><strong className="text-[#141414]">Service Providers:</strong> Third parties who assist in operating our platform, under strict confidentiality obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#141414] uppercase tracking-tight mb-4">6. International Data Processing</h2>
              <p>
                NoCheck operates data processing facilities in Michigan, USA and Luxembourg, EU. Our Luxembourg facility operates under EU data protection frameworks. International data transfers are conducted in compliance with applicable cross-border data transfer regulations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#141414] uppercase tracking-tight mb-4">7. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights regarding your personal information, including the right to access, correct, or request deletion of personal data. To exercise these rights or ask questions about our data practices, contact us at:
              </p>
              <div className="mt-6 bg-[#F7F7F5] rounded-xl p-6 border border-[#E5E5E3]">
                <p className="font-body font-bold text-[#141414]">The NoCheck Group, LLC</p>
                <p className="mt-2">
                  <a href="mailto:privacy@nocheck.com" className="text-[#C3E941] hover:underline">privacy@nocheck.com</a>
                </p>
                <p>
                  <a href="tel:2486210900" className="text-[#C3E941] hover:underline">248.621.0900</a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#141414] uppercase tracking-tight mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify enterprise clients of material changes through our standard communication channels. Your continued use of our services following notice of changes constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
