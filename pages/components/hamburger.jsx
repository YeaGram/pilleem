export default function Hamburger(props) {
   return (
      <div
         id="hamburgerButton"
         className={`${
            props.isActive ? "" : "hamburgerActive"
         } cursor-pointer transition-all hamburgerNormal `}
      >
         <span className="lineOne transition-all"></span>
         <span className="lineTwo transition-all"></span>
         <span className="lineThree transition-all"></span>
      </div>
   );
}
