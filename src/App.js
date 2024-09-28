import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home/index'
import { createContext, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

function App() {

  const values={
    const [countryList,setCountryList] = useState([]);
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
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
