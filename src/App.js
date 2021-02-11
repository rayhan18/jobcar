import React from 'react';
import './App.css';



import HomePages from "./Assetes/pages/HomePages";
import PostJobPages from "./Assetes/pages/PostJobPages";
import CreatYourCvPages from "./Assetes/pages/CreatYourCvPages";

import FindJob from "./Assetes/Component/FindJob/FindJob";
import FindJobMain from "./Assetes/Component/FindJobMain/FindJobMain";
import Navbar from "react-bootstrap/Navbar";
import NavBar from "./Assetes/Component/Navbar/NavBar";
import Footer from "./Assetes/Component/footer/footer";
import SalsProduct from "./Assetes/Component/SalsProduct/SalsProduct";

function App() {
  return (
    <div>
          <NavBar/>
          <HomePages/>
          <Footer/>
    </div>
  );
}

export default App;
