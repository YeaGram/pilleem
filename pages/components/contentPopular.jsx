import Partikel from "./particleBackground";
import PopularAnime from "./popularAnime";
import { useState } from "react";
import { BsGrid1X2Fill, BsGridFill } from "react-icons/bs";
const ContentPopular = () => {
   // const [topAnime, SetTopAnime] = useState([]);

   // const GetTopAnime = async () => {
   //    const temp = await fetch(
   //       `https://api.jikan.moe/v3/top/anime/1/bypopularity`
   //    ).then((res) => res.json());

   //    SetTopAnime(temp.top.slice(0, 5));
   // };

   // useEffect(() => {
   //    GetTopAnime();
   // }, []);

   ////
   const [grids, setGrids] = useState(true);
   const changeModes = () => {
      setGrids(!grids);
   };

   return (
      <div>
         <h3 className="font-extrabold mb-2 font-montserrat text-rose-200 text-4xl text-center">
            Top Anime
         </h3>
         <div className="w-full grid place-content-center">
            <div className="text-white py-1 drop-shadow-sm px-2 ml-2 rounded-md bg-gray-700 w-fit ">
               <button
                  type="button"
                  className="px-1 w-fit flex items-center"
                  onClick={changeModes}
               >
                  {grids && <BsGrid1X2Fill />}
                  {!grids && <BsGridFill />}
                  <p className="px-2">Change Mode!</p>
               </button>
            </div>
         </div>
         <PopularAnime viewMode={grids} />
         {/* <Newest /> */}

         <div className="w-full  border-t-2 border-rose-900 flex flex-col items-center ">
            <div className="fixed left-0 right-0 top-0 bottom-0 z-[-1]">
               <div className="bg-gradient-to-b from-rose-900  w-full h-full absolute z-10"></div>
               <Partikel />
            </div>
         </div>
      </div>
   );
};
export default ContentPopular;
