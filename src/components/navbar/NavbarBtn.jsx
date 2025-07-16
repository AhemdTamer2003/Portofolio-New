import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-6 py-3 rounded-full text-base sm:text-lg md:text-xl font-bold font-body text-black border-pinkAccent border bg-pinkAccent flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-pinkAccent hover:shadow-md hover:scale-105 cursor-pointer">
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="contact"
        className="cursor-pointer"
      >
        Hire Me
      </Link>
      {/* السهم يظهر على الشاشات المتوسطة وأعلى */}
      <div className="hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
