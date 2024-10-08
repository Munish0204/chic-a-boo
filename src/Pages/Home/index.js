import React from 'react';
import Logo from "../../assests/Images/Discover_the_Chic_in_Everything- (1).png";
import { Link } from "react-router-dom";
import CountryDropdown from "../../Components/CountryDrop";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "../../Components/Header/SearchBox";
import Navigation from '../../Components/Header/Navigation/index'
import { MyContext } from "../../App";
import { useContext } from "react";

const Home = () => {
    const context = useContext(MyContext);

    return ( 
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                </div> 
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={"/"}><img src={Logo} alt="Logo" /></Link> 
                            </div> 
                            <div className="col-sm-10 d-flex align-items-center part2">


                                {
                                    context.countryList.length!==0 &&   <CountryDropdown />
                                }

                                {/* Header Search start Here */} 
                                <SearchBox />
                                {/* Header Search ends Here */}

                                <div className=" part3 d-flex align-items-center ml-auto">
                                    <Button className="circle mr-3"> < FiUser/> </Button> 
                                    <div className="ml-auto cartTab d-flex align-item-center">
                                        <span className="price">$3.0</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle">< IoBagOutline/></Button>
                                            <span className="count d-flex align-item-center justify-content-center">1
                                            </span>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </header> 
                <Navigation/>

            </div>

        </>
    );
};

export default Home;