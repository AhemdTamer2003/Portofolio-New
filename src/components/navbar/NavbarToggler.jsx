import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      onClick={setToggleMenu}
      className="text-2xl p-3 border border-pinkAccent rounded-full text-pinkAccent"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
