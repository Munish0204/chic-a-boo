import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home/index';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';  
import Footer from './Components/Footer/index';

// Create context
const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(''); // Use camelCase

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const value = {
    countryList,
    setSelectedCountry, // Correctly using the setter function
    selectedCountry,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
