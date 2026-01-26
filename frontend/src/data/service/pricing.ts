import type { IPricing } from "@/data/types/service";

export const pricingData: IPricing[] = [
    {
        name: "Frontend",
        price: 29,
        period: "month",
        features: [
            "HTML5 / CSS3",
            "JavaScript / TypeScript",
            "React.js / Angular",
            "Next.js",
            "Bootstrap",
            "Tailwind CSS/Material UI",
            "Sass / SCSS",

        ],
        mostPopular: false
    },
    {
        name: "Backend",
        price: 79,
        period: "month",
        features: [
            "Node.js / Express.js / NestJS",
            "Python / Django / Flask",
            "Java / Spring Boot",
            "PHP / Laravel",
            "C# / Go / ASP.NET Core",
            "",
            "Ruby / Rails",
            "Kafka / Celery",

        ],
        mostPopular: true
    },
    {
        name: "DevOps & SD",
        price: 199,
        period: "month",
        features: [
           "Docker / Kubernetes",
           "Git / GitHub",
           "AWS / Azure",
           "Nginx",
           "JWT / Session-based Auth",
           "Role-Based Access Control",
           "REST APIs / WebSockets ",
           "MVC / Micro / Monolithic Arch  "


        ],
        mostPopular: true
    },
    {
        name: "Database",
        price: 199,
        period: "month",
        features: [
           "MySQL / PostgreSQL",
           "Oracle Database / SQLite",
           "MongoDB / Firestore",
           "Redis",
           "Amazon RDS / Google Cloud",
           "Firebase Realtime Database",
           "Postman / Swagger ",

        ],
        mostPopular: false
    },
    

];