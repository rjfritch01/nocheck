import type { Metadata } from "next";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Insurance Payment Solutions | NoCheck — Enterprise Payment Platform",
  description:
    "Replace paper checks with instant digital claims payouts. HIPAA-compliant disbursements for insurers. Aflac named NoCheck Partner of the Year for Innovation and Technology.",
  alternates: { canonical: "https://nocheck.com/solutions/insurance" },
};

export default function InsurancePage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: "Insurance",
        headline: "Claims Payments in Minutes. Not Mailboxes.",
        subhead:
          "Replace paper checks with instant digital claim payouts — and turn the most critical moment in the policyholder journey into a competitive advantage.",
      }}
      overview={{
        body: [
          "The claims payout is the moment of truth. It's when policyholders find out if their insurer actually delivers. A check that takes 7–14 days to arrive turns a stressful event into a frustrating one. An instant digital payment turns it into a moment of trust.",
          "NoCheck enables insurers to deliver claim funds in minutes — securely, compliantly, and through the payment method the policyholder prefers. We've been doing this for the largest names in insurance, and we've been recognized for it.",
        ],
        callout:
          "Aflac named NoCheck their 2015 Partner of the Year for Innovation and Technology after we built their branded claims payment portal — delivering 99.99% uptime and a seamless single sign-on experience for policyholders.",
      }}
      benefits={[
        {
          title: "Accelerate Claims to Minutes",
          description:
            "Move from 'check's in the mail' to 'funds in your account.' Instant and same-day options across every major payment rail — ACH, RTP® Network, FedNow, push-to-debit, prepaid cards, digital wallet, and more.",
        },
        {
          title: "Improve Policyholder Experience",
          description:
            "Digital-first payout with branded notifications and a clean selection interface. Policyholders choose their method — including prepaid cards for recipients without bank accounts — and receive funds on their terms.",
        },
        {
          title: "Eliminate Check Fraud",
          description:
            "Paper checks are the #1 vector for claims payment fraud. Digital rails with end-to-end encryption, proprietary fraud detection, and Early Warning System verification remove the risk entirely.",
        },
        {
          title: "Cut Operational Costs",
          description:
            "No printing. No postage. No manual handling. No reconciliation headaches. Every check you eliminate saves $4–$12 in direct processing costs — and hours of staff time.",
        },
        {
          title: "Handle Complex Disbursements",
          description:
            "Married policyholders. Multiple claimants on a single policy. Repair shops. Construction payees. Our proprietary dual payment software handles the scenarios that break generic payout tools.",
        },
        {
          title: "Stay HIPAA & PCI-DSS Compliant",
          description:
            "NoCheck takes responsibility for securely housing sensitive personal and health data — providing compliance and regulatory relief to your team.",
        },
      ]}
      useCases={[
        "Claims payouts",
        "Policy refunds",
        "Workman's comp payments",
        "Medical provider payments",
        "Multi-claimant settlements",
        "Repair shop disbursements",
        "Annuity disbursements",
        "Vendor and contractor payments",
      ]}
      howItWorks="Integrate NoCheck into your claims management system via API or secure file upload. When a claim is approved, recipients receive a branded notification and choose their preferred payment method. Your team monitors every transaction through real-time dashboards with complete audit trails."
      caseStudy={{
        client: "Aflac",
        challenge:
          "Aflac needed a secure, single sign-on enrollment portal for claims payments that was fast enough to keep up with their customer expectations — and invisible enough that policyholders never knew they'd left Aflac's ecosystem.",
        result: "99.99%",
        resultLabel: "System Uptime",
        award: "Partner of the Year",
        bullets: [
          "Branded Transaction Portal seamlessly integrated into Aflac's claims workflow",
          "State-of-the-art firewalls with intrusion detection",
          "Monthly system upgrades — continuously improving",
          "Named Aflac's 2015 Partner of the Year for Innovation and Technology",
        ],
      }}
      compliance={[
        {
          badge: "HIPAA Compliant",
          description:
            "Protected health information handled with all required safeguards. NoCheck takes full compliance responsibility for sensitive health data.",
        },
        {
          badge: "PCI-DSS Compliant",
          description:
            "Payment Card Industry Data Security Standard validated annually by independent auditors.",
        },
        {
          badge: "SOC2 Compliant",
          description:
            "Independently audited controls for security, availability, and confidentiality — reviewed every year.",
        },
        {
          badge: "AES 256 Encryption",
          description:
            "End-to-end encryption from your system to our data vault. All stored data encrypted at rest.",
        },
        {
          badge: "Proprietary Fraud Detection",
          description:
            "Early Warning System integration, duplicate detection, IP filtering, and SSN reuse monitoring.",
        },
        {
          badge: "Dual Infrastructure",
          description:
            "Primary data center in Michigan, USA. Secondary processing in Luxembourg, EU. 99.99% uptime SLA.",
        },
      ]}
      cta={{
        headline: "Turn Claims Payments Into a Competitive Advantage.",
        subhead:
          "Aflac did it. Your policyholders are waiting. Start a conversation about what NoCheck can do for your claims operations.",
      }}
    />
  );
}
