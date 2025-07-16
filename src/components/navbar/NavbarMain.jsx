import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-1/2 -translate-x-1/2 z-20 mt-2">
      <div className="flex justify-between items-center w-full bg-black p-6 rounded-full border-[0.5px] border-pinkAccent text-pinkAccent shadow-md">
        <NavbarLogo />

        {/* الروابط تظهر حسب حالة الـ Redux */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />

        {/* الزر الخاص بالتوغلر بيظهر فقط على الموبايل */}
        <div className="lg:hidden sm:block">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
