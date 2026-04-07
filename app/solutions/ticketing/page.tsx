import type { Metadata } from "next";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
  title: "Ticketing & Entertainment Payment Solutions | NoCheck — Enterprise Payment Platform",
  description:
    "Real-time payments for ticket sellers, event settlements, and multi-party payouts. Pay sellers in minutes, not days. Already processing for ticketing platforms in production.",
  alternates: { canonical: "https://nocheck.com/solutions/ticketing" },
};

export default function TicketingPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: "Ticketing & Entertainment",
        headline: "Real-Time Events Deserve Real-Time Payments.",
        subhead:
          "Pay sellers, vendors, and partners at the speed your platform operates — not the speed of paper checks.",
      }}
      overview={{
        body: [
          "Your marketplace runs in real time. A ticket sells, an event wraps, a settlement triggers. But if the payment side is still running on batch ACH or — worse — paper checks, you're creating friction at the exact moment your sellers expect speed.",
          "NoCheck gives ticketing platforms instant, multi-rail digital disbursements that keep sellers happy, reduce support volume, and scale without operational strain.",
          "We already process real-time payments for ticket sellers. This isn't theoretical — it's production.",
        ],
      }}
      benefits={[
        {
          title: "Pay Sellers in Minutes, Not Days",
          description:
            "Instant and same-day payout options across ACH, RTP® Network, FedNow, push-to-debit, prepaid cards, and digital wallets. Sellers see funds fast — which means they stay on your platform.",
        },
        {
          title: "Kill the #1 Support Ticket",
          description:
            "'Where is my payment?' is the most expensive question in marketplace operations. Real-time delivery with branded notifications and tracking eliminates it.",
        },
        {
          title: "Scale Without Breaking",
          description:
            "High-volume payout events — concert settlements, festival weekends, playoff nights — process without manual intervention. Our infrastructure handles 99.99% uptime at 250ms response times.",
        },
        {
          title: "Keep Them in Your Brand",
          description:
            "NoCheck's white-label Branded Transaction Portal uses your fonts, your colors, your domain. Sellers never know they've left your ecosystem.",
        },
        {
          title: "Handle Complex Settlements",
          description:
            "Multi-party payouts, split disbursements, venue-seller-promoter settlements — our proprietary dual payment processing handles the complexity your finance team shouldn't have to.",
        },
        {
          title: "Full Compliance & Audit Trail",
          description:
            "PCI-DSS compliant with complete transaction logs, real-time reporting, and role-based access controls for your finance and operations teams.",
        },
      ]}
      useCases={[
        "Seller payouts (individual and batch)",
        "Event and venue settlements",
        "Multi-party and split disbursements",
        "Affiliate and partner payments",
        "Refund processing",
        "Promoter and talent payments",
        "Festival and concert settlements",
        "Playoff and championship event payouts",
      ]}
      howItWorks="Integrate NoCheck into your existing payout workflow via API or secure file upload. When a payout triggers, recipients get a branded notification and choose how to receive funds — instantly. Your operations team monitors everything through real-time dashboards with full audit trails. No manual reconciliation. No check runs. No support escalations."
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
            "Concert nights don't wait. Neither does our infrastructure.",
        },
        {
          badge: "250ms Response Time",
          description:
            "Enterprise-grade performance at live-event scale — proven in production.",
        },
        {
          badge: "AES 256 Encryption",
          description:
            "Seller and payment data encrypted end-to-end and at rest.",
        },
        {
          badge: "Proprietary Fraud Detection",
          description:
            "Duplicate enrollment detection, bank account verification, and Early Warning System access.",
        },
      ]}
      cta={{
        headline: "Your Sellers Expect Speed. Deliver It.",
        subhead:
          "Already trusted in production for real-time ticketing payouts. Talk to our team about what NoCheck can do for your platform.",
      }}
    />
  );
}
