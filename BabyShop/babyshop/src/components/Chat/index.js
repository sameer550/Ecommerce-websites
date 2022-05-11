import "./style.css";
import whatapp from "../../assets/img/whatapp.png";
const Chat = () => {
  return (
    <>
      <div className="customer-help">
        <a href="https://wa.me/923327907441 " target="_blank">
          <img className="footer-logo" src={whatapp} alt="logo"></img>
        </a>
      </div>
    </>
  );
};
export default Chat;
