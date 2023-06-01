import { React, useState } from "react";
import { Routes, Route, Link, Router, Outlet } from "react-router-dom";
import CurrencySwitcher from "./Components/CurrencySwictcher";
import Display from "./Components/Display";
import Form from "./Components/Forms";
import Home from "./Components/home";
import "./App.css";

// import Button from './Components/botton';
//  import AboutTimilehin from './Components/timi2';
// import LoginComponent from './Components/login';
// import SideBar from './Components/Sidebar';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [currency, setCurrency] = useState("EUR");

  const handleCurrencyChange = () => {
    setCurrency(currency === "EUR" ? "USD" : "EUR");
  };

  return (
    <div>
      <h1>this is a basic router set up</h1>
      <nav>
      <button>
      <Link to="/">Home</Link>
        <Link to="form">Forms</Link>
      </button>
      </nav>
      <Routes>
        <Route path="form" element={<Form />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

//   //  const [count, setCount] = useState(0)
//   const onClickHandler = () =>{
//     alert("story time!")
//   }

export default App;
