
import TiltedImage from "@/components/service/TiltImage";
import SectionTitle from "@/components/service/SectionTitle";
import TechnologyCard from "@/components/service/TestimonialCard";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMeeting } from "@/components/MeetingContext";


// import { featuresData } from "@/data/service/features";
import { pricingData } from "@/data/service/pricing";
import { testimonialsData } from "@/data/service/testimonial";

import type { IFeature , IPricing , ITestimonial } from "@/data/types/service";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Marquee from "react-fast-marquee";

import { ArrowRightIcon, MailIcon, UserIcon, CheckIcon, VideoIcon } from "lucide-react";

import { servicesContent } from "@/content/servicesContent";
import { useParams } from "react-router-dom";
import { Code, Layers, Smartphone, Apple , Search , MousePointerClick , Share2 , Brain , BarChart3 , Settings } from "lucide-react";
// import { CheckIcon } from "@heroicons/react/24/solid";

export default function Service() {
    const { serviceType } = useParams();
    const service =servicesContent[serviceType as keyof typeof servicesContent];
    if (!service) {
        return <h1>Service not found</h1>;
    }
    const iconMap: Record<string, JSX.Element> = {
        code: <Code size={28} className="text-pink-500" />,
        layers: <Layers size={28} className="text-purple-500" />,
        smartphone: <Smartphone size={28} className="text-blue-500" />,
        apple: <Apple size={28} className="text-blue-500" />,
        search: <Search size={28} className="text-blue-500" />,
        mousepointerclick: <MousePointerClick size={28} className="text-blue-500" />,
        share2: <Share2 size={28} className="text-blue-500" />,
        brain: <Brain size={28} className="text-blue-500" />,
        "bar-chart-3": <BarChart3 size={28} className="text-blue-500" />,
        settings: <Settings size={28} className="text-blue-500" />,
    };

    const specialFeatures = service.points;
    const featuresData = service.servicesSection.services;
    const technologiesData = service.technologies;
    const techStacks = service.technologiesSection.stacks;
    const { setOpen } = useMeeting();
    
    return (
        <>
        <Navbar></Navbar>
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            <div className={`absolute top-30 -z-10 left-1/4 size-72 ${service.theme.bgD} blur-[150px]`}></div>
            <motion.h1
                className="
                    flex justify-center
                    mt-8 sm:mt-12 md:mt-[77px]
                    opacity-100 transform-none
                    text-3xl/10 sm:text-4xl/12 md:text-5xl/17 lg:text-6xl/21
                    font-medium
                    max-w-full sm:max-w-5xl
                    px-4
                    text-center
                "
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", marginTop:"40px"}} className="move-gradient px-3 py-1 rounded-xl">
                  {service.title}
                </span>
            </motion.h1>
            <motion.p className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut"}}
            >
                {service.subtitle}
            </motion.p>
            <motion.h1 className="text-4xl/12 md:text-6xl/21 font-medium max-w-7xl text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut"}}
            >
                {service.description}
                {/* <span className="move-gradient px-3 rounded-xl text-nowrap">Next.js site.</span> */}
            </motion.h1>
            <motion.p className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut"}}
            >
                {service.description2}
            </motion.p>
            <motion.div className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut"}}
            >
                <button onClick={() => setOpen(true)} className={`${service.theme.bgButton} ${service.theme.hover} text-white rounded-full px-7 h-11`}>
                    {service.ctaPrimary}
                </button>
                <button className={`flex items-center gap-2 border ${service.theme.border} ${service.theme.hover} transition rounded-full px-6 h-11`}>
                    <VideoIcon strokeWidth={1} />
                    <span>{service.ctaSecondary}</span>
                </button>
            </motion.div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
                {specialFeatures.map((feature, index) => (
                    <motion.p className="flex items-center gap-2" key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.3, ease: "easeOut" }}

                    >
                        <CheckIcon className={`size-5 ${service.theme.text}`} />
                        <span className="text-slate-400">{feature}</span>
                    </motion.p>
                ))}
            </div>
            <TiltedImage />
        </div>
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1={service.servicesSection.title} text2={service.servicesSection.subtitle} text3={service.servicesSection.description} theme={service.theme} />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div key={index} className={`${index === 1 ? `p-px rounded-[13px] bg-linear-to-br ${service.theme.from} to-slate-800` : ''}`}
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}

                    >
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full">
                            {iconMap[feature.icon]}
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
                 <div className={`absolute top-70 -z-40 right-1/4 size-72 ${service.theme.bgD} blur-[150px]`}></div>

            </div>
            <div className="mt-40 relative mx-auto max-w-5xl">
                <div className={`absolute -z-50 size-100 -top-10 -left-20 aspect-square rounded-full ${service.theme.bg} blur-3xl`}></div>
                <motion.p className="text-slate-300 text-lg text-left max-w-3xl"
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                {service.valueProposition.description}
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    <motion.div className="md:col-span-2"
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                        <img className="h-full w-auto" src="../assets/features-showcase-1.png" alt="features showcase" width={1000} height={500} />
                    </motion.div>
                    <motion.div className="md:col-span-1"
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
                    >
                        <img src="../assets/features-showcase-2.png" alt="features showcase" width={1000} height={500} className="hover:-translate-y-0.5 transition duration-300" />
                        <h3 className="text-[24px]/7.5 text-slate-300 font-medium mt-6">{service.valueProposition.headline} </h3>
                        <p className="text-slate-300 mt-2">{service.valueProposition.subheadline}</p>
                        <a href="#!" className={`group flex items-center gap-2 mt-4 ${service.theme.text} ${service.theme.hover} transition`}>
                            Learn more about the product
                            <ArrowUpRight className="size-5 group-hover:translate-x-0.5 transition duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1={service.technologiesSection.title} text2={service.technologiesSection.subtitle} text3={service.technologiesSection.description} theme={service.theme}/>
            <Marquee className="max-w-5xl mx-auto mt-11" gradient={true} speed={25} gradientColor="#09090b">
            <div className="flex items-center py-5">
                {[...technologiesData, ...technologiesData].map(
                (tech, index) => (
                    <TechnologyCard key={index} technology={tech} theme={service.theme} />
                )
                )}
            </div>
            </Marquee>

            <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} gradientColor="#09090b" direction="right">
            <div className="flex items-center py-5">
                {[...technologiesData, ...technologiesData].map(
                (tech, index) => (
                    <TechnologyCard key={index} technology={tech} theme={service.theme}/>
                )
                )}
            </div>
            </Marquee>

        </div>
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            {/* <SectionTitle text1="Pricing" text2="Our Pricing Plans" text3="Flexible pricing options designed to meet your needs — whether you're just getting started or scaling up." /> */}

            {/* <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                {pricingData.map((plan: IPricing, index: number) => (
                    <motion.div key={index} className={`w-72 text-center border border-pink-950 p-6 pb-16 rounded-xl ${plan.mostPopular ? 'bg-pink-950 relative' : 'bg-pink-950/30'}`}
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                    >
                        {plan.mostPopular && (
                            <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-pink-400 rounded-full">Most Popular</p>
                        )}
                        <p className="font-semibold text-3xl">{plan.name}</p>
                        <ul className="list-none text-slate-300 mt-6 space-y-2">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckIcon className="size-4.5 text-pink-600" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className={`w-full py-2.5 rounded-md font-medium mt-7 transition-all ${plan.mostPopular ? 'bg-white text-pink-600 hover:bg-slate-200' : 'bg-pink-500 hover:bg-pink-600'}`}>
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div> */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                {techStacks.map((stack, index) => (
                    <motion.div
                    key={index}
                    className={`w-72 text-center border ${service.theme.border} p-6 pb-16 rounded-xl ${
                        stack.badge === "Most Popular"
                        ? `${service.theme.bgD} relative`
                        : `${service.theme.bg}`
                    }`}
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: index * 0.15,
                        duration: 0.8,
                        // ease: "easeOut",
                    }}
                    >
                    {/* ✅ BADGE */}
                    {stack.badge === "Most Popular" && (
                        <p className={`absolute px-3 text-sm -top-3.5 left-3.5 py-1 ${service.theme.bgButton} rounded-full`}>
                        {stack.badge}
                        </p>
                    )}
                    <div className={`absolute top-70 -z-40 right-1/4 size-72 ${service.theme.bgD} blur-[150px]`}></div>


                    {/* ✅ TITLE */}
                    <p className="font-semibold text-3xl">{stack.category}</p>

                    {/* ✅ FEATURES */}
                    <ul className="list-none text-slate-300 mt-6 space-y-2">
                        {stack.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <CheckIcon className={`size-4.5 ${service.theme.text}`} />
                            <p>{item}</p>
                        </li>
                        ))}
                    </ul>

                    {/* ✅ CTA */}
                    <button onClick={() => setOpen(true)}
                        type="button"
                        className={`w-full py-2.5 rounded-md font-medium mt-7 transition-all ${
                        stack.badge === "Most Popular"
                            ?`bg-white ${service.theme.text} hover:bg-slate-200`
                            : `${service.theme.bg} ${service.theme.hover}`
                        }`}
                    >
                        Get Started
                    </button>
                    </motion.div>
                ))}
            </div>
        </div>
        <div>
        {/* <motion.div 
            className="max-w-5xl py-16 mt-40 md:pl-20 md:w-full max-md:mx-4 md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left bg-linear-to-b from-pink-900 to-pink-950 rounded-2xl p-6 text-white"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div
            style={{
                maxWidth: "64rem",
                paddingTop: "4rem",
                paddingBottom: "4rem",
                marginTop: "10rem",
                width: "100%",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",

                textAlign: "left",
                color: "#ffffff",

                background: "linear-gradient(to bottom, #831843, #500724)",
                borderRadius: "1rem",
                padding: "1.5rem",
            }}
            >

                <motion.h1
                    className="text-4xl md:text-[46px] md:leading-15 font-semibold bg-linear-to-r from-white to-pink-400 text-transparent bg-clip-text"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Ready to Build Your Website?
                </motion.h1>

                <motion.p
                    className="bg-linear-to-r from-white to-pink-400 text-transparent bg-clip-text text-lg"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Turn your ideas into a high‑performance, scalable website built to grow your business.
                </motion.p>
            </div>

            <motion.button
                className="px-12 py-3 text-slate-800 bg-white hover:bg-slate-200 rounded-full text-sm mt-4"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Get Started
            </motion.button>
        </motion.div> */}
        </div>
        <div  style={{ marginBottom:"50px"}} className="px-4 md:px-16 lg:px-24 xl:px-32">
        <SectionTitle
            text1="Contact"
            text2="Reach out to us"
            text3="Ready to grow your brand with a powerful digital solution? Let’s connect."
            theme={service.theme}
        />

        <form
            onSubmit={(e) => e.preventDefault()}
            className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full"
        >
            {/* Name Field */}
            <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <p className="mb-2 font-medium">Your name</p>
            <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500">
                <UserIcon className="size-5" />
                <input
                style={{ backgroundColor: "hsl(var(--background))" }}
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 outline-none"
                />
            </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <p className="mb-2 font-medium">Email id</p>
            <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500">
                <MailIcon className="size-5" />
                <input
                style={{ backgroundColor: "hsl(var(--background))" }}
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
                />
            </div>
            </motion.div>
                 <div className={`absolute top-70 -z-40 right-1/2 size-72 ${service.theme.bgD} blur-[150px]`}></div>

            {/* Message Field */}
            <motion.div
            className="sm:col-span-2"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <p className="mb-2 font-medium">Message</p>
            <textarea
                style={{ backgroundColor: "hsl(var(--background))" }}
                name="message"
                rows={8}
                placeholder="Enter your message"
                className="focus:border-pink-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700"
            />
            </motion.div>

            {/* Submit Button */}
            <motion.button
            type="submit"
            className={`
                w-max flex items-center gap-2 cursor-pointer text-white
                px-10 py-3 rounded-full
                transition-colors duration-300 easeOut
                ${service.theme.bgD}
                ${service.theme.hover}
            `}
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            >
            Submit
            <ArrowRightIcon className="size-5" />
            </motion.button>
        </form>
        </div>
        <Footer></Footer>
        </>
    );
}