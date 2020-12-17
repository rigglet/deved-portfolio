import react from "react";
import home2 from "../img/home2.png";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="Clock icon" />
              <h5>Efficient</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm icon" />
              <h5>Efficient</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="Money icon" />
              <h5>Efficient</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="Teamwork icon" />
              <h5>Efficient</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <img src={home2} alt="Camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
