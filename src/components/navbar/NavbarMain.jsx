import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 shadow-md border-b border-pinkAccent">
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex justify-between items-center">
        <NavbarLogo />

        {/* زر التوغلر يظهر فقط في الشاشات الصغيرة */}
        <div className="lg:hidden">
          <NavbarToggler />
        </div>

        {/* الروابط تظهر حسب حالة Redux */}
        <div className={`absolute sm:top-[100%] left-1/2 sm:-translate-x-1/2 w-full sm:w-[90%] lg:static lg:translate-x-0 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        {/* زر Call to Action */}
        <div className="hidden lg:block">
          <NavbarBtn />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
