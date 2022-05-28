import Image from "next/image";
import { useState, useEffect } from "react";

export default function Card(props) {
   const [topAnime, SetTopAnime] = useState([]);

   const GetTopAnime = async () => {
      const temp = await fetch(
         `https://api.jikan.moe/v3/top/anime/1/bypopularity`
      ).then((res) => res.json());

      SetTopAnime(temp.top.slice(0, props.loadMore));
   };

   useEffect(() => {
      GetTopAnime();
   }, [props.loadMore]);
   return (
      <>
         {topAnime.map((anime) => (
            <div
               id="cardWrapper"
               key={anime.mal_id}
               className=" flex justify-center p-4 shadow-md bg-transparent bg-rose-800 border-2 border-rose-500"
            >
               <div className="grid place-items-center w-[90%]">
                  <a
                     id="cardPoster"
                     href={anime.url}
                     rel="noreferrer"
                     target="_blank"
                     className={` Image border-2 border-rose-600 w-[100%] h-72  hover:scale-125 hover:-translate-y-9 hover:drop-shadow-myDrop1 transition-all relative`}
                  >
                     <Image
                        layout="fill"
                        objectFit="cover"
                        src={anime.image_url}
                        alt="anime Images"
                        className="w-full h-full"
                     />

                     {/* disini poster */}
                  </a>

                  <div className="Description font-poppins mt-2 w-full text-left">
                     <h4 className="font-medium text-lg text-rose-100 hover:text-xl transition-all">
                        {anime.title}
                     </h4>
                     <p className="text-md leading-5 text-rose-300">
                        Ranking :{" "}
                        <span className="font-bold">{anime.rank}</span>
                     </p>
                     <p className="text-md leading-5 text-rose-300">
                        Score : <span className="font-bold">{anime.score}</span>
                     </p>
                     <p className="text-md leading-5 text-rose-300">
                        Episode : {anime.episodes}
                     </p>
                     <p className="text-md leading-5 text-rose-300">
                        Member : {anime.members}
                     </p>
                     <p className="text-md leading-5 text-rose-300">
                        Type : {anime.type}
                     </p>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
}
