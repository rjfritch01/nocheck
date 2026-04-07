import type { Metadata } from "next";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Healthcare & Medical Payer Solutions | NoCheck — Enterprise Payment Platform",
  description:
    "HIPAA-compliant digital disbursements for health plans, TPAs, medical provider networks, and pharmacy benefit managers. Secure, fast, and fully compliant.",
  alternates: { canonical: "https://nocheck.com/solutions/healthcare" },
};

export default function HealthcarePage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: "Healthcare & Medical Payers",
        headline: "HIPAA-Compliant Disbursements at Scale.",
        subhead:
          "Secure, instant payments for health plans, TPAs, medical provider networks, and pharmacy benefit managers — from claims to provider reimbursements.",
      }}
      overview={{
        body: [
          "Healthcare payment operations carry a unique dual burden: the speed expectations of modern digital commerce, and the compliance requirements of some of the most regulated data in existence. Most payment platforms are built for one or the other. NoCheck is built for both.",
          "Whether you're disbursing claims to members, reimbursing providers, or processing pharmacy benefit payments, NoCheck delivers funds instantly while maintaining the full HIPAA compliance posture your organization requires.",
          "We handle the complexity — multi-party payments, protected health information, audit trails — so your team can focus on care delivery, not payment operations.",
        ],
      }}
      benefits={[
        {
          title: "HIPAA Compliance Built In",
          description:
            "NoCheck takes full responsibility for securely housing protected health information. End-to-end encryption, access controls, and annual audits — compliance isn't an add-on, it's the foundation.",
        },
        {
          title: "Instant Provider Reimbursements",
          description:
            "Move from batch ACH cycles to real-time provider payments via RTP® Network and FedNow. Providers get paid faster, which improves network retention and reduces administrative friction.",
        },
        {
          title: "Member Disbursements on Any Rail",
          description:
            "Health plan refunds, benefit disbursements, and claim payments delivered via ACH, push-to-debit, prepaid card, or digital wallet — based on member preference.",
        },
        {
          title: "Prepaid Cards for Unbanked Members",
          description:
            "Reach every member of your plan, including those without traditional bank accounts. Prepaid cards provide immediate access to funds — critical for Medicaid and public health programs.",
        },
        {
          title: "Reduce Administrative Costs",
          description:
            "Eliminate check printing, mailing, and manual reconciliation. Every paper check replaced saves $4–$12 in direct processing costs plus hours of staff time on exceptions and follow-ups.",
        },
        {
          title: "Complete Audit Trail",
          description:
            "Role-based administration portals give authorized staff real-time visibility into every payment, enrollment, and disbursement — with full audit logs for compliance reviews.",
        },
      ]}
      useCases={[
        "Member claims payments",
        "Provider reimbursements",
        "Pharmacy benefit payments",
        "TPA disbursements",
        "Refund processing",
        "Benefit card payments",
        "Medical provider networks",
        "Workers' comp medical payments",
      ]}
      howItWorks="Integrate NoCheck via API or secure file upload into your claims management or benefits administration system. When a payment triggers, recipients receive a HIPAA-compliant branded notification and select their payment method. Your compliance and finance teams have real-time dashboards with complete audit trails."
      compliance={[
        {
          badge: "HIPAA Compliant",
          description:
            "Protected health information handled with full HIPAA safeguards. NoCheck takes compliance responsibility off your operations team.",
        },
        {
          badge: "PCI-DSS Compliant",
          description:
            "Payment Card Industry Data Security Standard validated annually.",
        },
        {
          badge: "SOC2 Compliant",
          description:
            "Independently audited security, availability, and confidentiality controls.",
        },
        {
          badge: "AES 256 Encryption",
          description:
            "End-to-end encryption. All PHI and payment data encrypted at rest and in transit.",
        },
        {
          badge: "Early Warning System",
          description:
            "Direct access to the US banking system's fraud detection network — SSN verification, duplicate detection, and account ownership validation.",
        },
        {
          badge: "99.99% Uptime SLA",
          description:
            "Dual data center infrastructure in Michigan and Luxembourg ensures healthcare payment operations are always on.",
        },
      ]}
      cta={{
        headline: "Move Healthcare Payments Into the Modern Era.",
        subhead:
          "HIPAA compliance and real-time payments aren't mutually exclusive. Talk to our team about what NoCheck can do for your healthcare payment operations.",
      }}
    />
  );
}
