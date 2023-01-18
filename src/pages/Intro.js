import React from 'react';
import { Carousel, Button, Space } from 'antd';
import { RightOutlined,LeftOutlined } from '@ant-design/icons';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Space>
      <Button id='SampleNextArrow' type="primary" shape="round" onClick={onClick}
      style={{display: "block", position: 'absolute', zIndex: 999999 ,bottom: '25px', right: '20px' }}>
        بعدی <RightOutlined />
      </Button>
    </Space>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Space>
      <Button id='SamplePrevArrow' type="primary" shape="round" onClick={onClick}
      style={{display: "block", position: 'absolute', zIndex: 999999 ,bottom: '25px', left: '20px' }}>
        <LeftOutlined /> قبلی
      </Button>
    </Space>
  );
}

export default function App () {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: function(currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
      if(nextSlide == 2){
        document.getElementById('SamplePrevArrow').style.display = "none"
        document.getElementById('SampleNextArrow').style.display = "none"
        document.getElementById('SampleEndArrow').style.display = "block"
        console.log("end slider");
      }
    },
    afterChange: function(currentSlide) {
      // if(currentSlide == 2){
      //   console.log("end slider");
      // }
    },
    appendDots: dots => (
      <div
        style={{
          bottom: '10px',
          borderRadius: "0px",
          padding: "0px"
        }}
      >
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <>
    <Button id='SampleEndArrow' type="primary" shape="round"
      style={{display: "block", position: 'absolute', zIndex: 999999 ,bottom: '25px', right: '20px', display: 'none' }}>
      اتمام <RightOutlined />
    </Button>
    <Slider {...settings} style={{backgroundColor:'green', width: '100vw', height: '100vh'}}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
    </>
  );
}
