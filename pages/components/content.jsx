import Partikel from "./particleBackground";
import TopAnime from "./topAnime";
import { useState, useEffect } from "react";

const Content = () => {
   const [topAnime, SetTopAnime] = useState([]);

   const GetTopAnime = async () => {
      const temp = await fetch(
         `https://api.jikan.moe/v3/top/anime/1/bypopularity`
      ).then((res) => res.json());

      SetTopAnime(temp.top.slice(0, 50));
   };

   useEffect(() => {
      GetTopAnime();
   }, []);

   ////
   return (
      <div>
         <TopAnime animeList={topAnime} />
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
export default Content;
