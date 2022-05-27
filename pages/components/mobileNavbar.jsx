import ExploreButton from "./exploreBtn";
export default function MobileNavbar(props) {
   return (
      <nav
         id="mobileNavbar"
         className={` ${
            props.isActive ? "translate-x-full" : "translate-x-0"
         } transition-all
         w-1/2 right-0 visible sm:hidden z-[-1] absolute top-full`}
      >
         <ul className="flex flex-col backdrop-blur-sm bg-rose-600 bg-opacity-50 w-full h-full justify-end items-center font-poppins font-normal ">
            <li className="hover:text-rose-400 py-5 hover:bg-gray-800 w-full text-center transition-all hover:underline decoration-rose-100">
               <a href="#">Home</a>
            </li>
            <li className="hover:text-rose-400  py-5 hover:bg-gray-800 w-full text-center transition-all hover:underline decoration-rose-100">
               <a href="#">About</a>
            </li>
            <li className="hover:text-rose-400  py-5 transition-all hover:bg-gray-800 w-full text-center hover:underline decoration-rose-100">
               <a href="#">Contact</a>
            </li>
            <li className="pb-5 ">
               <ExploreButton log="Explore" />
            </li>
         </ul>
      </nav>
   );
}
