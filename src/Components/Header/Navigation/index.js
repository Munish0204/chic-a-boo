import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeBanner from '../../../Components/HomeBanner'; 
import "../../../App.css";
import Page from '../../../Pages/Home/Page'; 

const Navigation = () => {
  const [isopenSideVal, setisopenSideVal] = useState(false);

  return (
    <div>
      <div> 
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 navPart1">
              <div className="catWrapper">
                <Button
                  className="allcartTab align-item-center"
                  onClick={() => setisopenSideVal(!isopenSideVal)}
                >
                  <span className="icon1 mr-2">
                    <IoIosMenu />
                  </span>
                  <span className="text">ALL CATEGORIES</span>
                  <span className="icon2 ml-2">
                    <FaAngleDown />
                  </span>
                </Button>

                {/* Sidebar Nav */}
                <div className={`sidebarNav ${isopenSideVal ? 'open' : ''}`}>
                  <ul>
                    <li>
                      <Link to="/" ><Button>Men <FaAngleRight className="ml-auto"/> </Button></Link>
                      <div className="submenu">
                        <Link to="/"><Button>Clothing</Button></Link>
                        <Link to="/"><Button>Footwear</Button></Link>
                        <Link to="/"><Button>Watches</Button></Link>
                        <Link to="/"><Button>Clothing</Button></Link>
                        <Link to="/"><Button>Footwear</Button></Link>
                        <Link to="/"><Button>Watches</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/"><Button>Women <FaAngleRight className="ml-auto"/> </Button></Link>
                      <div className="submenu">
                        <Link to="/"><Button>Clothing</Button></Link>
                        <Link to="/"><Button>Footwear</Button></Link>
                        <Link to="/"><Button>Watches</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/"><Button>Beauty</Button></Link>
                    </li>
                    <li>
                      <Link to="/"><Button>Kids</Button></Link>
                    </li>
                    <li>
                      <Link to="/"><Button>Gift</Button></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-10 navPart2 d-flex align-items-center">
              <ul className="list list-inline ml-auto">
                <li className="list-inline-item">
                  <Link to="/"><Button>Home</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Men</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>Clothing</Button></Link>
                    <Link to="/"><Button>Footwear</Button></Link>
                    <Link to="/"><Button>Watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Women</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>Clothing</Button></Link>
                    <Link to="/"><Button>Footwear</Button></Link>
                    <Link to="/"><Button>Watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Beauty</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>Clothing</Button></Link>
                    <Link to="/"><Button>Footwear</Button></Link>
                    <Link to="/"><Button>Watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Kids</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Gift</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Blog</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Contact</Button></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <HomeBanner />
      </div>
      <Page />
    </div>
  );
};

export default Navigation;
