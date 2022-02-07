import React from "react";
import "./Banner.css";
import imagebanner from "../assets/image/banner.png";

function Banner() {
   return (
      <div className="banner">
         <div className="leftbanner">
            <div className="bannerlogo">
               PROJECT
               <br />
               Lorem
               <br />
            </div>
         </div>
         <div className="container-image">
            <img src={imagebanner} alt="" />
         </div>
      </div>
   );
}

export default Banner;
