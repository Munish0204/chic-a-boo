import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper,SwiperSlide} from 'swiper/react';
import banner1 from '../../assests/Images/banner1.jpg'
import banner2 from '../../assests/Images/banner2.jpg'
import banner3 from '../../assests/Images/banner3.jpg'
import banner4 from '../../assests/Images/banner4.jpg'
import newsLetterImg from '../../assests/Images/coupon.png'
import Button from "@mui/material/Button";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import ProductItem from '../../Components/ProductItem';
import { FiHeart } from "react-icons/fi";
import HomeCat from '../../Components/HomeCat';
import { IoMdMail } from "react-icons/io";
import Footer from '../../Components/Footer';



const Page = () => {

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,   
        arrows:true
      };

  return (
    <>
    
    <HomeCat /> 
      
      <section className='homeProducts'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                  <div className='sticky'>
                    <div className='banner'>
                        <img src={banner1} alt='side' className='cursor w-100'/>
                    </div>

                    <div className='banner mt-5'>
                        <img src={banner2} alt='side' className='cursor w-100'/>
                    </div>
                  </div>
                  </div>

                <div className='col-md-9 ProductsRow'>
                    <div className='d-flex align-items-center'>
                        <div className='info w-75'>
                            <h3 className='mb-0 hd'>Best Sellers</h3>
                            <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of December.</p>
                        </div>

                        <Button className='viewAllBtn ml-auto'>View All <HiOutlineArrowLongRight/> </Button>
                    </div>


                    <div className='product_row w-100 mt-4'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        >     
                        <SwiperSlide>
                      <ProductItem/>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className='item productItem'>
                            <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5-346x310.jpg' alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                                <div className='actions'>
                                    <Button> <AiOutlineFullscreen/> </Button>
                                    <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
                                </div>
                            
                            </div>

                        <div className='info'>
                        <h4>Vital Farms Pasture-Raised Egg Bites Bacon</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$29.00</span>
                                <span className='netPrice text-danger ml-2'>$25.00</span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg'  alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                            <div className='actions'>
                                <Button> <AiOutlineFullscreen/> </Button>
                                <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
                            </div>
                        </div>

                        <div className='info'>
                        <h4>Angie’s Boomchickapop Sweet & Salty</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$4.29</span>
                                <span className='netPrice text-danger ml-2'>$3.29</span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                         <SwiperSlide>
                        <div className='item productItem'>
                            <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg' alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                            <div className='actions'>
                                <Button> <AiOutlineFullscreen/> </Button>
                                <Button> <FiHeart  style={{fontSize:"20px"}}/> </Button>

                            </div>
                        </div>

                        <div className='info'>
                        <h4>Field Roast Chao Cheese Creamy Original</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$24.00</span>
                                <span className='netPrice text-danger ml-2'>$19.50</span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className='item productItem'>
                            <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg'  alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                            <div className='actions'>
                                <Button> <AiOutlineFullscreen/> </Button>
                                <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
                            </div>
                        </div>

                        <div className='info'>
                        <h4>Blue Diamond Almonds Lightly Salted</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$11.68</span>
                                <span className='netPrice text-danger ml-2'>$10.58</span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                         <SwiperSlide>
                        <div className='item productItem'>
                            <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg'  alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                            <div className='actions'>
                                <Button> <AiOutlineFullscreen/> </Button>
                                <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
                            </div>
                        </div>

                        <div className='info'>
                        <h4>Nestle Original Coffee-Mate Coffee Creamer
                        </h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$13.99</span>
                                <span className='netPrice text-danger ml-2'>$11.99  </span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                    </Swiper>
                    </div>


                    <div className='d-flex align-items-center mt-5'>
                        <div className='info w-75'>
                            <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                            <p className='text-light text-sml mb-0'>New products with updated stocks.</p>
                        </div>

                        <Button className='viewAllBtn ml-auto'>View All <HiOutlineArrowLongRight/> </Button>
                    </div>


                    <div className='product_row w-100 mt-5'>
                    <Swiper 
                        slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        >  
                        <SwiperSlide>
                      <ProductItem/>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className='item productItem'>
                            <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                                <div className='actions'>
                                    <Button> <AiOutlineFullscreen/> </Button>
                                    <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
                                </div>
                            
                            </div>

                        <div className='info'>
                        <h4>Foster Farms Crispy Classic Buffalo Wings</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$39.00</span>
                                <span className='netPrice text-danger ml-2'>$45.00</span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg'  alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                            <div className='actions'>
                                <Button> <AiOutlineFullscreen/> </Button>
                                <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
                            </div>
                        </div>

                        <div className='info'>
                        <h4>Angie’s Boomchickapop Sweet & Salty</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$4.29</span>
                                <span className='netPrice text-danger ml-2'>$3.29</span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                         <SwiperSlide>
                        <div className='item productItem'>
                            <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg' alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                            <div className='actions'>
                                <Button> <AiOutlineFullscreen/> </Button>
                                <Button> <FiHeart  style={{fontSize:"20px"}}/> </Button>

                            </div>
                        </div>

                        <div className='info'>
                        <h4>Field Roast Chao Cheese Creamy Original</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$24.00</span>
                                <span className='netPrice text-danger ml-2'>$19.50</span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className='item productItem'>
                            <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg'  alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                            <div className='actions'>
                                <Button> <AiOutlineFullscreen/> </Button>
                                <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
                            </div>
                        </div>

                        <div className='info'>
                        <h4>Blue Diamond Almonds Lightly Salted</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$11.68</span>
                                <span className='netPrice text-danger ml-2'>$10.58</span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                         <SwiperSlide>
                        <div className='item productItem'>
                            <div className='imgWrapper'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg'  alt='product' className='w-100'/>
                                <span className='badge badge-primary'>25%</span>
                            <div className='actions'>
                                <Button> <AiOutlineFullscreen/> </Button>
                                <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
                            </div>
                        </div>

                        <div className='info'>
                        <h4>Nestle Original Coffee-Mate Coffee Creamer
                        </h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>

                            <div className='d-flex'>
                                <span className='oldPrice'>$13.99</span>
                                <span className='netPrice text-danger ml-2'>$11.99  </span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>

                    </Swiper>
                    </div>
                        <div className='d-flex mt-4 mb-5 bannerSec'>
                            <div className='banner mt-5'>
                                <img src={banner3} alt='side' className='cursor w-100'/>
                            </div>

                            <div className='banner mt-5'>
                                <img src={banner4} alt='side' className='cursor w-100'/>
                            </div>
                        </div>

                </div>
            </div>
        </div>
      </section>


      <section className='newsLetterSection mt-3 mb-3 d-flex align-items-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='text-white mb-1'>$20 Discount for your first order</p>
                    <h3 className='text-white'>Join our newsletter and get...</h3>
                    <p className='text-light '>Join our email subscription now to get updates on promotions and coupons.</p>




                    <form>
                    < IoMdMail />
                        <input type='text' placeholder='Your Email Address'/>
                        <Button>Subscribe</Button>
                    </form>

                </div>

                <div className='col-md-6'>
                    <img src={newsLetterImg} alt='Coupon'/>
                </div>
            </div>
        </div>
      </section>


       <Footer />

    </>
  );
};

export default Page;
