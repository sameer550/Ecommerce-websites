import Button from "../button";
import "./style.css";
import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/insta.png";
import snap from "../../assets/img/snap.png";
const Foot = () => {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>INFORMATION</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Store Locator</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Legacy</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
                <img className="footer-logo" src={snap} alt="logo"></img>
              </a>
              <a href="#">
                <i className="bi bi-twitter">
                  <img className="footer-logo" src={twitter} alt="logo"></img>
                </i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
                <img
                  className="footer-logo-insta"
                  src={instagram}
                  alt="logo"
                ></img>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
                <img className="footer-logo" src={facebook} alt="logo"></img>
              </a>
              <p className="copyright">© 2022 Bachaa Party</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Foot;
