export default function ExploreButton(props) {
   return (
      <div className="mt-2 transition-all drop-shadow-myDrop1 hover:bg-rose-500 hover:text-gray-800 text-xl px-10 py-1 text-rose-500 font-poppins font-extrabold rounded-full bg-gray-800 ">
         <a href="#" rel="noreferrer">
            {props.log}
         </a>
      </div>
   );
}
