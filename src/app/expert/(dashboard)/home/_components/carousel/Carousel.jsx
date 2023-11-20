"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
//images
import Frame2 from '/public/images/Frame2.jpg'
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

function Carousel() {
  const images = [Frame2, Frame2, Frame2, Frame2]
  return (
    <div className="homeExpertSlider h-full">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          autoplay: true,
          interval: 3240,
          arrows: false,
          direction: "rtl",
          speed: 500,
          // heightRatio: 1
        }}
      >
        {
          images.map((image, i) => (
              <React.Fragment key={i}>
                <SplideSlide>
                  <div className="bg-red-300 flex min-w-[1565px] h-[200px] md:h-[250px] fcc">
                    <Image
                      className='flex min-h-[250px]'
                      src={image}
                      alt="chart"
                      quality={100}
                    />
                  </div>
                </SplideSlide>
              </React.Fragment>
          ))
        }
      </Splide>
    </div>
  );
}

export default Carousel;