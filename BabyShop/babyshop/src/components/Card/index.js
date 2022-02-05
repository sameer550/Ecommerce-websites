import "./style.css";
import Button from "../button";
const Card = ({ imgSrc, desc, price, discount, name }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-head">
          <div className="card-img">
            <img src={imgSrc} class="card-img-top" alt="logo" />
          </div>
          <div className="card-body">
            {price != undefined && (
              <div className="card-button p-absolute">
                <Button buttonColor="primaryColor" text="QUICK REVIEW" />
              </div>
            )}
            <h5 className="card-title">{name}</h5>
            {desc !== undefined && <p className="card-text">{desc}</p>}
            {price != undefined && (
              <div className="priceBar">
                <div className="prices">
                  <span className="card-text">
                    Rs. <del>{price} </del>
                  </span>
                </div>
                <div className="discountBar">
                  <div className="discount px-1">from Rs.{discount}</div>
                  <div className="save">Save 20%</div>
                </div>
              </div>
            )}
            {price == undefined && (
              <div className="card-button">
                <Button text="SHOP BY AGE" buttonColor="primaryColor" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
