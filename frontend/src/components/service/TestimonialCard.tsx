// import { motion } from "@motionone/react";
// import type { TestimonialCardProps } from "@/data/types/service";

// export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
//     return (
//         <motion.div className="p-4 rounded-lg mx-4 w-72 shrink-0 bg-pink-950/30 border border-pink-950"
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, easing: "ease-out" }}
//         >
//             <div className="flex gap-10">
//                 <img className="size-15 rounded-full" src={testimonial.image} alt={testimonial.name} height={100} width={100} />
//                 <div className="flex flex-col">
//                     <div style={{ marginTop: "30%", fontSize:"20px" }} className="flex items-center gap-1">
//                         <p>{testimonial.name}</p>
//                         {/* <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
//                         </svg> */}
//                     </div>
//                     <span className="text-xs text-slate-500">{testimonial.stack.join(" / ")}</span>
//                 </div>
//             </div>
//             {/* <p className="text-sm pt-4 text-slate-500 line-clamp-2">
//                 {testimonial.quote}
//             </p> */}
//         </motion.div>
//     );
// }

import { motion } from "framer-motion";

interface ITheme {
  bg: string;
  border: string;
}

interface ITechnology {
  image: string;
  name: string;
  stack: string[];
}

interface TechnologyCardProps {
  technology: ITechnology;
  theme: ITheme;
}

const TechnologyCard = ({
  technology, theme 
}:  TechnologyCardProps) => {
  return (
    <motion.div
      className={`p-4 rounded-lg mx-4 w-72 shrink-0 ${theme.bg} border ${theme.border}`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex gap-6 items-center">
        <img
          className="size-14 rounded-full"
          src={technology.image}
          alt={technology.name}
        />

        <div className="flex flex-col">
          <p className="text-lg text-white">{technology.name}</p>
          <span className="text-xs text-slate-400">
            {technology.stack.join(" / ")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;