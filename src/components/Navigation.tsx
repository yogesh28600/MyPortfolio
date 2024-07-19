import { Navigations } from "../constants";
import { IoMdMenu } from "react-icons/io";
const Navigation = () => {
  return (
    <div className="flex w-full justify-between bg-bg-1 px-5 py-3 lg:justify-between lg:px-56">
      <div className="font-playwrite flex items-center">Nandi Yogesh Kumar</div>
      <div className="flex cursor-pointer items-center hover:opacity-80 md:hidden">
        <IoMdMenu size={30} />
      </div>
      <ul className="hidden gap-20 md:flex">
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
