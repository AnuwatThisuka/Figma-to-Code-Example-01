import React, { useState } from "react";
import logohome from "../assets/image/logo_1.svg";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
function Header() {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
   console.log(click);
   const closeMobileMenu = () => setClick(false);

   return (
      <div className="header">
         <div className="container">
            <div className="header-con">
               <div className="logo-container">
                  <a href="#somthing">
                     <img src={logohome} alt="#" />
                  </a>
               </div>
               <ul className={click ? "menu active" : "menu"}>
                  <li className="menu-link" onclick={closeMobileMenu}>
                     <a href="#somthing">MAIN</a>
                  </li>
                  <li className="menu-link" onclick={closeMobileMenu}>
                     <a href="#somthing">GALLERY</a>
                  </li>
                  <li className="menu-link" onclick={closeMobileMenu}>
                     <a href="#something">PROJECTS</a>
                  </li>
                  <li className="menu-link" onclick={closeMobileMenu}>
                     <a href="#something">CERTIFICATIONS</a>
                  </li>
                  <li className="menu-link" onclick={closeMobileMenu}>
                     <a href="#something">CONTRACS</a>
                  </li>
               </ul>
               <div className="mobile-menu" onClick={handleClick}>
                  {click ? <FiX /> : <FiMenu />}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
