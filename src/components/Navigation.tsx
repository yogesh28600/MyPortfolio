import { useState } from "react";
import { Navigations } from "../constants";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Navigation = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="z-20 flex w-full justify-between bg-bg-1 px-5 py-3 lg:justify-between lg:px-56">
      <div className="font-playwrite flex items-center">Nandi Yogesh Kumar</div>
      <div
        onClick={() => {
          setOpen(!Open);
        }}
        className="flex cursor-pointer items-center hover:opacity-80 md:hidden"
      >
        {!Open ? <IoMdMenu size={30} /> : <IoCloseSharp size={30} />}
      </div>
      <ul
        id="navItems"
        className={`md:py-0" + absolute z-10 duration-1000 ${!Open ? "top-[-100%]" : "top-[8%]"} left-[0] flex w-full flex-col gap-y-5 bg-bg-1 px-5 py-5 md:static md:w-auto md:flex-row md:gap-20 md:px-0`}
      >
        {Navigations.map((navItem, index) => (
          <li key={index}>
            <a href={navItem.url} className="cursor-pointer hover:opacity-80">
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
