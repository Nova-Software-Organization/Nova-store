// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { data } from '../../../../data/data';

export default function SliderProducts() {
  const [foodsSliders, setFoodsSliders] = useState(data);
  const filteredFoodsSliders = foodsSliders.filter(item => item.category === "salad" || item.category === "burger");

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="max-w-[1640px] mx-auto p-6 rounded-lg">
      <Slider {...settings}>
        {filteredFoodsSliders.map((item, index) => (
          <div className="w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center" key={index}>
            <img className="rounded-lg object-cover w-full h-[500px] md:h-[600px]" src={item.image} alt={item.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
