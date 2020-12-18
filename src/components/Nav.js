import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="3">Capture</a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About us</a>
        </li>
        <li>
          <a href="#">2. Our work</a>
        </li>
        <li>
          <a href="#">3. Contact us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  h1 {
    font-family: "Lobster", cursive;
    font-size: 2rem;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
