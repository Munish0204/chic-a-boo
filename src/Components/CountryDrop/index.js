import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function transition(props,ref){
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown =()=>{

    const [isOpenModal, setisOpenModal] =useState(false);

    return (
        <>
         <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
            <div className="info d-flex flex-column">
                <span className="lable">Your Location</span>
                <span className="name">Tamil Nadu</span>
            </div>
            <span className="ml-auto"><FaAngleDown /></span>

        </Button>

        <Dialog open={isOpenModal} onClose= {()=>setisOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
            <h4 className="mb-0">Choose your Delivery Location</h4>
            <p>Enter your address and we will specify the offer for your area.</p>
            <Button className="close_" onClick={()=>setisOpenModal(false)}><IoMdClose/></Button>
            <div className="headerSearch w-100">
                <input type="text" placeholder="Search your area..." />
                <Button> <IoSearch /> </Button> 
            </div> 
            
            <ul className="countryList mt-3">
            <li><Button onClick={()=>setisOpenModal(false)}>Andhra Pradesh</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Arunachal Pradesh</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Assam</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Bihar</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Chhattisgarh</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Goa</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Gujarat</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Haryana</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Himachal Pradesh</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Jharkhand</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Karnataka</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Kerala</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Madhya Pradesh</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Maharashtra</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Manipur</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Meghalaya</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Mizoram</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Nagaland</Button></li>    
            <li><Button onClick={()=>setisOpenModal(false)}>Odisha</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Punjab</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Rajasthan</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Sikkim</Button></li>  
            <li><Button onClick={()=>setisOpenModal(false)}>Tamil Nadu</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Telangana</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Tripura</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Uttar Pradesh</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>Uttarakhand</Button></li>
            <li><Button onClick={()=>setisOpenModal(false)}>West Bengal</Button></li>    
            </ul>
        </Dialog>
    </>
  );
}
export default CountryDropdown;