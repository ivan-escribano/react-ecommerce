const CarouselIndicators = () => {
  return (
    <>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="0"
        className="active"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="2"
      ></button>
    </>
  );
};

export default CarouselIndicators;
