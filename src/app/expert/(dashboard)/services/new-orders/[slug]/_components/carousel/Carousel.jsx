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
import { useEffect, useRef } from "react";

function Carousel() {
  const images = [Frame2, Frame2, Frame2, Frame2,Frame2, Frame2, Frame2, Frame2,Frame2, Frame2, Frame2, Frame2]
  const primarySlider = useRef();
  const secondarySlider = useRef();

  useEffect(() => {
    if (primarySlider.current && secondarySlider.current) {
      primarySlider.current.sync(secondarySlider.current);
      secondarySlider.current.sync(primarySlider.current);
    }
  }, [primarySlider.current, secondarySlider.current]);


  return (
    <>
      <div className='w-full rounded-xl overflow-hidden'>
        <div className="serviceExpertSlider h-full">
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              pagination: false,
              interval: 3240,
              arrows: true,
              direction: "rtl",
              speed: 500,
              perPage: 1,
              gap: '1rem',
            }}
            onMounted={splide => {
              primarySlider.current = splide;
            }}
          >
            {images.map((image, i) => (
              <SplideSlide key={i}>
                <Image src={image} alt="chart" quality={100} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <div className="w-full rounded-xl overflow-hidden mt-5">
        <div className="serviceExpertSliderStrip h-full">
        <Splide
            options={{
              type: "slide",
              rewind: true,
              fixedWidth: 100,
              fixedHeight: 60,
              isNavigation: true,
              gap: 10,
              arrows: false,
              focus: 'right',
              direction: "rtl",
              pagination: false,
              cover: true,
              breakpoints: {
                '600': {
                  fixedWidth: 66,
                  fixedHeight: 40,
                }
              },
            }}
            onMounted={splide => {
              secondarySlider.current = splide;
            }}
          >
            {images.map((image, i) => (
              <SplideSlide key={i}>
                <Image src={image} alt="chart" quality={100} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Carousel;
// $ npm install @splidejs/react-splide
