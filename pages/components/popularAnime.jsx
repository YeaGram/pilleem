import { useState } from "react";
import CardTopPopular from "./cardPopular";

export default function PopularAnime(props) {
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
            {/* {console.log(topAnime)} */}
            <div
               className={`grid place-content-center place-items-center my-5 py-3 ${
                  props.viewMode ? "singleModes" : "doubleModes"
               }`}
            >
               <CardTopPopular loadMore={more} viewMode={props.viewMode} />
            </div>
            <div className="w-[100%] grid place-items-center">
               {max() && (
                  <button
                     onClick={loads}
                     type="button"
                     className="w-[90vw]  py-2 px-5 hover:text-white outline mb-5 bg-gray-700 text-rose-400 font-poppins font-bold rounded-lg"
                  >
                     Load More!
                  </button>
               )}
            </div>
         </div>
      </div>
   );
}
