import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Content Creator",
    company: "Youtube",
    date: "2022 - Present",
    responsibilities: [
      "Reached 5M+ views via keyword clustering.",
      " AI-based content strategy.",
      " Created scripts That Ranks on #1 ",
      "Generating new ideas for better video impressions.",
    ],
  },
  {
    job: "FreeLancer",
    company: "KHAMSAT / MOSTAQL",
    date: "2023 - Present",
    responsibilities: [
      " Launched SEO strategies for Saudi-based beauty & Salla stores.",
      "Boosted organic traffic with organic SEO .",
      "using mobile-first SEO and internal linking.",
      "Optimized Salla/Zid product pages using AI-driven keyword.",
    ],
  },
  {
    job: "SEO EXPERT",
    company: "GOLDENSECTION UAE",
    date: "2024 - Present",
    responsibilities: [
      "SEO LEADER FOR SALLA STORES .",
      "AEO tactics to rank in Google AI Overviews.",
      "Managed organic content systems for 10+ websites, with 25–50% traffic increase..",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
