import React, { useContext, useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import { Select } from '@mui/material';
import { FilterList } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [countryList, setCountryList] = useState([]);
    const [filteredCountryList, setFilteredCountryList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const context = useContext(MyContext);

    const selectCountry = (index, country) => {
        setSelectedTab(index);
        setIsOpenModal(false);
        context.setSelectCountry(country);
    };

    useEffect(() => {
        setCountryList(context.countryList);
        setFilteredCountryList(context.countryList);
    }, [context.countryList]);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        setSearchKeyword(keyword);
        if (keyword) {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });
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
                    <span className="name">{context.selectedCountry !== ""? context.selectedCountry : 'Select Location'}</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={() => setIsOpenModal(false)}><IoMdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area..." value={searchKeyword} onChange={filterList} />
                    <Button> <IoSearch /> </Button>
                </div>

                <ul className="countryList mt-3">
                    {
                        filteredCountryList?.length !== 0 && filteredCountryList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button onClick={() => selectCountry(index, item.country)}
                                        className={selectedTab === index ? 'active' : ''}
                                    >{item.country}</Button>
                                </li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;