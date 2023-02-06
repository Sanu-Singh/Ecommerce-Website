import { logDOM } from "@testing-library/react";
import React from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
const Navbar =()=>{
//Elements
// 1 logo
// 2 Input field
// 3 Name
// 4 Item1
// 5 Item2
// 6 Item3

    return(
        <div className="navbar">
        <div className="navbar_left">
        <p>Flipkart</p>
        <input className="navbar_left_input" placeholder="Search for products, brands and more" />
        <SearchIcon/>

       
        </div>

        <div className="navbar_right">
        <p>Name</p>
        <p>Become a Seller</p>
        <p>More</p>
         <p>Cart</p>
        </div>
        </div>
    );
};

export default Navbar; 