import CarouselIndicators from "./CarouseIndicators";
import CarouselControl from "./CarouselControl";
import CarouselItem from "./CarouselItem";

const Carousel = ({ slide }) => {
  return (
    <div id="demo" className="carousel slide vh-100" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <CarouselIndicators></CarouselIndicators>
      </div>
      <div className="carousel-inner h-100">
        {slide.map((element) => {
          return <CarouselItem slide={element} key={element.id} />;
        })}
      </div>
      <CarouselControl></CarouselControl>
    </div>
  );
};

export default Carousel;
