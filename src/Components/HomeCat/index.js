import React, { useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Slider from "react-slick";
import { BackHand } from '@mui/icons-material';

const HomeCat =()=>{
    
    const[itemBg,setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#ecffeb',
        '#feefea',
        '#ffffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefae',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);
    

    return (
        <section className='homeCat'>
        <div className="container">
            <h3 className='mb-3 hd'>Featured Categories</h3>
        <Swiper
           slidesPerView={10}
           spaceBetween={3}
           pagination={{
           clickable: true,
           dot:true,
           }}
           modules={[Navigation]}
           className="mySwiper"
           >  

           {
            itemBg?.map((item,index)=>{
                return(
                    <SwiperSlide>
                    <div className='item text-center cursor ' style={{background:item}}>
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt='slide' />
    
                        <h4>Cake</h4>
                    </div>
                </SwiperSlide>
                )
                
            })
           }  
            <SwiperSlide>
                <div className='item text-center'>
                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt='slide' />

                    <h4>Cake</h4>
                </div>
            </SwiperSlide>

            </Swiper>

        </div>
    </section>
    )
}
export default HomeCat;