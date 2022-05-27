export default function Navbar() {
   return (
      <nav className="flex-1 sm:block hidden">
         <ul className="flex  w-full justify-end font-poppins font-normal">
            <li className="hover:text-rose-400">
               <a href="#">MainMenu</a>
            </li>
            {/* <li className="hover:text-rose-400">
               <a href="#">About</a>
            </li>
            <li className="hover:text-rose-400">
               <a href="#">Contact</a>
            </li> */}
         </ul>
      </nav>
   );
}
