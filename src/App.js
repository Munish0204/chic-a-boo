import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home/index'
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries");
  },[]);

  const getCountry = async(url)=>{
    const response = await axios.get(url);
    setCountryList(response.data.data)
    console.log(response.data.data);
  }

  const value = {
    countryList,
    setselectedCountry,
    selectedCountry,
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={value}>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext};