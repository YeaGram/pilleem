import ExploreButton from "./exploreBtn";
const Landing = () => {
   return (
      <div className="h-screen mt-14">
         <div className="bg-Main bg-fixed mt-6 w-full h-full bg-cover bg-center grid place-items-center relative after:absolute after:block after:inset-0 after:bg-gradient-to-t after:from-rose-900 after:to-transparent">
            <div className="w-[80%] h-full grid place-items-center z-10 place-content-center sm:w-auto">
               <h3 className="font-montserrat font-extrabold text-4xl text-transparent drop-shadow-myDrop1 bg-gradient-to-b to-red-800 via-rose-500 from-rose-200 bg-clip-text">
                  Hello There!
               </h3>
               <p className="font-openSans text-orange-100 leading-4 text-center font-medium text-sm italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat nostrum aliquam odit ipsa quos voluptate sint optio
                  dicta cupiditate modi?
               </p>
               <ExploreButton log="Explore Bang!" />
            </div>
         </div>
      </div>
   );
};
export default Landing;
