import {
   BsGithub,
   BsTwitter,
   BsReddit,
   BsFacebook,
   BsInstagram,
   BsLinkedin,
} from "react-icons/bs";
const Footer = () => {
   return (
      <div className="w-full h-40 flex flex-col justify-center items-center bg-gray-800 outline text-white">
         <div className="flex flex-col justify-center items-center">
            <h4>
               Made With ❤ Using{" "}
               <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://nextjs.org/"
                  className="hover:text-rose-500 hover:underline"
               >
                  {" "}
                  NextJS
               </a>{" "}
               and{" "}
               <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://tailwindcss.com/"
                  className="hover:text-rose-500 hover:underline"
               >
                  TailwindCSS
               </a>
            </h4>
            <div>
               <h5 className="font-medium font-poppins text-center mt-2">
                  Follow Us!
               </h5>
               <div className="flex justify-evenly w-60 text-center ">
                  <ul className="flex flex-col">
                     <li>
                        <a
                           href="https://github.com/"
                           rel="noreferrer"
                           target="_blank"
                           className="flex items-center hover:text-rose-500"
                        >
                           <BsGithub className="mr-1" />
                           Github
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://twitter.com/"
                           rel="noreferrer"
                           target="_blank"
                           className="flex items-center hover:text-rose-500"
                        >
                           <BsTwitter className="mr-1" />
                           Twitter
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://reddit.com/"
                           rel="noreferrer"
                           target="_blank"
                           className="flex items-center hover:text-rose-500"
                        >
                           <BsReddit className="mr-1" />
                           Reddit
                        </a>
                     </li>
                  </ul>
                  <ul className="flex flex-col">
                     <li>
                        <a
                           href="https://facebook.com/"
                           rel="noreferrer"
                           target="_blank"
                           className="flex items-center hover:text-rose-500"
                        >
                           <BsFacebook className="mr-1" />
                           Facebook
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://instagram.com/"
                           rel="noreferrer"
                           target="_blank"
                           className="flex items-center hover:text-rose-500"
                        >
                           <BsInstagram className="mr-1" />
                           Instagram
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://linkedin.com/"
                           rel="noreferrer"
                           target="_blank"
                           className="flex items-center hover:text-rose-500"
                        >
                           <BsLinkedin className="mr-1" />
                           Linkedln
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Footer;
