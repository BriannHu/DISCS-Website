import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./NewsCarousel.css";

import { CarouselItems } from "./CarouselItems.js";

const NewsCarousel = (props) => {
  return (
    <Carousel className="carousel-style" fade prevIcon={null} nextIcon={null}>
      {CarouselItems.map((item, index) => {
        return (
          <Carousel.Item className="carousel-item" key={index}>
            <img
              className="slide-image"
              src={item.image_url}
              alt={item.title}
            />
            <Carousel.Caption className="carousel-caption">
              [{item.title}] {item.caption}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default NewsCarousel;