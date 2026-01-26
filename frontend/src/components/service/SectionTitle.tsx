import type { SectionTitleProps } from "@/data/types/service";
// import Service from "@/pages/services/service";
import { motion } from "@motionone/react";
// const defaultTheme = {
//   bg: "bg-pink-600",
//   text: "text-pink-500",
//   border: "border-pink-900",
// };
export default function SectionTitle({ text1, text2, text3,theme }: SectionTitleProps) {
      if (!theme) {
            console.error("SectionTitle: theme is undefined");
            return null; // or fallback UI
        }
    return (
        <>
            <motion.p className={`text-center font-medium ${theme.text} mt-28 px-10 py-2 rounded-full ${theme.bg} border ${theme.border} w-max mx-auto`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, easing: "ease-out" }}
            >
                {text1}
            </motion.p>
            <motion.h3 className="text-3xl font-semibold text-center mx-auto mt-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, easing: "ease-out" }}
            >
                {text2}
            </motion.h3>
            <motion.p className="text-slate-300 text-center mt-2 max-w-xl mx-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, easing: "ease-out" }}
            >
                {text3}
            </motion.p>
        </>
    );
}