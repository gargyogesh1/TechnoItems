import React from 'react';
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import {
  ShoppingCart,
  CreditCard,
  PackageCheck,
  Smartphone,
  BarChart3,
  ShieldCheck
} from "lucide-react";
export const features = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Web Development",
    description: "We build modern, responsive, and high‑performance websites tailored to your business goals using the latest technologies."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Mobile App Development",
    description: "Custom Android, iOS, and cross‑platform mobile applications designed for seamless user experience and scalability."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Execution",
    description: "Execute trades in milliseconds with our high-performance trading engine."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Smart Portfolio",
    description: "Optimize your crypto holdings with AI-powered portfolio suggestions."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Price Alerts",
    description: "Never miss an opportunity with customizable price alerts and notifications."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Cold Storage",
    description: "Majority of assets stored in offline cold wallets for maximum security."
  }
];

// export const features = [
//   {
//     icon: <ShoppingCart  className="h-6 w-6" />,
//     title: "Custom E‑Commerce Development",
//     description:
//       "We design and develop fully customized e‑commerce stores and multi‑vendor marketplaces tailored to your business goals and user needs."
//   },
//   {
//     icon: <CreditCard className="h-6 w-6" />,
//     title: "Secure Payment & Checkout Integration",
//     description:
//       "Seamless integration of secure payment gateways with fast, user‑friendly checkout flows that improve conversion rates."
//   },
//   {
//     icon: <PackageCheck className="h-6 w-6" />,
//     title: "Smart Product & Order Tracking",
//     description:
//       "Real‑time tracking of products, inventory, and orders with automated status updates for customers, vendors, and administrators."
//   },
//   {
//     icon: <BarChart3 className="h-6 w-6" />,
//     title: "Analytics & Sales Insights",
//     description:
//       "Advanced analytics and reporting tools to monitor sales, customer behavior, inventory, and business performance."
//   },
//   {
//     icon: <Smartphone className="h-6 w-6" />,
//     title: "Mobile‑First & Omnichannel Commerce",
//     description:
//       "Responsive web and mobile commerce solutions that deliver consistent shopping experiences across all devices."
//   },
//   {
//     icon: <ShieldCheck className="h-6 w-6" />,
//     title: "Advanced Analytics, Security & Support",
//     description:
//       "AI‑powered analytics, enterprise‑grade security, and continuous support to keep your platform secure and performance‑driven."
//   }
// ];