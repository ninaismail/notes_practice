import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const navLinks = [
  { name: 'Home', link:"/" },
  { name: 'About', link:"/about" },
];

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
<header className="fixed left-1/2 transform -translate-x-1/2 top-4 h-[67px] flex items-center justify-between z-[9] 2xl:w-8/12 rounded-full w-10/12 mx-auto px-6 bg-purple-100/30 border-white">
  <ul className="items-center w-8/12 h-full gap-6 flex">
    {Array.isArray(navLinks) &&
      navLinks.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.link}
            className={({ isActive, isPending }) =>
              `py-3 px-5 text-nowrap cursor-pointer text-lg ${isPending || isActive ? "bg-gradient-to-r from-purple-200/10 to-purple-200/30 backdrop-blur-[16px] rounded-full" : ""}`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
  </ul>
  <button aria-label="send your content"
    onClick={toggleLogin}
    class="cursor-pointer w-fit text-nowrap relative z-[2] col-span-2 px-4 py-3 text-gray-800 font-[400] text-center rounded-[8px] shadow-sm bg-blue-200 hover:brightness-125 transition-all duration-400">
    {isLoggedIn === true ?  'Log out' : 'Log in'}
    </button>     
</header>
  );
}