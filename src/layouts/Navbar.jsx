import { NavLink } from "react-router-dom";

const navLinks = [
  { name: 'Home', link:"/" },
  { name: 'About', link:"/about" },
];

export default function Navbar() {
  
  return (
<header className="fixed left-1/2 transform -translate-x-1/2 top-4 h-[67px] z-[9] 2xl:w-8/12 rounded-full w-10/12 mx-auto px-6 bg-purple-100/30 border-white">
  <ul className="items-center justify-end w-8/12 h-full gap-6 flex">
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
</header>
  );
}