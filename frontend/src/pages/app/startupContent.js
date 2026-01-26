import {
  ShoppingCart,
  CreditCard,
  PackageCheck,Warehouse ,MapIcon,
  Brain,View , Users ,Zap ,Database ,
  Smartphone,PenTool , Mail ,LineChart , Home, 
  ShieldCheck,Truck,BarChart,Box, Globe , Megaphone , MousePointerClick , Share2 
} from "lucide-react";

const startupPageData = {
  Ecom: {
    id: "home",
    backgroundColor: "var(--color-gray-dark)",
    textColors: {
      heading: "text-black dark:text-white",
      description: "text-body-color dark:text-body-color-dark"
    },

    /* ================= HERO ================= */
    hero: {
      title: "E‑Commerce & Marketplace Development Solutions",
      description:
        "We design and develop scalable e‑commerce stores and multi‑vendor marketplace platforms that help businesses sell more and grow faster."
    },
    buttons: [
      {
        label: "Get Free Consultation",
        url: "https://nextjstemplates.com/templates/saas-starter-startup",
        style: "primary"
      },
      {
        label: "Talk to an Expert",
        url: "https://github.com/NextJSTemplates/startup-nextjs",
        style: "secondary"
      }
    ],

    theme: {
      primaryColor: "#4A6CF7"
    },

    /* ================= FEATURES ================= */
    features: {
      sectionId: "features",
      title: "E‑COMMERCE FEATURES",
      paragraph:
        "We deliver end‑to‑end e‑commerce and marketplace solutions designed to increase sales, improve customer experience, and scale with your business.",
      items: [
        {
          id: 1,
          icon: ShoppingCart,
          title: "Custom E‑Commerce & Marketplace Development",
          paragraph:
            "We build fully customized e‑commerce stores and multi‑vendor marketplaces tailored to your business model, branding, and growth goals."
        },
        {
          id: 2,
          icon: CreditCard,
          title: "Secure Payment & Checkout Integration",
          paragraph:
            "Integration of trusted payment gateways with fast, secure, and conversion‑optimized checkout experiences that increase sales."
        },
        {
          id: 3,
          icon: PackageCheck,
          title: "Smart Product & Order Tracking",
          paragraph:
            "Real‑time tracking of products, inventory, and orders with automated updates for customers, vendors, and administrators."
        },
        {
          id: 4,
          icon: Brain,
          title: "AI‑Driven Analytics & Recommendations",
          paragraph:
            "AI‑powered insights and product recommendations based on customer behavior, purchase history, and sales trends."
        },
        {
          id: 5,
          icon: Smartphone,
          title: "Mobile‑First & Omnichannel Commerce",
          paragraph:
            "Responsive web and mobile commerce solutions that deliver seamless shopping experiences across all devices."
        },
        {
          id: 6,
          icon: ShieldCheck,
          title: "Security, Compliance & Ongoing Support",
          paragraph:
            "Enterprise‑grade security, compliance best practices, and continuous maintenance to keep your platform reliable and protected."
        }
      ]
    },

    /* ================= VIDEO ================= */
    vedio: {
      sectionId: "vedio",
      title: "We are ready to help",
      paragraph:
        "Whether you’re launching a new online store or scaling a multi‑vendor marketplace, our team is ready to turn your idea into a high‑performing e‑commerce solution."
    },

    /* ================= ABOUT SECTION ONE ================= */
    aboutSectionOne: {
      sectionId: "aboutSectionOne",
      title: "Built for E‑Commerce, Marketplaces & Digital Businesses",
      paragraph:
        "Our focus is on helping businesses build secure and scalable commerce platforms using modern technologies, best practices, and real‑world business insights.",
      lists: [
        {
          column: 1,
          items: [
            "Premium Quality Development",
            "Modern UI with Tailwind CSS",
            "Lifetime Scalability"
          ]
        },
        {
          column: 2,
          items: [
            "Next.js‑Powered Performance",
            "Rich documentation",
            "Developer‑Friendly Architecture"
          ]
        }
      ],
      images: {
        light: "/images/about/about-image.svg",
        dark: "/images/about/about-image-dark.svg"
      }
    },

    /* ================= ABOUT SECTION TWO ✅ ================= */
    aboutSectionTwo: {
      sectionId: "aboutSectionTwo",

      images: {
        light: "./images/about/about-image-2.svg",
        dark: "./images/about/about-image-2-dark.svg"
      },

      items: [
        {
          id: 1,
          title: "Bug‑Free & Reliable Code",
          paragraph:
            "We follow strict quality assurance processes to deliver stable, secure, and bug‑free e‑commerce applications."
        },
        {
          id: 2,
          title: "Premier Support & Maintenance",
          paragraph:
            "Ongoing support, monitoring, and updates to ensure your platform runs smoothly after launch."
        },
        {
          id: 3,
          title: "Modern Technology Stack",
          paragraph:
            "We leverage modern frameworks and tools to build fast, secure, and future‑ready commerce solutions."
        }
      ]
    }
  },
  CRM: {
  id: "home",
  backgroundColor: "var(--color-gray-dark)",
  textColors: {
    heading: "text-black dark:text-white",
    description: "text-body-color dark:text-body-color-dark"
  },

  /* ================= HERO ================= */
  hero: {
    title: "Sales CRM Portal for High‑Performance Teams",
    description:
      "We design and develop powerful CRM portals that help sales teams manage leads, automate workflows, track pipelines, and close deals faster with real‑time insights."
  },
  buttons: [
    {
      label: "Get Free CRM Consultation",
      url: "https://nextjstemplates.com/templates/saas-starter-startup",
      style: "primary"
    },
    {
      label: "Talk to a CRM Expert",
      url: "https://github.com/NextJSTemplates/startup-nextjs",
      style: "secondary"
    }
  ],

  theme: {
    primaryColor: "#e8532e"
  },

  /* ================= FEATURES ================= */
  features: {
    sectionId: "features",
    title: "CRM PORTAL FEATURES",
    paragraph:
      "Our sales CRM portal is built to streamline customer management, improve sales productivity, and deliver actionable insights across the entire sales lifecycle.",

    items: [
      {
        id: 1,
        icon: ShoppingCart,
        title: "Lead & Opportunity Management",
        paragraph:
          "Capture, qualify, and manage leads and opportunities in one centralized dashboard with complete customer history and engagement tracking."
      },
      {
        id: 2,
        icon: CreditCard,
        title: "Sales Pipeline & Deal Tracking",
        paragraph:
          "Visualize your sales pipeline, track deal stages, forecast revenue, and identify bottlenecks to improve close rates."
      },
      {
        id: 3,
        icon: PackageCheck,
        title: "Task Automation & Workflow Management",
        paragraph:
          "Automate follow‑ups, reminders, approvals, and sales processes to reduce manual work and increase team efficiency."
      },
      {
        id: 4,
        icon: Brain,
        title: "AI‑Powered Sales Insights",
        paragraph:
          "Leverage AI‑driven analytics to predict deal outcomes, recommend next best actions, and prioritize high‑value opportunities."
      },
      {
        id: 5,
        icon: Smartphone,
        title: "Mobile‑Friendly CRM Access",
        paragraph:
          "Access your CRM anytime, anywhere with a responsive, mobile‑optimized interface for on‑the‑go sales teams."
      },
      {
        id: 6,
        icon: ShieldCheck,
        title: "Data Security, Roles & Permissions",
        paragraph:
          "Enterprise‑grade security with role‑based access control, audit logs, and compliance‑ready data protection."
      }
    ]
  },

  /* ================= VIDEO ================= */
  vedio: {
    sectionId: "vedio",
    title: "Empower Your Sales Team with CRM",
    paragraph:
      "From lead capture to deal closure, our CRM portal gives your sales team the tools they need to build relationships, close deals faster, and grow revenue."
  },

  /* ================= ABOUT SECTION ONE ================= */
  aboutSectionOne: {
    sectionId: "aboutSectionOne",
    title: "Built for Sales Teams, Managers & Growing Businesses",
    paragraph:
      "Our CRM portal is designed to align sales processes, improve collaboration, and provide full visibility into customer relationships and revenue performance.",

    lists: [
      {
        column: 1,
        items: [
          "Centralized Customer & Lead Database",
          "Custom Sales Pipelines",
          "Scalable CRM Architecture"
        ]
      },
      {
        column: 2,
        items: [
          "Real‑Time Sales Reporting",
          "Easy CRM Customization",
          "Developer‑Friendly Integrations"
        ]
      }
    ],

    images: {
      light: "/images/about/about-image.svg",
      dark: "/images/about/about-image-dark.svg"
    }
  },

  /* ================= ABOUT SECTION TWO ================= */
  aboutSectionTwo: {
    sectionId: "aboutSectionTwo",

    images: {
      light: "./images/about/about-image-2.svg",
      dark: "./images/about/about-image-2-dark.svg"
    },

    items: [
      {
        id: 1,
        title: "Reliable, Bug‑Free CRM Platform",
        paragraph:
          "We follow strict quality assurance and testing processes to ensure your CRM portal is stable, secure, and reliable for daily sales operations."
      },
      {
        id: 2,
        title: "Ongoing CRM Support & Enhancements",
        paragraph:
          "Continuous monitoring, updates, and feature enhancements to keep your CRM aligned with evolving sales strategies."
      },
      {
        id: 3,
        title: "Modern CRM Technology Stack",
        paragraph:
          "Built using modern frameworks, cloud‑ready architecture, and secure APIs to deliver fast, future‑proof CRM solutions."
      }
    ]
  }
  },
  JobPortal: {
  id: "home",
  backgroundColor: "var(--color-gray-dark)",
  textColors: {
    heading: "text-black dark:text-white",
    description: "text-body-color dark:text-body-color-dark"
  },

  /* ================= HERO ================= */
  hero: {
    title: "Smart Job Portal for Hiring Faster & Smarter",
    description:
      "We build modern job portals that connect employers with the right talent through intelligent matching, streamlined hiring workflows, and seamless candidate experiences."
  },
  buttons: [
    {
      label: "Launch Your Job Portal",
      url: "https://nextjstemplates.com/templates/saas-starter-startup",
      style: "primary"
    },
    {
      label: "Talk to Hiring Experts",
      url: "https://github.com/NextJSTemplates/startup-nextjs",
      style: "secondary"
    }
  ],

  theme: {
    primaryColor: "#eed933"
  },

  /* ================= FEATURES ================= */
  features: {
    sectionId: "features",
    title: "JOB PORTAL FEATURES",
    paragraph:
      "Our job portal platform is designed to simplify hiring, improve candidate discovery, and deliver a smooth recruitment experience for both employers and job seekers.",

    items: [
      {
        id: 1,
        icon: ShoppingCart,
        title: "Advanced Job Posting & Management",
        paragraph:
          "Create, manage, and promote job listings with powerful tools including categories, skills, locations, and job types."
      },
      {
        id: 2,
        icon: CreditCard,
        title: "Smart Candidate Search & Filtering",
        paragraph:
          "Find the right candidates faster using advanced filters such as skills, experience, location, salary range, and availability."
      },
      {
        id: 3,
        icon: PackageCheck,
        title: "Resume Upload & Application Tracking",
        paragraph:
          "Job seekers can upload resumes, apply in one click, and track application status, while recruiters manage applications effortlessly."
      },
      {
        id: 4,
        icon: Brain,
        title: "AI‑Powered Job & Candidate Matching",
        paragraph:
          "Intelligent algorithms recommend the best jobs to candidates and the most relevant profiles to recruiters."
      },
      {
        id: 5,
        icon: Smartphone,
        title: "Mobile‑Friendly Job Portal",
        paragraph:
          "Fully responsive design that allows users to search, apply, and hire seamlessly on any device."
      },
      {
        id: 6,
        icon: ShieldCheck,
        title: "Secure Accounts & Role Management",
        paragraph:
          "Secure authentication with role‑based access for admins, recruiters, employers, and job seekers."
      }
    ]
  },

  /* ================= VIDEO ================= */
  vedio: {
    sectionId: "vedio",
    title: "Connecting Talent with Opportunity",
    paragraph:
      "Our job portal helps companies find top talent faster while empowering job seekers with personalized job discovery and easy applications."
  },

  /* ================= ABOUT SECTION ONE ================= */
  aboutSectionOne: {
    sectionId: "aboutSectionOne",
    title: "Built for Recruiters, Employers & Job Seekers",
    paragraph:
      "We create scalable job portal platforms that support high traffic, multiple user roles, and seamless hiring workflows.",

    lists: [
      {
        column: 1,
        items: [
          "Employer & Recruiter Dashboards",
          "Job Seeker Profiles & Resume Builder",
          "Scalable Multi‑User Architecture"
        ]
      },
      {
        column: 2,
        items: [
          "Real‑Time Application Tracking",
          "Custom Job Categories & Skills",
          "Easy Integration with ATS & APIs"
        ]
      }
    ],

    images: {
      light: "/images/about/about-image.svg",
      dark: "/images/about/about-image-dark.svg"
    }
  },

  /* ================= ABOUT SECTION TWO ================= */
  aboutSectionTwo: {
    sectionId: "aboutSectionTwo",

    images: {
      light: "./images/about/about-image-2.svg",
      dark: "./images/about/about-image-2-dark.svg"
    },

    items: [
      {
        id: 1,
        title: "Reliable & High‑Performance Platform",
        paragraph:
          "Built to handle large volumes of job listings, applications, and users without compromising speed or reliability."
      },
      {
        id: 2,
        title: "Ongoing Support & Platform Growth",
        paragraph:
          "We provide continuous updates, performance optimization, and feature enhancements as your job portal grows."
      },
      {
        id: 3,
        title: "Modern Technology & Secure Infrastructure",
        paragraph:
          "Developed with modern frameworks, cloud‑ready infrastructure, and strong security practices to protect user data."
      }
    ]
  }
  },
  Health: {
  id: "home",
  backgroundColor: "var(--color-gray-dark)",
  textColors: {
    heading: "text-black dark:text-white",
    description: "text-body-color dark:text-body-color-dark"
  },

  /* ================= HERO ================= */
  hero: {
    title: "Healthcare & Medical Technology Solutions",
    description:
      "We build secure, compliant, and scalable healthcare technology solutions that improve patient outcomes, streamline clinical workflows, and empower medical professionals."
  },
  buttons: [
    {
      label: "Request Healthcare Consultation",
      url: "https://nextjstemplates.com/templates/saas-starter-startup",
      style: "primary"
    },
    {
      label: "Talk to HealthTech Experts",
      url: "https://github.com/NextJSTemplates/startup-nextjs",
      style: "secondary"
    }
  ],

  theme: {
    primaryColor: "#19df19"
  },

  /* ================= FEATURES ================= */
  features: {
    sectionId: "features",
    title: "HEALTHCARE & MEDICAL TECH FEATURES",
    paragraph:
      "Our healthcare platforms are designed to meet strict regulatory requirements while delivering efficient, patient‑centric digital experiences.",

    items: [
      {
        id: 1,
        icon: ShoppingCart,
        title: "Electronic Health Records (EHR / EMR)",
        paragraph:
          "Secure digital health records that centralize patient data, medical history, prescriptions, and lab results for better clinical decision‑making."
      },
      {
        id: 2,
        icon: CreditCard,
        title: "Telemedicine & Virtual Care",
        paragraph:
          "HIPAA‑compliant telehealth solutions enabling remote consultations, video visits, appointment scheduling, and digital prescriptions."
      },
      {
        id: 3,
        icon: PackageCheck,
        title: "Appointment & Patient Management",
        paragraph:
          "Streamlined scheduling, patient check‑ins, reminders, and queue management to reduce wait times and improve patient experience."
      },
      {
        id: 4,
        icon: Brain,
        title: "AI‑Powered Clinical Insights",
        paragraph:
          "AI‑driven analytics to assist in diagnosis, predict patient risks, and provide actionable insights for healthcare professionals."
      },
      {
        id: 5,
        icon: Smartphone,
        title: "Patient Portals & Mobile Health Apps",
        paragraph:
          "Secure patient portals and mobile apps for accessing medical records, test results, prescriptions, and care plans anytime."
      },
      {
        id: 6,
        icon: ShieldCheck,
        title: "Security, Compliance & Data Privacy",
        paragraph:
          "Built with HIPAA, GDPR, and healthcare security best practices including encryption, access control, and audit trails."
      }
    ]
  },

  /* ================= VIDEO ================= */
  vedio: {
    sectionId: "vedio",
    title: "Transforming Healthcare Through Technology",
    paragraph:
      "Our healthcare technology solutions empower providers to deliver better care while ensuring data security, compliance, and operational efficiency."
  },

  /* ================= ABOUT SECTION ONE ================= */
  aboutSectionOne: {
    sectionId: "aboutSectionOne",
    title: "Built for Hospitals, Clinics & HealthTech Innovators",
    paragraph:
      "We partner with healthcare organizations to design digital solutions that enhance patient care, optimize workflows, and scale with growing medical demands.",

    lists: [
      {
        column: 1,
        items: [
          "HIPAA & GDPR‑Compliant Architecture",
          "Patient‑Centric UX Design",
          "Scalable Cloud‑Based Infrastructure"
        ]
      },
      {
        column: 2,
        items: [
          "Interoperable Healthcare Systems",
          "Real‑Time Data & Reporting",
          "Seamless Integration with Medical Devices"
        ]
      }
    ],

    images: {
      light: "/images/about/about-image.svg",
      dark: "/images/about/about-image-dark.svg"
    }
  },

  /* ================= ABOUT SECTION TWO ================= */
  aboutSectionTwo: {
    sectionId: "aboutSectionTwo",

    images: {
      light: "./images/about/about-image-2.svg",
      dark: "./images/about/about-image-2-dark.svg"
    },

    items: [
      {
        id: 1,
        title: "Reliable & Clinically Safe Systems",
        paragraph:
          "Our healthcare platforms undergo rigorous testing and validation to ensure reliability, accuracy, and patient safety."
      },
      {
        id: 2,
        title: "Ongoing Support & Regulatory Updates",
        paragraph:
          "Continuous monitoring, maintenance, and compliance updates to meet evolving healthcare regulations and standards."
      },
      {
        id: 3,
        title: "Modern HealthTech Stack",
        paragraph:
          "Built using secure cloud infrastructure, modern frameworks, and interoperable standards such as HL7 and FHIR."
      }
    ]
  }
  },
  Education: {
  id: "home",
  backgroundColor: "var(--color-gray-dark)",
  textColors: {
    heading: "text-black dark:text-white",
    description: "text-body-color dark:text-body-color-dark"
  },

  /* ================= HERO ================= */
  hero: {
    title: "Education & EdTech Solutions for Digital Learning",
    description:
      "We build innovative education platforms that enhance learning experiences, empower educators, and scale seamlessly for institutions and EdTech startups."
  },
  buttons: [
    {
      label: "Start Your EdTech Project",
      url: "https://nextjstemplates.com/templates/saas-starter-startup",
      style: "primary"
    },
    {
      label: "Talk to EdTech Experts",
      url: "https://github.com/NextJSTemplates/startup-nextjs",
      style: "secondary"
    }
  ],

  theme: {
    primaryColor: "#17dada"
  },

  /* ================= FEATURES ================= */
  features: {
    sectionId: "features",
    title: "EDUCATION & EDTECH FEATURES",
    paragraph:
      "Our EdTech platforms are designed to deliver engaging, personalized, and scalable learning experiences for students, teachers, and institutions.",

    items: [
      {
        id: 1,
        icon: ShoppingCart,
        title: "Learning Management System (LMS)",
        paragraph:
          "Comprehensive LMS solutions for course creation, content management, assignments, quizzes, and learner progress tracking."
      },
      {
        id: 2,
        icon: CreditCard,
        title: "Virtual Classrooms & Live Learning",
        paragraph:
          "Interactive virtual classrooms with live video sessions, chat, screen sharing, and real‑time collaboration."
      },
      {
        id: 3,
        icon: PackageCheck,
        title: "Student Progress & Performance Tracking",
        paragraph:
          "Detailed analytics and reports to monitor student performance, engagement levels, and learning outcomes."
      },
      {
        id: 4,
        icon: Brain,
        title: "AI‑Powered Personalized Learning",
        paragraph:
          "AI‑driven recommendations that adapt learning paths based on student behavior, strengths, and areas for improvement."
      },
      {
        id: 5,
        icon: Smartphone,
        title: "Mobile‑First Learning Experience",
        paragraph:
          "Responsive and mobile‑friendly platforms that enable learning anytime, anywhere, on any device."
      },
      {
        id: 6,
        icon: ShieldCheck,
        title: "Secure Access & Data Privacy",
        paragraph:
          "Role‑based access, secure authentication, and data protection aligned with education privacy standards."
      }
    ]
  },

  /* ================= VIDEO ================= */
  vedio: {
    sectionId: "vedio",
    title: "Empowering Learning Through Technology",
    paragraph:
      "Our education technology solutions help institutions and educators deliver engaging digital learning experiences that inspire growth and success."
  },

  /* ================= ABOUT SECTION ONE ================= */
  aboutSectionOne: {
    sectionId: "aboutSectionOne",
    title: "Built for Schools, Universities & EdTech Innovators",
    paragraph:
      "We collaborate with educators and organizations to create scalable digital learning platforms that support modern teaching and learning models.",

    lists: [
      {
        column: 1,
        items: [
          "Custom LMS & Course Platforms",
          "Interactive Learning Tools",
          "Scalable Cloud‑Based Infrastructure"
        ]
      },
      {
        column: 2,
        items: [
          "Real‑Time Learning Analytics",
          "Multi‑Role User Management",
          "Seamless Integration with Education Tools"
        ]
      }
    ],

    images: {
      light: "/images/about/about-image.svg",
      dark: "/images/about/about-image-dark.svg"
    }
  },

  /* ================= ABOUT SECTION TWO ================= */
  aboutSectionTwo: {
    sectionId: "aboutSectionTwo",

    images: {
      light: "./images/about/about-image-2.svg",
      dark: "./images/about/about-image-2-dark.svg"
    },

    items: [
      {
        id: 1,
        title: "Reliable & Scalable Learning Platforms",
        paragraph:
          "Our platforms are built to support thousands of concurrent learners while maintaining performance and reliability."
      },
      {
        id: 2,
        title: "Continuous Support & Platform Evolution",
        paragraph:
          "Ongoing updates, feature enhancements, and performance optimization to meet evolving education needs."
      },
      {
        id: 3,
        title: "Modern EdTech Technology Stack",
        paragraph:
          "Developed using modern frameworks, cloud infrastructure, and secure APIs to deliver future‑ready education solutions."
      }
    ]
  }
  },
  finance: {
  id: "home",
  backgroundColor: "var(--color-gray-dark)",
  textColors: {
    heading: "text-black dark:text-white",
    description: "text-body-color dark:text-body-color-dark"
  },

  /* ================= HERO ================= */
  hero: {
    title: "Secure Finance, FinTech & Banking Solutions",
    description:
      "We build robust financial technology platforms that enable secure transactions, digital banking experiences, and data‑driven financial decision‑making."
  },
  buttons: [
    {
      label: "Request FinTech Consultation",
      url: "https://nextjstemplates.com/templates/saas-starter-startup",
      style: "primary"
    },
    {
      label: "Talk to FinTech Specialists",
      url: "https://github.com/NextJSTemplates/startup-nextjs",
      style: "secondary"
    }
  ],

  theme: {
    primaryColor: "#8414c6"
  },

  /* ================= FEATURES ================= */
  features: {
    sectionId: "features",
    title: "FINANCE, FINTECH & BANKING FEATURES",
    paragraph:
      "Our financial platforms are designed to meet regulatory requirements while delivering seamless, secure, and innovative digital financial services.",

    items: [
      {
        id: 1,
        icon: ShoppingCart,
        title: "Digital Banking & Wallet Solutions",
        paragraph:
          "Modern digital banking platforms including wallets, account management, payments, and real‑time transaction tracking."
      },
      {
        id: 2,
        icon: CreditCard,
        title: "Secure Payments & Transaction Processing",
        paragraph:
          "High‑performance payment processing with fraud prevention, encryption, and support for multiple payment methods."
      },
      {
        id: 3,
        icon: PackageCheck,
        title: "Financial Reporting & Compliance",
        paragraph:
          "Automated financial reporting, audit logs, and compliance management aligned with global banking standards."
      },
      {
        id: 4,
        icon: Brain,
        title: "AI‑Driven Risk & Fraud Detection",
        paragraph:
          "AI‑powered analytics to detect fraudulent activities, assess credit risk, and improve financial decision‑making."
      },
      {
        id: 5,
        icon: Smartphone,
        title: "Mobile Banking & FinTech Apps",
        paragraph:
          "Secure, user‑friendly mobile applications that enable customers to manage finances anytime, anywhere."
      },
      {
        id: 6,
        icon: ShieldCheck,
        title: "Security, Compliance & Data Protection",
        paragraph:
          "Enterprise‑grade security with compliance to PCI‑DSS, GDPR, SOC 2, and banking regulations."
      }
    ]
  },

  /* ================= VIDEO ================= */
  vedio: {
    sectionId: "vedio",
    title: "Driving the Future of Digital Finance",
    paragraph:
      "Our FinTech solutions help banks and financial institutions modernize operations, enhance customer trust, and deliver innovative financial services."
  },

  /* ================= ABOUT SECTION ONE ================= */
  aboutSectionOne: {
    sectionId: "aboutSectionOne",
    title: "Built for Banks, FinTech Startups & Financial Institutions",
    paragraph:
      "We partner with financial organizations to develop secure, scalable platforms that support digital transformation and regulatory compliance.",

    lists: [
      {
        column: 1,
        items: [
          "Regulatory‑Compliant Architecture",
          "High‑Availability Financial Systems",
          "Scalable Cloud‑Native Infrastructure"
        ]
      },
      {
        column: 2,
        items: [
          "Real‑Time Financial Analytics",
          "API‑Driven Integrations",
          "Enterprise‑Grade Security Controls"
        ]
      }
    ],

    images: {
      light: "/images/about/about-image.svg",
      dark: "/images/about/about-image-dark.svg"
    }
  },

  /* ================= ABOUT SECTION TWO ================= */
  aboutSectionTwo: {
    sectionId: "aboutSectionTwo",

    images: {
      light: "./images/about/about-image-2.svg",
      dark: "./images/about/about-image-2-dark.svg"
    },

    items: [
      {
        id: 1,
        title: "Reliable & Transaction‑Safe Platforms",
        paragraph:
          "Our financial systems are built for accuracy, uptime, and transaction integrity, ensuring trust in every operation."
      },
      {
        id: 2,
        title: "Continuous Compliance & System Support",
        paragraph:
          "Ongoing monitoring, security updates, and regulatory compliance support to meet evolving financial standards."
      },
      {
        id: 3,
        title: "Modern FinTech Technology Stack",
        paragraph:
          "Built using modern frameworks, secure cloud infrastructure, and scalable APIs to power next‑generation financial products."
      }
    ]
  }
  },
  Logistics: {
    id: "home",
    backgroundColor: "var(--color-gray-dark)",
    textColors: {
      heading: "text-black dark:text-white",
      description: "text-body-color dark:text-body-color-dark"
    },

    /* ================= HERO ================= */
    hero: {
      title: "Smart Logistics & Global Supply Chain Solutions",
      description:
        "Streamline your operations with real-time tracking, intelligent routing, and end-to-end fleet management designed for maximum efficiency."
    },
    buttons: [
      {
        label: "Request a Quote",
        url: "https://yourdomain.com/quote",
        style: "primary"
      },
      {
        label: "Track Shipment",
        url: "https://yourdomain.com/track",
        style: "secondary"
      }
    ],

    theme: {
      primaryColor: "#cc1baf"
    },

    /* ================= FEATURES ================= */
    features: {
      sectionId: "features",
      title: "CORE LOGISTICS FEATURES",
      paragraph:
        "We provide a comprehensive suite of tools to manage freight, monitor fleets, and optimize every step of your supply chain journey.",
      items: [
        {
          id: 1,
          icon: Truck,
          title: "Real-Time Fleet Monitoring",
          paragraph:
            "Get 24/7 visibility of your entire fleet with high-precision GPS tracking and live status updates for every vehicle."
        },
        {
          id: 2,
          icon: MapIcon,
          title: "AI-Powered Route Optimization",
          paragraph:
            "Reduce fuel costs and delivery times using advanced algorithms that calculate the most efficient paths based on live traffic."
        },
        {
          id: 3,
          icon: Warehouse,
          title: "Smart Warehouse Management",
          paragraph:
            "Optimize inventory levels, pick-and-pack workflows, and storage utilization with our integrated WMS solutions."
        },
        {
          id: 4,
          icon: BarChart,
          title: "Predictive Supply Chain Analytics",
          paragraph:
            "Leverage big data to forecast demand, identify bottlenecks, and make informed decisions to scale your operations."
        },
        {
          id: 5,
          icon: Globe,
          title: "Cross-Border Freight Solutions",
          paragraph:
            "Seamlessly manage international shipments with automated customs documentation and multi-modal transit coordination."
        },
        {
          id: 6,
          icon: ShieldCheck,
          title: "Cargo Security & Compliance",
          paragraph:
            "Ensure the safety of your goods with automated compliance tracking, secure digital BOLs, and temperature-controlled monitoring."
        }
      ]
    },

    /* ================= VIDEO ================= */
    vedio: {
      sectionId: "vedio",
      title: "Driving the Future of Transit",
      paragraph:
        "Whether you are managing local last-mile deliveries or global freight movements, our technology ensures your cargo reaches its destination safely and on time."
    },

    /* ================= ABOUT SECTION ONE ================= */
    aboutSectionOne: {
      sectionId: "aboutSectionOne",
      title: "Built for Modern Carriers, Shippers & 3PLs",
      paragraph:
        "Our platform is engineered to solve the complexities of modern logistics, combining robust cloud infrastructure with user-centric design.",
      lists: [
        {
          column: 1,
          items: [
            "Enterprise-Grade Scalability",
            "Real-Time Telematics Data",
            "Automated Dispatching"
          ]
        },
        {
          column: 2,
          items: [
            "API-First Integration",
            "Carrier Performance Metrics",
            "Cloud-Native Security"
          ]
        }
      ],
      images: {
        light: "/images/about/logistics-light.svg",
        dark: "/images/about/logistics-dark.svg"
      }
    },

    /* ================= ABOUT SECTION TWO ✅ ================= */
    aboutSectionTwo: {
      sectionId: "aboutSectionTwo",

      images: {
        light: "./images/about/fleet-management.svg",
        dark: "./images/about/fleet-management-dark.svg"
      },

      items: [
        {
          id: 1,
          title: "Zero-Latency Tracking",
          paragraph:
            "Eliminate 'dark spots' in your supply chain with our global satellite tracking and instant event notification system."
        },
        {
          id: 2,
          title: "Seamless Partner Connectivity",
          paragraph:
            "Easily onboard vendors and partners into a unified digital ecosystem, ensuring data transparency across all tiers."
        },
        {
          id: 3,
          title: "Sustainability Focused",
          paragraph:
            "Monitor carbon footprints and optimize loads to reduce environmental impact without compromising on speed."
        }
      ]
    }
  },
  DigitalMarketing: {
    id: "home",
    backgroundColor: "var(--color-gray-dark)",
    textColors: {
      heading: "text-black dark:text-white",
      description: "text-body-color dark:text-body-color-dark"
    },

    /* ================= HERO ================= */
    hero: {
      title: "Data-Driven Digital Marketing & Brand Growth",
      description:
        "We combine creative storytelling with performance marketing to scale your brand, dominate search results, and convert your audience into loyal customers."
    },
    buttons: [
      {
        label: "Start Your Growth Audit",
        url: "https://yourmarketinglink.com/audit",
        style: "primary"
      },
      {
        label: "View Case Studies",
        url: "https://yourmarketinglink.com/work",
        style: "secondary"
      }
    ],

    theme: {
      primaryColor: "#c81974" 
    },

    /* ================= FEATURES ================= */
    features: {
      sectionId: "features",
      title: "MARKETING SOLUTIONS",
      paragraph:
        "Maximize your ROI with a full suite of digital services designed to capture attention and drive measurable revenue growth.",
      items: [
        {
          id: 1,
          icon: Megaphone,
          title: "Search Engine Optimization (SEO)",
          paragraph:
            "Propel your website to the top of Google with data-backed keyword strategies, technical audits, and authority-building content."
        },
        {
          id: 2,
          icon: MousePointerClick,
          title: "Pay-Per-Click (PPC) Management",
          paragraph:
            "High-converting ad campaigns across Google, Meta, and LinkedIn designed to minimize cost-per-acquisition and maximize spend."
        },
        {
          id: 3,
          icon: Share2,
          title: "Social Media Strategy",
          paragraph:
            "Building community and viral presence through creative content, influencer partnerships, and proactive audience engagement."
        },
        {
          id: 4,
          icon: PenTool,
          title: "Content Marketing & Copywriting",
          paragraph:
            "Engaging blogs, whitepapers, and video scripts that establish your brand as a thought leader and nurture leads through the funnel."
        },
        {
          id: 5,
          icon: Mail,
          title: "Email & Lifecycle Automation",
          paragraph:
            "Personalized email workflows that recover abandoned carts, welcome new users, and increase customer lifetime value automatically."
        },
        {
          id: 6,
          icon: LineChart,
          title: "Advanced Analytics & Reporting",
          paragraph:
            "Full-funnel attribution and transparent reporting dashboards so you always know exactly how your marketing budget is performing."
        }
      ]
    },

    /* ================= VIDEO ================= */
    vedio: {
      sectionId: "video",
      title: "See How We Scale Brands",
      paragraph:
        "From startups to enterprises, our methodology remains the same: analyze, optimize, and dominate. Watch how we turn clicks into customers."
    },

    /* ================= ABOUT SECTION ONE ================= */
    aboutSectionOne: {
      sectionId: "aboutSectionOne",
      title: "Where High-Level Creativity Meets Technical Precision",
      paragraph:
        "Our approach isn't just about 'getting likes.' We focus on the metrics that matter: lead quality, conversion rates, and sustainable brand equity.",
      lists: [
        {
          column: 1,
          items: [
            "ROI-Focused Campaigns",
            "Multi-Channel Attribution",
            "Custom Growth Roadmaps"
          ]
        },
        {
          column: 2,
          items: [
            "A/B Testing Frameworks",
            "Deep Audience Insights",
            "Agile Execution Model"
          ]
        }
      ],
      images: {
        light: "/images/about/marketing-strategy.svg",
        dark: "/images/about/marketing-strategy-dark.svg"
      }
    },

    /* ================= ABOUT SECTION TWO ✅ ================= */
    aboutSectionTwo: {
      sectionId: "aboutSectionTwo",

      images: {
        light: "./images/about/analytics-view.svg",
        dark: "./images/about/analytics-view-dark.svg"
      },

      items: [
        {
          id: 1,
          title: "Predictive Audience Targeting",
          paragraph:
            "We use machine learning to identify your most profitable customers before they even search for your product."
        },
        {
          id: 2,
          title: "Brand Authority Building",
          paragraph:
            "Establish a consistent and powerful brand voice that resonates across every digital touchpoint and builds long-term trust."
        },
        {
          id: 3,
          title: "Conversion Rate Optimization",
          paragraph:
            "We don't just send traffic; we optimize your entire landing page experience to ensure every visitor has a reason to stay."
        }
      ]
    }
  },
  PropTech: {
    id: "home",
    backgroundColor: "var(--color-gray-dark)",
    textColors: {
      heading: "text-black dark:text-white",
      description: "text-body-color dark:text-body-color-dark"
    },

    /* ================= HERO ================= */
    hero: {
      title: "The Future of Intelligent Property Management",
      description:
        "Seamlessly manage, market, and scale your real estate portfolio with our AI-powered PropTech platform designed for modern agents and enterprise firms."
    },
    buttons: [
      {
        label: "Book a Demo",
        url: "https://yourproptechsite.com/demo",
        style: "primary"
      },
      {
        label: "Explore Features",
        url: "https://yourproptechsite.com/features",
        style: "secondary"
      }
    ],

    theme: {
      primaryColor: "#b91010" 
    },

    /* ================= FEATURES ================= */
    features: {
      sectionId: "features",
      title: "CORE PROPTECH FEATURES",
      paragraph:
        "Leverage next-generation technology to automate workflows, engage tenants, and make data-backed investment decisions with surgical precision.",
      items: [
        {
          id: 1,
          icon: Home,
          title: "AI-Powered Property Valuation",
          paragraph:
            "Instant, highly accurate market appraisals using machine learning models that analyze local trends, historical data, and live demand."
        },
        {
          id: 2,
          icon: View,
          title: "Immersive 3D Virtual Tours",
          paragraph:
            "Integrate high-fidelity VR and AR walkthroughs that allow prospective buyers to explore properties from anywhere in the world."
        },
        {
          id: 3,
          icon: Users,
          title: "Smart Tenant & Lease Portal",
          paragraph:
            "Automate rent collection, lease renewals, and maintenance requests through a centralized, mobile-first resident experience."
        },
        {
          id: 4,
          icon: Zap,
          title: "IoT & Smart Building Integration",
          paragraph:
            "Monitor energy efficiency, security systems, and climate control in real-time to reduce costs and improve sustainability."
        },
        {
          id: 5,
          icon: Database,
          title: "Predictive Investment Analytics",
          paragraph:
            "Identify high-yield opportunities before they hit the market with heatmaps and predictive growth forecasting."
        },
        {
          id: 6,
          icon: ShieldCheck,
          title: "Blockchain Secure Transactions",
          paragraph:
            "Facilitate secure, transparent, and paperless closings using smart contracts and encrypted document management."
        }
      ]
    },

    /* ================= VIDEO ================= */
    vedio: {
      sectionId: "video",
      title: "Redefining the Real Estate Experience",
      paragraph:
        "Experience how our platform bridges the gap between traditional brokerage and the digital-first future of global property commerce."
    },

    /* ================= ABOUT SECTION ONE ================= */
    aboutSectionOne: {
      sectionId: "aboutSectionOne",
      title: "Built for Residential, Commercial & Multifamily Growth",
      paragraph:
        "Whether you manage a single luxury listing or a nationwide commercial portfolio, our architecture is built to provide total visibility and control.",
      lists: [
        {
          column: 1,
          items: [
            "Hyper-Localized Market Data",
            "White-Label Agent Tools",
            "Automated Compliance Engine"
          ]
        },
        {
          column: 2,
          items: [
            "Seamless MLS Integration",
            "Cross-Platform Lead Tracking",
            "Enterprise Security Standards"
          ]
        }
      ],
      images: {
        light: "/images/about/proptech-hero-light.svg",
        dark: "/images/about/proptech-hero-dark.svg"
      }
    },

    /* ================= ABOUT SECTION TWO ✅ ================= */
    aboutSectionTwo: {
      sectionId: "aboutSectionTwo",

      images: {
        light: "./images/about/property-dashboard.svg",
        dark: "./images/about/property-dashboard-dark.svg"
      },

      items: [
        {
          id: 1,
          title: "Lead Conversion Mastery",
          paragraph:
            "Our AI assistant qualifies leads 24/7, booking tours and answering property queries while your agents focus on closing."
        },
        {
          id: 2,
          title: "Unified Portfolio Management",
          paragraph:
            "Consolidate your listings, financial reports, and tenant communications into a single, beautiful dashboard."
        },
        {
          id: 3,
          title: "Mobile-First Accessibility",
          paragraph:
            "Manage your entire business from the palm of your hand with native apps optimized for on-site property managers."
        }
      ]
    }
  }
};

export default startupPageData;