import React, { useState } from "react";
import Filter from "../Filter";
import "./style.css";
import Divider from "../divider";
const Filteration = () => {
  const [labelProducts] = useState([
    {
      name: "Small",
    },
    {
      name: "Medium",
    },
    {
      name: "Large",
    },
    {
      name: "0-3M",
    },
    {
      name: "X-Large (1)",
    },
    {
      name: "0-3M (22)",
    },
    {
      name: "6-7 (2)",
    },
    {
      name: "10-12 (1)",
    },
    {
      name: "3-6M (196)",
    },
    {
      name: "6-9M (194)",
    },
    {
      name: "9-12M (197)",
    },
    {
      name: "12-18M (196)",
    },
    {
      name: "4-5Y (723)",
    },

    {
      name: "6-7Y (724)",
    },

    {
      name: "18-24M (226)",
    },

    {
      name: "2-3Y (733)",
    },

    {
      name: "3-4Y (731)",
    },
  ]);
  return (
    <div>
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
        {labelProducts.map(({ name }) => {
          return <Filter name={name} />;
        })}
      </div>
    </div>
  );
};

export default Filteration;
