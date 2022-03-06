import React from "react";
import "./style.css";
import Divider from "../divider";
import Cloth1 from "../../assets/img/Cloth1.jpg";
import Cloth2 from "../../assets/img/Cloth2.jpg";
import Cloth3 from "../../assets/img/Cloth3.jpg";
import Cloth4 from "../../assets/img/Cloth4.jpg";
import Cloth5 from "../../assets/img/Cloth5.jpg";
import Cloth6 from "../../assets/img/Cloth6.jpg";
import Cloth7 from "../../assets/img/Cloth7.jpg";
import Cloth8 from "../../assets/img/Cloth8.jpg";
import Cloth9 from "../../assets/img/Cloth9.jpg";
import Cloth10 from "../../assets/img/Cloth10.jpg";
import Cloth11 from "../../assets/img/Cloth11.jpg";
import Cloth12 from "../../assets/img/Cloth12.jpg";
import Card from "../Card";
import { useState } from "react";
import Filter from "../Filter";

const Clothes = () => {
  const [clothProducts] = useState([
    {
      id: 101,
      imgSrc: Cloth1,
      name: "BOYS T-SHIRTS H/S BEST PHUPHOO - WHITE",
      price: 795,
    },
    {
      id: 102,
      imgSrc: Cloth2,
      name: "BOYS T-SHIRTS H/S BEST MAMOO - WHITE",
      price: 1 + "," + 199,
    },
    {
      id: 103,
      imgSrc: Cloth3,
      name: "BOYS T-SHIRTS H/S BEST KHALA - WHITE",
      price: 895,
    },
    {
      id: 104,
      imgSrc: Cloth4,
      name: "GIRLS T-SHIRTS BLOOMING",
      price: 1 + "," + 999,
    },
    {
      id: 105,
      imgSrc: Cloth5,
      name: "GIRLS DIGITAL PRINT ",
      price: 895,
    },
    {
      id: 106,
      imgSrc: Cloth6,
      name: "GIRLS DIGITAL PRINT TOP FOR GIRLS ",
      price: 795,
    },
    {
      id: 107,
      imgSrc: Cloth7,
      name: "GIRLS DIGITAL PRINT COTTON BLUE - WHITE",
      price: 795,
    },
    {
      id: 108,
      imgSrc: Cloth8,
      name: "BOYS T-SHIRTS H/S - WHITE ",
      price: 999,
    },
    {
      id: 109,
      imgSrc: Cloth9,
      name: "CUP CAKE GIRLS DIGITAL PRINT CASUAL - BLUE",
      price: 845,
    },
    {
      id: 110,
      imgSrc: Cloth10,
      name: "GIRLS EMBROIDED TOP FLORAL - CITRUS",
      price: 1 + "," + 399,
    },
    {
      id: 111,
      imgSrc: Cloth11,
      name: "BOYS PANTS DENIM PANT EMB - ICE BLUE",
      price: 1 + "," + 299,
    },
    {
      id: 112,
      imgSrc: Cloth12,
      name: "BABY CAP FOR KIDS REGULAR",
      price: 795,
    },
  ]);
  return (
    <div className="main_content">
      <div className="search">
        <Divider />
        <h5>PRICES</h5>
        <div className="option">
          <Divider />
          <h6>PRODUCT TYPE</h6>
          <Filter name={"Baby Clothes"} />
          <Filter name={"Boys Clothes"} />
          <Filter name={"Boys Bottom"} />
          <Filter name={"Girls Apparel"} />
          <Filter name={"Girls bottom"} />
          <Divider />
          <h6>SIZE</h6>
          <Filter name={"Small"} />
          <Filter name={"Medium"} />
          <Filter name={"Large"} />
          <Filter name={"X-Large"} />
          <Filter name={"0-3M"} />
        </div>
      </div>
      <div className="container1 ">
        <Divider />
        <h1 className="header-title">Kid Clothes</h1>
        <p className="message-header">
          For a traditional look, try out the Bachaa Party range of kids Kurta
          and boys Shalwar suits. With a range of colors and styles, Bachaa
          Party brings a range of traditional and modern styles for both comfort
          and style. At Bachaa Party, we've got sales happening all the time for
          our Kurta and Shalwar Kameez.
        </p>

        <div className="filter">
          <div className="quantity">
            <h5>811 product</h5>
          </div>
          <div className="Select">
            <select className="Selection">
              <option>Featured</option>
              <option>Sort</option>
              <option>Best selling</option>
              <option>Alphabetically A -Z</option>
              <option>Alphabetically Z- A</option>
            </select>
          </div>
        </div>
        <div className="product">
          <div className="row">
            {clothProducts.map(
              ({ id, imgSrc, price, discount, name }, index) => {
                return (
                  <div className="col-3">
                    <div className="my-2 px-1 ">
                      <Card
                        key={index}
                        imgSrc={imgSrc}
                        price={price}
                        discount={discount}
                        name={name}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <Divider />
      </div>
    </div>
  );
};

export default Clothes;
