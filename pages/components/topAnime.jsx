import { useState } from "react";
import Card from "./card";

export default function TopAnime() {
   const [more, setMore] = useState(10);
   const loads = () => {
      return setMore(more + 10);
   };
   const max = () => {
      return more < 49 ? true : false;
   };
   console.log(more);
   return (
      <div className="w-full  border-t-2 border-rose-900 flex flex-col items-center">
         <div className="">
            <h3 className="font-extrabold font-montserrat text-rose-200 text-4xl text-left">
               Top Anime
            </h3>
            {/* {console.log(topAnime)} */}
            <Card loadMore={more} />
            {max() && (
               <button
                  onClick={loads}
                  type="button"
                  className="w-full py-2 px-5 hover:text-white outline mb-5 bg-gray-700 text-rose-400 font-poppins font-bold rounded-lg"
               >
                  Load More!
               </button>
            )}
         </div>
      </div>
   );
}
