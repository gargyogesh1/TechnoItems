import { Feature } from "@/types/feature";
import {
  ShoppingCart,
  CreditCard,
  PackageCheck,
  Brain,
  Smartphone,
  ShieldCheck
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "Custom E‑Commerce & Marketplace Development",
    paragraph:
      "We build fully customized e‑commerce stores and multi‑vendor marketplaces tailored to your business model, branding, and growth goals."
  },
  {
    id: 2,
    icon: <CreditCard className="h-8 w-8" />,
    title: "Secure Payment & Checkout Integration",
    paragraph:
      "Integration of trusted payment gateways with fast, secure, and conversion‑optimized checkout experiences that increase sales."
  },
  {
    id: 3,
    icon: <PackageCheck className="h-8 w-8" />,
    title: "Smart Product & Order Tracking",
    paragraph:
      "Real‑time tracking of products, inventory, and orders with automated updates for customers, vendors, and administrators."
  },
  {
    id: 4,
    icon: <Brain className="h-8 w-8" />,
    title: "AI‑Driven Analytics & Recommendations",
    paragraph:
      "AI‑powered insights and product recommendations based on customer behavior, purchase history, and sales trends."
  },
  {
    id: 5,
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile‑First & Omnichannel Commerce",
    paragraph:
      "Responsive web and mobile commerce solutions that deliver seamless shopping experiences across all devices."
  },
  {
    id: 6,
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Security, Compliance & Ongoing Support",
    paragraph:
      "Enterprise‑grade security, compliance best practices, and continuous maintenance to keep your platform reliable and protected."
  }
];

export default featuresData;
