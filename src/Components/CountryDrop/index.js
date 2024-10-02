import React, { useContext, useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App'; // Import MyContext

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const { selectedCountry, setSelectedCountry, countryList } = useContext(MyContext);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [filteredCountryList, setFilteredCountryList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const selectCountry = (index, country) => {
        setSelectedTab(index);
        setIsOpenModal(false);
        setSelectedCountry(country);  // Correctly calling setSelectedCountry from context
    };

    useEffect(() => {
        setFilteredCountryList(countryList);  // Populate filtered country list initially
    }, [countryList]);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        setSearchKeyword(keyword);
        if (keyword) {
            const list = countryList.filter((item) => item.country.toLowerCase().includes(keyword));
            setFilteredCountryList(list);
        } else {
            setFilteredCountryList(countryList);
        }
    };

    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">{selectedCountry !== "" ? selectedCountry.length>10? selectedCountry ?.substr(0,10) +'...' :selectedCountry : 'Select Location'}</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={() => setIsOpenModal(false)}><IoMdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area..." value={searchKeyword} onChange={filterList} />
                    <Button><IoSearch /></Button>
                </div>

                <ul className="countryList mt-3">
                    {filteredCountryList?.length !== 0 && filteredCountryList.map((item, index) => (
                        <li key={index}>
                            <Button onClick={() => selectCountry(index, item.country)} className={selectedTab === index ? 'active' : ''}>
                                {item.country}
                            </Button>
                        </li>
                    ))}
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;
