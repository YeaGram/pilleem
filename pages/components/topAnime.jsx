import Card from "./card";
export default function TopAnime(props) {
   return (
      <div className="w-full  border-t-2 border-rose-900 flex flex-col items-center">
         <div className="">
            <h3 className="font-extrabold font-montserrat text-rose-200 text-4xl text-left">
               Top Anime
            </h3>
            {props.animeList.map((anime) => (
               <Card anime={anime} key={anime.mal_id} />
            ))}

            <button
               type="button"
               className="w-full py-2 px-5 hover:text-white outline mb-5 bg-gray-700 text-rose-400 font-poppins font-bold rounded-lg"
            >
               Load More!
            </button>
         </div>
      </div>
   );
}
