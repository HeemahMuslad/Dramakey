import { ReactNode } from "react";

interface Props {
  logo: string;
  children: ReactNode;
  hamburger: ReactNode;
    isActive: boolean;
    toggleMenu:()=> void

}
const Header = ({ logo, children, hamburger,isActive,toggleMenu, }: Props) => {
  return (
    <>
      <div className="w-lg flex justify-between mx-auto my-10">
        <div className="flex font-bold italic">{logo}</div>
        <div className={`navLinks flex  ${isActive ? "active" : ""} `}>
          {children}
        </div>
        <div className={`hamburger cursor-pointer hidden ${isActive ? "active" : ""}`} onClick={toggleMenu}>
          {hamburger}
        </div>
      </div>
    </>
  );
};

export default Header;
