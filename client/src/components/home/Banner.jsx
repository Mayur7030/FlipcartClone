import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../constants/data";
import { Box, styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")({
  width: "100%",
  height: 180,
});

function Banner() {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      swipeable={false}
      draggable={false}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      slidesToSlide={1}
      keyBoardControl={true}
    >
      {bannerData.map((data) => {
        return (
          <Box>
            <Image src={data.url} alt="banner"></Image>
          </Box>
        );
      })}
    </Carousel>
  );
}

export default Banner;
