import React from "react";
import "./homeCaption.scss";
function HomeCaption() {
  return (
    // <div className="fullScreen captionCon">
    //   <div className="d-flex flex-column h-100 ">
    //     <section className="h-50 about">
    //     <h4 className="p-4">About Us</h4>

    //     </section>
    //     <section className="h-50 about-2">s2</section>
    //   </div>
    //   <div className="strengths">
    //   <h4 className="p-4">Our Strength</h4>

    //   </div>
    //   <div className="advantages">
    //       <h4 className="p-4">
    //       Forging Advantage
    //       </h4>
    //   </div>
    // </div>
    <div className="fullScreen captionCon" style={{height:'90vh',maxHeight:'90vh',overflow:'scroll'}}>
 <div class="page fs"><a target="_blank" href="https://www.pexels.com/photo/landscape-photo-of-green-trees-and-mountains-2088167/">Img A</a></div>
<div class="page sc"><a target="_blank" href="https://www.pexels.com/photo/body-of-water-near-green-mountain-931018/">Img B</a></div>
<div class="page th"><a target="_blank" href="https://www.pexels.com/photo/trees-on-mountain-3551227/">Img C</a></div>
<div class="page fr"><a target="_blank" href="https://www.pexels.com/photo/dramatic-red-sunset-over-waving-ocean-6775273/">Img D</a></div>
    </div>
  );
}

export default HomeCaption;
