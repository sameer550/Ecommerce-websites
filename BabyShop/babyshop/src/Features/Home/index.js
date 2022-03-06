import Nav from "../../components/nabvar";
import Sale from "../../assets/img/wintersale.jpg";
import Tiles from "../../components/tiles";
import Footer1 from "../../assets/img/footer1.jpg";
import Footer2 from "../../assets/img/footer2.jpg";
import Footer3 from "../../assets/img/footer3.jpg";
import Tiles1 from "../../assets/img/tiles1.jpg";
import Tiles2 from "../../assets/img/tiles2.jpg";
import Tiles3 from "../../assets/img/tiles3.jpg";
import Tiles4 from "../../assets/img/tiles4.jpg";
import Tiles5 from "../../assets/img/tiles5.jpg";
import Feature1 from "../../assets/img/shirts.jpg";
import Feature2 from "../../assets/img/jacket.jpg";
import Foot from "../../components/footer";
import Card from "../../components/Card";
import Divider from "../../components/divider";
import Clothes from "../../components/Clothes";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
const Home = () => {
  const [card1Products, setcard1Product] = useState([
    {
      id: 1,
      name: "INFANTS | 0-24 MONTHS",
      imgSrc: Footer1,
      desc: "A large variety of rompers, t-shirts, baby care products and much more on sale.",
    },
    {
      id: 2,
      name: "TODDLERS | 2 - 7 YEARS",
      imgSrc: Footer2,
      desc: "A wide range of jackets, pants, sweatshirts, t-shirts, accessories and much more.",
    },
    {
      id: 3,
      name: "JUNIORS | 7 - 14 YEARS",
      imgSrc: Footer3,
      desc: "A wide range of hoodies, denim pants, sweaters, t-shirts, accessories and much more.",
    },
  ]);
  const [featureProducts, setfeaturesProduct] = useState([
    {
      id: 4,
      imgSrc: Feature1,
      name: "BOYS SWEATSHIRT HAVE A NICE NAVY",
      price: 1000,
      discount: 800,
    },
    {
      id: 5,
      imgSrc: Feature2,
      name: "GIRLS SWEATSHIRT HAVE A NICE NAVY",
      price: 2000,
      discount: 1899,
    },
  ]);
  const [tilesProducts, settilesProduct] = useState([
    {
      id: 1,
      imgSrc: Tiles1,
      label: "baby care",
    },
    {
      id: 2,
      imgSrc: Tiles2,
      label: "Boy shoes",
    },
    {
      id: 3,
      imgSrc: Tiles3,
      label: "girl shoes",
    },
    {
      id: 4,
      imgSrc: Tiles4,
      label: "school ",
    },
    {
      id: 5,
      imgSrc: Tiles2,
      label: "baby care",
    },
    {
      id: 6,
      imgSrc: Tiles1,
      label: "baby care",
    },
    {
      id: 7,
      imgSrc: Tiles4,
      label: "baby care",
    },
    {
      id: 8,
      imgSrc: Tiles5,
      label: "baby care",
    },
  ]);

  return (
    <div>
      <Nav />

      <img src={Sale} alt="logo" width={"100%"} />
      <Clothes />
      <Divider />

      <div className="container">
        <div className="row">
          {featureProducts.map(({ id, imgSrc, price, discount, name }) => {
            return (
              <div className="col-3">
                <div className="my-2 px-1">
                  <Card
                    key={id}
                    imgSrc={imgSrc}
                    price={price}
                    discount={discount}
                    name={name}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Divider />
      <div className="container">
        <div className="row">
          {tilesProducts.map(({ id, imgSrc, label }) => {
            return (
              <div className="col-3">
                <div className="my-2    ">
                  <Tiles key={id} imgSrc={imgSrc} label={label} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Divider />
      <div className="container-lg my-4">
        <div className="row">
          {card1Products.map(({ id, name, desc, imgSrc }) => {
            return (
              <div className="col-4">
                <div className="p-1">
                  <Card key={id} name={name} desc={desc} imgSrc={imgSrc} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Divider />
      <Foot />
    </div>
  );
};

export default Home;
