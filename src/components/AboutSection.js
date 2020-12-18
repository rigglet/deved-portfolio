import react from "react";
import home1 from "../img/home1.png";
import { Layout, Description, Hide, Image } from "../styles/styles";

const AboutSection = () => {
  return (
    //<div className="about">
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact us here</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
