import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai"
import Button from "@mui/material/Button";
import { SwiperSlide } from 'swiper/react';
import { FiHeart } from "react-icons/fi";

const ProductItem = () => {
    return (
      <SwiperSlide>
          <div className='item productItem'>
            <div className='imgWrapper'>
              <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'  alt='product' className='w-100'/>
              <span className='badge badge-primary'>25%</span>
              <div className='actions'>
                <Button> <AiOutlineFullscreen/> </Button>
                <Button> <FiHeart style={{fontSize:"20px"}}/> </Button>
              </div>
            </div>
            <div className='info'>
              <h4>All Natural Italian-Style Chicken Meatballs</h4>
              <span className='text-success d-block'>In Stock</span>
              <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>
              <div className='d-flex'>
                <span className='oldPrice'>$7.25</span>
                <span className='netPrice text-danger ml-2'>$4.25</span>
              </div>
            </div>
          </div>
    </SwiperSlide>  
    )
  }

  export default ProductItem;