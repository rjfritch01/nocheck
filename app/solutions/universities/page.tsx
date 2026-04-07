import type { Metadata } from "next";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "University & Education Payment Solutions | NoCheck — Enterprise Payment Platform",
  description:
    "Student refunds, financial aid disbursements, departmental payments, and research grants — all from a single FERPA-aware, PCI-DSS compliant platform.",
  alternates: { canonical: "https://nocheck.com/solutions/universities" },
};

export default function UniversitiesPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: "Universities & Education",
        headline: "Students Expect Instant. Your Finance Team Expects Compliant.",
        subhead:
          "Student refunds, financial aid disbursements, departmental payments, and research grants — all from a single platform built for the complexity of higher education.",
      }}
      overview={{
        body: [
          "Higher education institutions disburse funds to some of the most digitally demanding recipients on earth — students who expect payments the same way they expect everything else: instantly, on their phone, through the method they already use.",
          "At the same time, university finance operations face complex compliance requirements, departmental structures, and an incredibly diverse recipient population — from undergrads with digital wallets to international students needing SEPA transfers to unbanked first-generation students who need prepaid cards.",
          "NoCheck handles all of it from a single platform. One integration. Every payment rail. Complete compliance and audit trail.",
        ],
      }}
      benefits={[
        {
          title: "Student Refunds in Minutes",
          description:
            "Financial aid refunds, tuition overpayments, and housing credits disbursed instantly via ACH, push-to-debit, digital wallet, or prepaid card — based on the student's preference.",
        },
        {
          title: "Serve Every Student",
          description:
            "Prepaid cards reach unbanked students. SEPA and international wire serve international students. No student is left waiting for a paper check regardless of their banking situation.",
        },
        {
          title: "Research Grant Disbursements",
          description:
            "Multi-party research grant payments, vendor disbursements, and inter-departmental transfers handled with full audit trails and role-based access controls.",
        },
        {
          title: "Branded Student Experience",
          description:
            "Payment notifications and the enrollment portal carry your university's visual identity. Students interact with your brand — not a third-party payment company.",
        },
        {
          title: "Administration Portal",
          description:
            "Finance staff across departments can search, view, and manage disbursements in real time. Granular role-based access ensures only authorized personnel see relevant data.",
        },
        {
          title: "Complete Compliance",
          description:
            "PCI-DSS and SOC2 compliant with full audit trails. Every disbursement logged and accessible for financial aid compliance reviews, audits, and departmental reporting.",
        },
      ]}
      useCases={[
        "Student tuition refunds",
        "Financial aid disbursements",
        "Housing deposit refunds",
        "Research grant payments",
        "Departmental vendor payments",
        "International student payments",
        "Scholarship disbursements",
        "Employee expense reimbursements",
      ]}
      howItWorks="Integrate NoCheck with your student information system via API or secure file upload. When a refund or disbursement triggers, students receive a branded notification and choose how to receive funds — instantly. Finance staff monitor all activity through role-based dashboards with complete audit logs."
      compliance={[
        {
          badge: "PCI-DSS Compliant",
          description:
            "Payment Card Industry Data Security Standard validated annually.",
        },
        {
          badge: "SOC2 Compliant",
          description:
            "Independent annual audit of security and data handling controls.",
        },
        {
          badge: "AES 256 Encryption",
          description:
            "All student and payment data encrypted end-to-end and at rest.",
        },
        {
          badge: "SEPA & International",
          description:
            "Direct access to European payment infrastructure via our Luxembourg processing facility — ideal for international student payments.",
        },
        {
          badge: "Proprietary Fraud Detection",
          description:
            "Duplicate enrollment detection, bank account ownership verification, and SSN validation.",
        },
        {
          badge: "Full Audit Trail",
          description:
            "Every disbursement logged with complete transaction history for financial aid compliance and institutional auditing.",
        },
      ]}
      cta={{
        headline: "Give Students the Payment Experience They Expect.",
        subhead:
          "Instant, compliant, and built for the complexity of higher education. Talk to our team about NoCheck for your institution.",
      }}
    />
  );
}
