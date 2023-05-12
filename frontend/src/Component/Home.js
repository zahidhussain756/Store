import React from "react";
import "./Home.css";
import Store from "./Store";
import data from "../data";
export const Home = () => {
  const { product } = data;
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="col-xs col-sm col-md col-lg"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner img-fluid">
          <div class="carousel-item active">
            <img
              style={{ height: "100vh" }}
              class="d-block w-100 "
              src="/slider/slider-1.jpg"
              alt="First slide"
            />
            <div class="carousel-caption">
              <h2 className="thisis text-center mt-4 d-flex align-items-center justify-content-center ">
                Raining Offers For Hot Summer! 25% Off On All ProductsAwesome
                Product Offer
              </h2>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{ height: "100vh" }}
              class="d-block w-100 "
              src="/slider/slider-2.jpg"
              alt="Second slide"
            />
            <div class="carousel-caption">
              <h1 className="thisis">Summer Sale</h1>
              <h3 className="thisis">50% OFF - LIMITED TIME OFFER</h3>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{ height: "100vh" }}
              class="d-block w-100"
              src="/slider/slider-3.jpg"
              alt="Third slide"
            />
            <div class="carousel-caption">
              <h3 className="thisis">
                {" "}
                Black Friday Sale 2023! Upto 50% OFF 20% Off On Tank Tops Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
                dictum.
              </h3>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{ height: "100vh" }}
              class="d-block w-100"
              src="/slider/slider-4.jpg"
              alt="forth slide"
            />
            <div class="carousel-caption">
              <h3 className="thisis">
                Hold a friends and family promotion offering discounts or
                giveaways to frequent shoppers.
              </h3>
            </div>
          </div>
          <div style={{ height: "100vh" }} class="carousel-item">
            <img
              class="d-block w-100"
              src="/slider/slider-5.jpg"
              alt="fifth slide"
            />
            <div class="carousel-caption">
              <h3 className="thisis">Limited Time Offer</h3>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/slider/slider-6.jpg"
              alt="fifth slide"
            />
            <div class="carousel-caption">
              <h3 className="thisis">
                Best Clothes Shopping Apps for Shopping on a Budget
              </h3>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};
