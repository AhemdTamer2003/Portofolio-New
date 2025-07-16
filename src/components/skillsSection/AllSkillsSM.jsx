import { MdOutlineManageSearch } from "react-icons/md";
import { FaBullhorn, FaWordpress, FaShopify } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { SiSass } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "SEO", icon: MdOutlineManageSearch },
  { skill: "SEM", icon: FaBullhorn },
  { skill: "Digital Marketing", icon: RiAdvertisementLine },
  { skill: "Content Marketing", icon: BiPencil },
  { skill: "WordPress", icon: FaWordpress },
  { skill: "Salla", icon: SiSass },
  { skill: "Social Media", icon: AiOutlineLineChart },
  { skill: "ZID / Shopify", icon: FaShopify },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 max-w-[1200px] mx-auto px-4">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center gap-2 relative hover:scale-105 transition-all duration-300"
        >
          {/* دائرة الأيقونة */}
          <div className="bg-white text-pinkAccent h-[100px] w-[100px] flex items-center justify-center rounded-full text-6xl border-4 border-orange shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <item.icon size={48} />
          </div>

          {/* النص */}
          <p className="text-white/90 font-bold text-center mt-2">{item.skill}</p>

          {/* الجلو الخلفي الأسود */}
          <div className="w-[100px] h-[100px] rounded-full absolute top-[50px] -z-10 blur-xl bg-black/40"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
