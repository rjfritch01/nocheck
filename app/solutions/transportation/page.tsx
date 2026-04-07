import type { Metadata } from "next";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Transportation & Logistics Payment Solutions | NoCheck — Enterprise Payment Platform",
  description:
    "Digital disbursements for fleet operations, logistics companies, and EV shared usage platforms. Trusted by Wheels, Inc. and CGB Enterprises.",
  alternates: { canonical: "https://nocheck.com/solutions/transportation" },
};

export default function TransportationPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: "Transportation & Logistics",
        headline: "Fleet-Scale Payments. Real-Time Speed.",
        subhead:
          "From major fleet operators to next-generation EV shared usage platforms — digital disbursements built for the pace and complexity of transportation and logistics.",
      }}
      overview={{
        body: [
          "Transportation and logistics companies operate at a pace that paper check cycles simply can't support. Drivers, contractors, vendors, and fleet operators need to be paid quickly — and the complexity of transportation payment operations (split payments, mileage reimbursements, fuel advances, contractor settlements) makes generic payout tools inadequate.",
          "NoCheck serves major fleet and logistics operations including Wheels, Inc. and CGB Enterprises, providing multi-rail digital disbursements with the operational visibility and compliance infrastructure that enterprise transportation requires.",
          "We're also building the payment infrastructure for next-generation EV shared usage platforms — processing usage-based payments at the speed and reliability that modern mobility demands.",
        ],
        callout:
          "Trusted by Wheels, Inc. and CGB Enterprises — two of the most demanding payment operations in fleet and logistics.",
      }}
      benefits={[
        {
          title: "Contractor & Driver Payouts",
          description:
            "Pay independent contractors, owner-operators, and drivers instantly via push-to-debit, ACH, or digital wallet. No waiting for check runs. Funds available immediately after delivery confirmation.",
        },
        {
          title: "Fuel & Expense Advances",
          description:
            "Issue prepaid cards for fuel advances, expense payments, and on-road costs — controllable, trackable, and instantly loadable without bank account requirements.",
        },
        {
          title: "Multi-Party Settlement",
          description:
            "Complex logistics settlements involving carriers, brokers, shippers, and sub-contractors handled natively with our dual payment processing software.",
        },
        {
          title: "EV Platform Payments",
          description:
            "Usage-based payment processing for electric vehicle shared platforms — from per-trip settlements to subscription billing, at the speed modern mobility demands.",
        },
        {
          title: "Vendor & Supplier Payments",
          description:
            "Streamline maintenance vendor payments, parts supplier disbursements, and facility management payments. Full audit trail for fleet cost management.",
        },
        {
          title: "Scale Without Operational Strain",
          description:
            "250ms response times and 99.99% uptime handle high-volume disbursement events without manual intervention or payment operations headcount.",
        },
      ]}
      useCases={[
        "Driver and contractor payouts",
        "Fleet operator settlements",
        "Fuel card disbursements",
        "Maintenance vendor payments",
        "Mileage reimbursements",
        "EV usage-based payments",
        "Carrier and broker settlements",
        "Logistics supplier payments",
      ]}
      howItWorks="Connect NoCheck to your dispatch, fleet management, or logistics platform via API or file upload. Payment triggers — delivery confirmations, settlement events, expense approvals — automatically route funds to recipients via their preferred rail. Real-time dashboards give your operations team complete payment visibility."
      compliance={[
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
          badge: "99.99% Uptime SLA",
          description:
            "Logistics doesn't stop. Neither does NoCheck infrastructure.",
        },
        {
          badge: "250ms Response Time",
          description:
            "Enterprise-grade performance for high-frequency disbursement events.",
        },
        {
          badge: "AES 256 Encryption",
          description:
            "All vendor and contractor payment data encrypted end-to-end.",
        },
        {
          badge: "Multi-Rail Orchestration",
          description:
            "ACH, RTP®, FedNow, push-to-debit, prepaid card — automatically routed based on recipient preference and payment type.",
        },
      ]}
      cta={{
        headline: "Pay Your Drivers as Fast as They Drive.",
        subhead:
          "Trusted by Wheels, Inc. and CGB Enterprises. Built for the pace of modern logistics. Start a conversation about NoCheck for your fleet or platform.",
      }}
    />
  );
}
