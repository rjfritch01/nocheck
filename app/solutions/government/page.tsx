import type { Metadata } from "next";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Government & Municipality Payment Solutions | NoCheck — Enterprise Payment Platform",
  description:
    "Digital disbursements for state agencies, municipalities, and federal programs. State unemployment, tax refunds, grant payments, and vendor disbursements — secure and compliant.",
  alternates: { canonical: "https://nocheck.com/solutions/government" },
};

export default function GovernmentPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: "Government & Municipalities",
        headline: "Government Payments, Modernized.",
        subhead:
          "State unemployment systems, vendor payments, tax refunds, and program disbursements — replacing paper checks with secure, instant digital payments trusted by state agencies.",
      }}
      overview={{
        body: [
          "Government payment operations face a challenge most enterprise organizations don't: serving the full economic spectrum of citizens, including those who are unbanked or underbanked, while maintaining the compliance and audit rigor that public accountability demands.",
          "NoCheck has been trusted by multiple state agencies to modernize their disbursement operations. From state unemployment systems to grant disbursements and vendor payments, we've built the infrastructure to handle government-scale volume with the compliance posture public sector work requires.",
          "Our Federal Reserve Business Payments Coalition membership and FedNow Service Provider status make NoCheck one of the most credentialed payment platforms for government use.",
        ],
        callout:
          "Chuck Kopko, founder of The NoCheck Group, is a Work Group Member of the Federal Reserve Business Payments Coalition — directly involved in modernizing B2B payment infrastructure for government and enterprise use.",
      }}
      benefits={[
        {
          title: "Serve Every Citizen",
          description:
            "Reach unbanked and underbanked recipients with prepaid cards — critical for unemployment, benefit disbursements, and tax refund programs. No bank account required.",
        },
        {
          title: "FedNow Native",
          description:
            "As a FedNow Service Provider Showcase participant, NoCheck delivers real-time government payments via the Federal Reserve's instant payment infrastructure — the gold standard for public sector disbursements.",
        },
        {
          title: "Full Audit Trail & Compliance",
          description:
            "Every transaction logged with complete audit trails. Role-based access controls. Real-time reporting for finance and compliance teams. Built for public accountability.",
        },
        {
          title: "Vendor & Contractor Payments",
          description:
            "Streamline municipal vendor payments, contractor disbursements, and inter-agency transfers. Multi-rail options ensure every payee receives funds through their preferred method.",
        },
        {
          title: "Fraud Detection at Scale",
          description:
            "Government benefit fraud is a billion-dollar problem. NoCheck's proprietary fraud detection — including Early Warning System access and duplicate enrollment detection — protects program integrity.",
        },
        {
          title: "Complex Disbursement Handling",
          description:
            "Multi-party payments, split disbursements, and complex distribution scenarios handled natively. From grant allocations to multi-claimant benefit programs.",
        },
      ]}
      useCases={[
        "State unemployment insurance",
        "Tax refund disbursements",
        "Grant program payments",
        "Vendor and contractor payments",
        "Benefit program disbursements",
        "Municipal payroll supplements",
        "Emergency relief payments",
        "Federal program administration",
      ]}
      howItWorks="NoCheck integrates with your existing government payment infrastructure via secure API or file-based processing. Recipients receive branded notifications consistent with your agency's identity. Finance and compliance teams have real-time access to all payment data, status, and audit logs."
      compliance={[
        {
          badge: "FedNow Service Provider",
          description:
            "Certified FedNow Service Provider Showcase participant — delivering real-time payments on Federal Reserve infrastructure.",
        },
        {
          badge: "Federal Reserve BPC Member",
          description:
            "Active work group member of the Federal Reserve Business Payments Coalition, involved in national payment modernization.",
        },
        {
          badge: "PCI-DSS Compliant",
          description:
            "Payment Card Industry Data Security Standard validated annually.",
        },
        {
          badge: "SOC2 Compliant",
          description:
            "Independent annual audit of security, availability, and confidentiality controls.",
        },
        {
          badge: "AES 256 Encryption",
          description:
            "All citizen and vendor data encrypted end-to-end and at rest.",
        },
        {
          badge: "Proprietary Fraud Detection",
          description:
            "Early Warning System access, duplicate enrollment IP filtering, SSN reuse monitoring, and real-time account verification.",
        },
      ]}
      cta={{
        headline: "Modernize Government Disbursements.",
        subhead:
          "Trusted by state agencies and built to the standards of the Federal Reserve. Start a conversation about NoCheck for your agency or municipality.",
      }}
    />
  );
}
