import { PiHouse } from "react-icons/pi";
import NavItem from "./items/navItem";

export default function Nav() {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-2">
      <nav className="rounded-md bg-primary-700 p-2">
        <ul className=" flex flex-row justify-center gap-8 p-1">
          {<NavItem icon={<PiHouse />} link="/home" title="Home" />}
        </ul>
      </nav>
    </footer>
  );
}
