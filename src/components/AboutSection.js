import home1 from "../img/home1.png";
import { Layout, Description, Hide, Image } from "../styles/styles";
//Framer motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

import Wave from "./Wave";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us here</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Guy with a camera"
        />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
