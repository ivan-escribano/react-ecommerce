const CarouselItem = ({ slide }) => {
  return (
    <>
      <div className={`carousel-item ${slide.active} h-100`}>
        <img
          src={slide.url}
          alt={slide.title}
          className="d-block w-100 h-100"
        />
        <div className="carousel-caption d-none d-md-block">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
