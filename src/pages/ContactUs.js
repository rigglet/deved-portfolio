import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  color: black;
  margin-bottom: 4rem;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
