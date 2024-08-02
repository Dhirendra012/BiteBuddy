import { useEffect, useState } from "react";
import { CDN_URL, DESKTOP } from "../utilities/contants";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Category = () => {
  const [item, setItem] = useState([]);
  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    const data = await fetch(DESKTOP);
    const json = await data.json();
    setItem(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    // console.log(item);
  }

  // console.log(item);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="p-2">
      <p className="text-2xl font-bold p-3 ml-10 mt-3">What's on your mind?</p>
      <Slider {...settings}>
        { item.map((item) => 
          <div>
            {console.log("ollection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2")}
            {console.log(item)}
            <Link to={"/category/"} ><img className="w-36 h-39" key={item?.id} src={CDN_URL + item?.imageId} /></Link>
          </div>)
        }
      </Slider>
      <div className="p-2 m-4 border-gray-200 border-b-2"></div>
    </div>
  );
};

export default Category;