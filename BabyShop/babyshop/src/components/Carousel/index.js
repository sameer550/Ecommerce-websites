import React from "react";
import Car1 from "../../assets/img/car5.jpg";
import Car2 from "../../assets/img/car4.jpg";
import Car3 from "../../assets/img/wintersale.jpg";
const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={Car3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={Car1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={Car2} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
