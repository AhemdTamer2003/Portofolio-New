import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-black border-pinkAccent border bg-pinkAccent flex items-center gap-1 transition-all duration-300 hover:bg-white hover:text-pinkAccent hover:shadow-md hover:scale-105 cursor-pointer">
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="contact"
      >
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
