import SingleSkill from "./SingleSkill";
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

const AllSkills = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 overflow-x-auto">
      <div className="flex gap-10 min-w-max">
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            key={index}
          >
            <SingleSkill
              text={item.skill}
              imgSvg={
                <div className="drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
                  <item.icon size={48} />
                </div>
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
