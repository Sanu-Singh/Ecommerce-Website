import React,{useState} from "react";
import "./Carousel.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Carousel(){
    const data =[
        {
            id: 1,
      image: "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg",
      name: "Plants",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OCE7mUqhL._SX3000_.jpg",
      name: "Headphones",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71JylaoMg+L._SX3000_.jpg",
      name: "Mobile",
    },
  ];

  const [currentimage,setcurrentimage]=useState(data[0].image);
  const [index,setindex]=useState(0);
 function previmage(){
  if(index==data.length-1) {
    setcurrentimage(data[0].image);
  setindex(0);
  return;
  }
  setcurrentimage(data[index+1].image);
  setindex(index+1);
 }
 function nextimage(){
  if(index==0){
    setcurrentimage(data[data.length-1].image);
    setindex(data.length-1);
    return;
  }
  setcurrentimage(data[index-1].image);
  setindex(index-1);
 }
    return (
   <div className="carousel">
   {/* {carouselData.map((value)=>(  
      <CarouselCard image={value.image}/>
   ))} */}
   
   {/* <KeyboardDoubleArrowLeftIcon/> */}
   <div className="carousel_arrow" onClick={nextimage} >
   <ArrowBackIosIcon/>
   </div>
          
   <img className="carousel_image" src={currentimage}/>
   <div className="carousel_arrow" onClick={previmage}>
   <ArrowForwardIosIcon/>
   </div>
  
   {/* <button onClick={nextimage}>Prev Image</button>
   <button onClick={previmage}>Next Image</button>
    */}

   </div>
    );
};

export default Carousel;