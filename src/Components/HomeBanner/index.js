import React from "react";
import Slider from "react-slick";


const HomeBanner =()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };    
    return (
        <>
            <div className="homeBannerSection">
            <Slider {...settings}>
            <div className="item">
            <img src="https://cmsimages.shoppersstop.com/Jack_and_Jones_Levis_and_more_web_f70b98bf6b/Jack_and_Jones_Levis_and_more_web_f70b98bf6b.png" alt="Mens"  className="w-100" />
            </div>

            <div className="item">
            <img src="https://cmsimages.shoppersstop.com/YSL_web_112b266e97/YSL_web_112b266e97.png" alt="perfume" className="w-100" />
            </div>

            <div className="item">
            <img src="https://cmsimages.shoppersstop.com/skechers_Reebok_web_fed1221d66/skechers_Reebok_web_fed1221d66.png" alt="shoe" className="w-100"/>
            </div>

            <div className="item">
            <img src="https://cmsimages.shoppersstop.com/Static_Web_ELLIZA_DONATEIN_453bfc22cd/Static_Web_ELLIZA_DONATEIN_453bfc22cd.png" alt="women" className="w-100" />
            </div>  

            </Slider>
            </div>
        </>
    )

}

export default HomeBanner;