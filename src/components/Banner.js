import React from "react";
import "./Banner.css";
import imagebanner from "../assets/image/banner.png";

function Banner() {
   return (
      <div className="banner">
         <div className="leftbanner">
            <div className="bannerlogo">
               PROJECT
               <div className="bannerlorem">Lorem</div>
            </div>
         </div>
         <div className="container-image">
            <button className="btn">VEIW PROJECT</button>
            <img src={imagebanner} alt="" />
         </div>
      </div>
   );
}

export default Banner;
