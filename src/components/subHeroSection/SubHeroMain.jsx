import { motion } from "framer-motion";

const SubHeroMain = () => {
  return (
    <motion.div
      className="w-full border-y bg-pinkAccent border-black text-black font-special font-extrabold flex flex-col md:flex-row justify-around items-center gap-4 uppercase text-center py-6 text-xl sm:text-2xl md:text-3xl xl:text-4xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        SEO EXPERT / SEM
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        FREELANCER
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        WORDPRESS DEVELOPER
      </motion.p>
    </motion.div>
  );
};

export default SubHeroMain;
