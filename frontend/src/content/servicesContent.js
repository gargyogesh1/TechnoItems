
export const servicesContent = {
  // web: {
  //   title: "Web Development Services",
  //   subtitle: "Build Fast, Secure & Scalable Websites",
  //   description:
  //     "We create high‑performance, SEO‑friendly websites that help businesses grow, engage users, and convert visitors into customers.",
  //   points: [
  //     "Custom Website Development",
  //     "Frontend & Backend Development",
  //     "Responsive & Mobile‑First Design",
  //     "Secure & Scalable Architecture",
  //   ],
  // },

  // app: {
  //   title: "Mobile App Development",
  //   subtitle: "Powerful Apps for Android & iOS",
  //   description:
  //     "We design and develop intuitive, high‑performance mobile applications that deliver seamless user experiences.",
  //   points: [
  //     "Android & iOS App Development",
  //     "Cross‑Platform Solutions",
  //     "UI/UX Focused Design",
  //     "Scalable Backend Integration",
  //   ],
  // },

  // digitalMarketing: {
  //   title: "Digital Marketing Services",
  //   subtitle: "Grow Your Brand & Boost Conversions",
  //   description:
  //     "Data‑driven digital marketing strategies that increase traffic, generate leads, and maximize ROI.",
  //   points: [
  //     "SEO & Content Marketing",
  //     "Social Media Marketing",
  //     "Paid Ads & PPC Campaigns",
  //     "Conversion Rate Optimization",
  //   ],
  // },

  // dataScience: {
  //   title: "Data Science Solutions",
  //   subtitle: "Turn Data into Business Intelligence",
  //   description:
  //     "Advanced analytics and AI‑driven insights to help businesses make smarter decisions.",
  //   points: [
  //     "Data Analysis & Visualization",
  //     "Machine Learning Models",
  //     "Predictive Analytics",
  //     "Business Intelligence Dashboards",
  //   ],
  // },
  web: {
    // themeColor: "bg-pink-600",
    theme: {
      bg: "bg-pink-950/30",
      bgD: "bg-pink-950",
      bgButton: "bg-pink-400",
      text: "text-pink-900",
      hover: "hover:bg-pink-700",
      border: "border-pink-900",
      from: "from-pink-600",
    },
    title: "Web Development Services",
    subtitle: "Build Fast, Secure & Scalable Websites That Grow Your Business",
    description:"Professional web development services for modern businesses. We design and develop high‑performance websites that convert visitors into customers.",
    description2:"We design and develop high‑performance websites that convert visitors into customers.",

    ctaPrimary: "Get a Free Consultation",
    ctaSecondary: "View Our Work",

    points: [
      "Custom Web Development",
      "Scalable Websites",
      "Business Websites",
    ],

    servicesSection: {
      title: "Our Web Development Services",
      subtitle: "What We Offer",
      description:
        "Components, patterns and pages — everything you need to ship.",

      services: [
        {
          icon: "code",
          title: "Custom Website Development",
          description:
            "We build fully customized websites designed around your brand, functionality, and target audience.",
        },
        {
          icon:"layers",
          title: "Frontend & Backend Development",
          description:
            "Robust frontend interfaces combined with secure backend systems.",
        },
        {
          icon:"smartphone",
          title: "Responsive Web Design",
          description:
            "Your website will look and work perfectly on desktops, tablets, and mobile devices.",
        },
      ],
    },

    valueProposition: {
      description:
        "Our web development services focus on creating visually stunning, fast‑loading, and user‑friendly websites that align with your business goals. Whether you’re a startup, small business, or enterprise, we build scalable web solutions using the latest technologies to ensure performance, security, and growth.",
      headline: "Better design with highest revenue and profits",
      subheadline: "Custom Web Development Solutions Tailored to Your Business",
    },

    // ✅ SIMPLE TECHNOLOGY SHOWCASE (logos / icons section)
  technologies: [
    {
      image: "/tech/python.png",
      name: "Python",
      stack: ["Django", "Flask"],
    },
    {
      image: "/tech/php.png",
      name: "PHP",
      stack: ["Laravel"],
    },
    {
      image: "/tech/java.png",
      name: "Java",
      stack: ["Spring Boot"],
    },
    {
      image: "/tech/react.png",
      name: "ReactJS",
      stack: ["NodeJS", "Express", "NextJS"],
    },
  ],

    // ✅ DETAILED STACK SECTION (cards / pricing-style UI)
    technologiesSection: {
      title: "Technologies",
      subtitle: "We don’t just talk about skills — we build with them.",
      description:
        "Our team actively works across modern programming languages and frameworks to deliver reliable, scalable, and high‑performance solutions.",

      stacks: [
        {
          category: "Frontend",
          badge: "Get Started",
          items: [
            "HTML5 / CSS3",
            "JavaScript / TypeScript",
            "React.js / Angular",
            "Next.js",
            "Bootstrap",
            "Tailwind CSS / Material UI",
            "Sass / SCSS",
          ],
        },
        {
          category: "Backend",
          badge: "Most Popular",
          items: [
            "Node.js / Express.js / NestJS",
            "Python / Django / Flask",
            "Java / Spring Boot",
            "PHP / Laravel",
            "C# / Go / ASP.NET Core",
            "Ruby / Rails",
            "Kafka / Celery",
          ],
        },
        {
          category: "DevOps & SD",
          badge: "Most Popular",
          items: [
            "Docker / Kubernetes",
            "Git / GitHub",
            "AWS / Azure",
            "Nginx",
            "JWT / Session-based Auth",
            "Role-Based Access Control",
            "REST APIs / WebSockets",
            "MVC / Micro / Monolithic Arch",
          ],
        },
        {
          category: "Database",
          badge: "Get Started",
          items: [
            "MySQL / PostgreSQL",
            "Oracle Database / SQLite",
            "MongoDB / Firestore",
            "Redis",
            "Amazon RDS / Google Cloud",
            "Firebase Realtime Database",
            "Postman / Swagger",
          ],
        },
      ],
    },
  },
  app: {
    theme: {
      bg: "bg-indigo-950/30",
      bgD: "bg-indigo-950",
      bgButton: "bg-indigo-400",
      color: "#d9ec48ff",
      text: "text-indigo-900",
      hover: "hover:bg-indigo-700",
      border: "border-indigo-900",
      from: "from-indigo-600",
    },
    title: "Mobile App Development Services",
    subtitle: "Build Powerful, Secure & Scalable Mobile Apps for Android & iOS",
    description:
      "Professional mobile app development services for businesses looking to scale faster. We design and develop high‑performance Android and iOS applications that engage users and drive growth.",
    description2:
      "We create feature‑rich, user‑friendly mobile applications that transform ideas into successful digital products.",

    ctaPrimary: "Get a Free App Consultation",
    ctaSecondary: "View Our Apps",

    points: [
      "Android App Development",
      "iOS App Development",
      "Cross‑Platform Mobile Apps",
    ],

    servicesSection: {
      title: "Our Mobile App Development Services",
      subtitle: "What We Offer",
      description:
        "From concept to launch — everything you need to build successful mobile applications.",

      services: [
        {
          icon: "smartphone",
          title: "Android App Development",
          description:
            "Custom Android applications built with performance, security, and scalability in mind for all Android devices.",
        },
        {
          icon: "apple",
          title: "iOS App Development",
          description:
            "High‑quality iOS applications designed for iPhone and iPad, ensuring smooth performance and an exceptional user experience.",
        },
        {
          icon: "layers",
          title: "Cross‑Platform App Development",
          description:
            "Build cost‑effective apps using a single codebase with Flutter or React Native while maintaining native performance.",
        },
      ],
    },

    valueProposition: {
      description:
        "Our mobile app development services help businesses create intuitive, high‑performance Android and iOS applications that users love. Whether you’re a startup launching an MVP or an enterprise scaling globally, we deliver secure, scalable, and future‑ready mobile solutions using the latest technologies.",
      headline: "Build mobile experiences that users love and trust",
      subheadline: "Custom Android & iOS App Development for Growing Businesses",
    },

    // ✅ SIMPLE TECHNOLOGY SHOWCASE (logos / icons section)
    technologies: [
      {
        image: "/tech/android.png",
        name: "Android",
        stack: ["Kotlin", "Java"],
      },
      {
        image: "/tech/apple.png",
        name: "iOS",
        stack: ["Swift", "Objective‑C"],
      },
      {
        image: "/tech/flutter.png",
        name: "Flutter",
        stack: ["Dart"],
      },
      {
        image: "/tech/react-native.png",
        name: "React Native",
        stack: ["JavaScript", "TypeScript"],
      },
    ],

    // ✅ DETAILED STACK SECTION (cards / pricing-style UI)
    technologiesSection: {
      title: "Mobile App Technologies",
      subtitle: "We don’t just build apps — we engineer mobile success.",
      description:
        "Our mobile development team works with modern frameworks, tools, and cloud platforms to deliver fast, secure, and scalable Android and iOS applications.",

      stacks: [
        {
          category: "Android Development",
          badge: "Most Popular",
          items: [
            "Kotlin / Java",
            "Android Studio",
            "Jetpack Compose",
            "MVVM / Clean Architecture",
            "REST APIs / GraphQL",
            "Firebase Integration",
            "Google Play Store Deployment",
          ],
        },
        {
          category: "iOS Development",
          badge: "Get Started",
          items: [
            "Swift / Objective‑C",
            "Xcode",
            "SwiftUI / UIKit",
            "MVVM / VIPER",
            "Apple Human Interface Guidelines",
            "App Store Deployment",
            "In‑App Purchases / Subscriptions",
          ],
        },
        {
          category: "Cross‑Platform",
          badge: "Fast Delivery",
          items: [
            "Flutter / Dart",
            "React Native",
            "Expo",
            "Reusable UI Components",
            "Single Codebase Strategy",
            "Native API Integration",
            "High Performance Rendering",
          ],
        },
        {
          category: "Backend, DevOps & Security",
          badge: "Enterprise Ready",
          items: [
            "Node.js / Firebase / AWS",
            "REST APIs / WebSockets",
            "JWT / OAuth Authentication",
            "Push Notifications",
            "CI/CD for Mobile Apps",
            "App Performance Monitoring",
            "Data Encryption & Secure Storage",
          ],
        },
      ],
    },
  },
  digitalMarketing: {
    theme: {
      bg: "bg-emerald-950/30",
      bgD: "bg-emerald-950",
      bgButton: "bg-emerald-400",
      text: "text-emerald-900",
      hover: "bg-emerald-700",
      border: "border-emerald-900",
      from: "from-emerald-600",
    },
    title: "Digital Marketing Services",
    subtitle: "Grow Your Brand, Increase Traffic & Convert More Customers",
    description:
      "Result‑driven digital marketing services designed to help businesses increase online visibility, generate qualified leads, and maximize ROI across all digital channels.",
    description2:
      "We create data‑driven digital marketing strategies that attract, engage, and convert your ideal audience into loyal customers.",

    ctaPrimary: "Get a Free Marketing Audit",
    ctaSecondary: "View Case Studies",

    points: [
      "Search Engine Optimization (SEO)",
      "Paid Advertising & PPC",
      "Social Media & Content Marketing",
    ],

    servicesSection: {
      title: "Our Digital Marketing Services",
      subtitle: "What We Offer",
      description:
        "End‑to‑end digital marketing solutions focused on measurable growth and long‑term success.",

      services: [
        {
          icon: "search",
          title: "Search Engine Optimization (SEO)",
          description:
            "Boost your website rankings, organic traffic, and visibility on Google with proven on‑page, off‑page, and technical SEO strategies.",
        },
        {
          icon: "mousepointerclick",
          title: "Pay‑Per‑Click Advertising (PPC)",
          description:
            "Launch high‑converting Google Ads and social media campaigns that deliver instant traffic and measurable ROI.",
        },
        {
          icon: "share2",
          title: "Social Media Marketing",
          description:
            "Build brand awareness and engage your audience across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
        },
      ],
    },

    valueProposition: {
      description:
        "Our digital marketing services help businesses grow faster by combining SEO, paid advertising, content, and analytics into a unified growth strategy. Whether you want more website traffic, higher conversions, or stronger brand authority, we deliver marketing campaigns that produce real results.",
      headline: "Turn clicks into customers with smart marketing",
      subheadline: "Data‑Driven Digital Marketing Strategies That Scale",
    },

    // ✅ SIMPLE TECHNOLOGY / TOOLS SHOWCASE
    technologies: [
      {
        image: "/tech/google.png",
        name: "Google",
        stack: ["Google Analytics", "Search Console", "Google Ads"],
      },
      {
        image: "/tech/meta.png",
        name: "Meta",
        stack: ["Facebook Ads", "Instagram Ads"],
      },
      {
        image: "/tech/linkedin.png",
        name: "LinkedIn",
        stack: ["LinkedIn Ads", "B2B Lead Generation"],
      },
      {
        image: "/tech/tools.png",
        name: "Marketing Tools",
        stack: ["Ahrefs", "SEMrush", "Mailchimp"],
      },
    ],

    // ✅ DETAILED MARKETING STACK SECTION
    technologiesSection: {
      title: "Digital Marketing Stack",
      subtitle: "We market with strategy, creativity, and analytics.",
      description:
        "Our marketing team uses industry‑leading tools, platforms, and frameworks to plan, execute, and optimize high‑performing digital campaigns.",

      stacks: [
        {
          category: "Search Engine Optimization",
          badge: "Most Popular",
          items: [
            "Keyword Research & Competitor Analysis",
            "On‑Page SEO Optimization",
            "Technical SEO Audits",
            "Link Building & Outreach",
            "Local SEO & Google My Business",
            "Content Optimization",
            "SEO Performance Tracking",
          ],
        },
        {
          category: "Paid Advertising (PPC)",
          badge: "High ROI",
          items: [
            "Google Ads (Search, Display, Shopping)",
            "Facebook & Instagram Ads",
            "LinkedIn Advertising",
            "Conversion Tracking",
            "Landing Page Optimization",
            "A/B Testing & CRO",
            "Remarketing Campaigns",
          ],
        },
        {
          category: "Content & Social Media",
          badge: "Brand Growth",
          items: [
            "Content Marketing Strategy",
            "Social Media Management",
            "Post Scheduling & Automation",
            "Creative Ad Copy & Visuals",
            "Influencer Marketing",
            "Community Engagement",
            "Brand Reputation Management",
          ],
        },
        {
          category: "Analytics & Marketing Automation",
          badge: "Data‑Driven",
          items: [
            "Google Analytics & GA4",
            "Marketing Funnels",
            "Email Marketing Automation",
            "CRM Integration",
            "Performance Dashboards",
            "ROI & Conversion Reporting",
            "Customer Journey Analysis",
          ],
        },
      ],
    },
  },
  dataScienceAI: {
    theme: {
      bg: "bg-violet-950/30",
      bgD: "bg-violet-950",
      bgButton: "bg-violet-400",
      text: "text-violet-900",
      hover: "hover:bg-violet-700",
      border: "border-violet-900",
      from: "from-violet-600",
    },
    title: "Data Science & AI Solutions",
    subtitle: "Transform Data into Intelligent Insights & Smart Automation",
    description:
      "Advanced Data Science and Artificial Intelligence services that help businesses make smarter decisions, automate processes, and unlock the true value of their data.",
    description2:
      "We build intelligent, data‑driven solutions using machine learning, AI, and analytics to drive innovation, efficiency, and competitive advantage.",

    ctaPrimary: "Get a Free AI Consultation",
    ctaSecondary: "Explore AI Solutions",

    points: [
      "Machine Learning & AI Models",
      "Data Analytics & Visualization",
      "Intelligent Automation",
    ],

    servicesSection: {
      title: "Our Data Science & AI Services",
      subtitle: "What We Offer",
      description:
        "From raw data to real‑world impact — end‑to‑end AI and analytics solutions.",

      services: [
        {
          icon: "brain",
          title: "Artificial Intelligence Solutions",
          description:
            "Custom AI solutions including predictive systems, recommendation engines, and intelligent decision‑making models.",
        },
        {
          icon: "bar-chart-3",
          title: "Data Analytics & Visualization",
          description:
            "Transform complex datasets into actionable insights with interactive dashboards and real‑time analytics.",
        },
        {
          icon: "settings",
          title: "Machine Learning Development",
          description:
            "Design, train, and deploy scalable machine learning models tailored to your business objectives.",
        },
      ],
    },

    valueProposition: {
      description:
        "Our Data Science and AI services empower businesses to harness data for smarter strategies and automated decision‑making. From predictive analytics to advanced AI systems, we help organizations innovate faster and operate more efficiently.",
      headline: "Turn data into decisions with AI‑powered intelligence",
      subheadline: "Scalable Data Science & Artificial Intelligence Solutions",
    },

    // ✅ SIMPLE TECHNOLOGY SHOWCASE
    technologies: [
      {
        image: "/tech/python.png",
        name: "Python",
        stack: ["Pandas", "NumPy", "Scikit‑learn"],
      },
      {
        image: "/tech/tensorflow.png",
        name: "TensorFlow",
        stack: ["Keras", "Deep Learning"],
      },
      {
        image: "/tech/pytorch.png",
        name: "PyTorch",
        stack: ["Neural Networks"],
      },
      {
        image: "/tech/cloud-ai.png",
        name: "Cloud AI",
        stack: ["AWS", "Azure", "Google Cloud"],
      },
    ],

    // ✅ DETAILED DATA SCIENCE & AI STACK
    technologiesSection: {
      title: "Data Science & AI Technology Stack",
      subtitle: "We build intelligence with data, models, and scale.",
      description:
        "Our AI engineers and data scientists leverage modern tools, frameworks, and cloud platforms to build reliable, scalable, and production‑ready AI systems.",

      stacks: [
        {
          category: "Data Science & Analytics",
          badge: "Most Popular",
          items: [
            "Python / R",
            "Pandas / NumPy",
            "SQL / NoSQL Databases",
            "Data Cleaning & Feature Engineering",
            "Exploratory Data Analysis (EDA)",
            "Statistical Modeling",
            "Data Visualization (Matplotlib, Seaborn)",
          ],
        },
        {
          category: "Machine Learning",
          badge: "High Impact",
          items: [
            "Supervised & Unsupervised Learning",
            "Scikit‑learn",
            "Model Training & Evaluation",
            "Hyperparameter Tuning",
            "Time Series Forecasting",
            "Recommendation Systems",
            "Anomaly Detection",
          ],
        },
        {
          category: "Deep Learning & AI",
          badge: "Advanced",
          items: [
            "TensorFlow / Keras",
            "PyTorch",
            "Neural Networks (CNN, RNN, LSTM)",
            "Natural Language Processing (NLP)",
            "Computer Vision",
            "Speech Recognition",
            "Generative AI Models",
          ],
        },
        {
          category: "MLOps & Deployment",
          badge: "Enterprise Ready",
          items: [
            "Model Deployment (API‑based)",
            "Docker / Kubernetes",
            "CI/CD for ML",
            "Model Monitoring & Drift Detection",
            "Cloud AI Services (AWS, Azure, GCP)",
            "Data Pipelines & ETL",
            "Security & Compliance",
          ],
        },
      ],
    },
  }
};