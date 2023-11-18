"use client";
// Default theme
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

import Frame2 from '@/public/images/Frame2.jpg'
import Link from "next/link";


function Carousel() {
  const images = [Frame2, Frame2, Frame2, Frame2, Frame2, Frame2, Frame2, Frame2, Frame2, Frame2, Frame2, Frame2]
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
      <div className='w-full h-[280px] md:rounded-xl overflow-hidden'>
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
                <Link href={"#"} className="bg-red-300 flex w-full h-[280px] md:h-[250px] fcc">
                  <Image src={image} alt="chart" quality={100} className="flex w-full min-h-[280px] object-cover object-right" />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <div className="w-full h-[60px] md:rounded-xl overflow-hidden mt-3">
        <div className="serviceExpertSliderStrip h-full">
        <Splide
            options={{
              type: "slide",
              rewind: true,
              fixedWidth: 80,
              fixedHeight: 60,
              isNavigation: true,
              gap: 10,
              arrows: false,
              focus: 'right',
              direction: "rtl",
              pagination: false,
              cover: true,
              breakpoints: {
                '768': {
                  fixedWidth: 80,
                  fixedHeight: 60,
                }
              },
            }}
            onMounted={splide => {
              secondarySlider.current = splide;
            }}
          >
            {images.map((image, i) => (
              <SplideSlide key={i}>
                <Image src={image} alt="chart" quality={100} className="h-[60px]" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Carousel;