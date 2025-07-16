import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-pinkAccent mb-10">About Me</h2>
      <p>
      Versatile and AI-first SEO & Digital Marketing Strategist with 3+ years of hands-on experience. 
Specialized in optimizing websites, YouTube channels, and e-commerce stores using advanced 
techniques like AEO (Answer Engine Optimization), schema, and content structuring for AI 
Overviews. Proven track record of boosting traffic, visibility, and conversions across platforms 
like Google, ChatGPT, Shopify, Salla, and WordPress. Strong background in technical SEO audits, 
video SEO, programmatic content, and client management.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-black transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-pinkAccent transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
