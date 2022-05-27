import { useState } from "react";
import Brand from "./brand";
import Hamburger from "./hamburger";
import MobileNavbar from "./mobileNavbar";
import Navbar from "./navbar";

const Header = () => {
   const [navActive, setNavActive] = useState(true);
   const navTogler = () => {
      setNavActive(!navActive);
   };
   return (
      <>
         <header className="relative">
            <div className="flex top-0 justify-between w-full outline px-4 py-3 bg-gray-800 text-gray-300 items-center shadow-lg fixed z-40">
               <Brand />
               <Navbar />
               <MobileNavbar isActive={navActive} />
               <div onClick={navTogler} className="sm:hidden">
                  <Hamburger isActive={navActive} />
               </div>
            </div>
         </header>
      </>
   );
};
export default Header;
