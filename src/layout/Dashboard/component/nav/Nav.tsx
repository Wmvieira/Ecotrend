import { PiHouse } from "react-icons/pi";
import NavWrapper from "./NavWrapper";
import NavItem from "./items/NavItem";

export default function Nav() {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-2">
      <NavWrapper>
        <NavItem icon={<PiHouse />} link="/home" title="Home" />
      </NavWrapper>
    </footer>
  );
}
