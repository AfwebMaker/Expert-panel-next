"use client";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
// css
import styles from "./carousel.module.css";
//images
import Frame0 from '@/public/images/Frame0.jpg'
import Frame1 from '@/public/images/Frame1.jpg'
import Frame2 from '@/public/images/Frame2.jpg'
import Frame3 from '@/public/images/Frame3.jpg'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

function Carousel() {
  const images = [Frame2, Frame2, Frame2, Frame2]
  return (
    <div className="homeExpertSlider h-full">
      <Splide
        className=""
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
            <>
              <SplideSlide>
                <div key={i} className="bg-red-300 flex min-w-[1565px] h-[200px] md:h-[250px] fcc">
                  <Image
                    className='flex min-h-[250px]'
                    src={image}
                    alt="chart"
                    quality={100}
                  />
                </div>
              </SplideSlide>
            </>
          ))
        }
        {/* <SplideSlide>
          <div className="bg-red-300 w-full h-full flex">slid 1</div>
        </SplideSlide>

        <SplideSlide>
          <div className="bg-red-400 w-full h-full flex">slid 2</div>
        </SplideSlide>

        <SplideSlide>
          <div className="bg-red-500 w-full h-full flex">slid 3</div>
        </SplideSlide>

        <SplideSlide>
          <div className="bg-red-600 w-full h-full flex">slid 4</div>
        </SplideSlide> */}
      </Splide>
    </div>
  );
}

export default Carousel;
// $ npm install @splidejs/react-splide
