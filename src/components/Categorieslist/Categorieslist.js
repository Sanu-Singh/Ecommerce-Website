import React from "react";
import "./Categorieslist.css";

// Top offers:https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100
// Mobiles & Tablets: https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f8bd5669e19e724.png?q=100
// Electronics: https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100
// TVs & Appliances: https://rukminim1.flixcart.com/fk-p-flap/128/128/image/904f3c8e7101408b.png?q=100
// Fashion: https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7f7355480c6adc16.png?q=100
// Beauty:https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f97d6138516056bc.png?q=100
// Home & Furniture: https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6728ed3cf145562c.png?q=100
// Flights: https://rukminim1.flixcart.com/fk-p-flap/128/128/image/007910082ae6355b.png?q=100
// Grocery:https://rukminim1.flixcart.com/fk-p-flap/128/128/image/46376ceed3448aff.png?q=100


function Categorieslist() {
    return (
        <div className="Category_list">
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"/> 
           <p>Top Offers</p>
        </div>
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f8bd5669e19e724.png?q=100"/> 
           <p>Mobiles & Tablets</p>
        </div>
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100"/> 
           <p>Electronics Appliances</p>
        </div>
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/904f3c8e7101408b.png?q=100"/> 
           <p>TVs & Appliances</p>
        </div>
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7f7355480c6adc16.png?q=100"/> 
           <p>Fashion</p>
        </div>
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f97d6138516056bc.png?q=100"/> 
           <p>Beauty</p>
        </div>
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6728ed3cf145562c.png?q=100"/> 
           <p>Home Furnitures</p>
        </div>
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/007910082ae6355b.png?q=100"/> 
           <p>Flights</p>
        </div>
        <div className="Single_category">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/46376ceed3448aff.png?q=100"/> 
           <p>Grocery</p>
        </div>
        </div>
    );
}
export default Categorieslist;