import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Nav = styled.div`
  width: 100%;
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  position: absolute; /* 페이지 위에 겹쳐지도록 설정 */
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: #333;
`;

const Year = styled.div`
  font-family: "Rajdhani", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  margin-right: 350px;
  margin-left: 40px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;

const Title = styled.div`
  font-family: "Rajdhani", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  margin-right: 250px;
  color: #000000;
`;

const Navbar = () => {
  return (
    <Nav>
      <Content>
        <NavItem to="/Home">
          <Year>2024</Year>
        </NavItem>
        <NavItem to="/Profile">
          <Title>Profile</Title>
        </NavItem>
        <NavItem to="/Quiz">
          <Title>Quiz</Title>
        </NavItem>
        <NavItem to="/Favorite">
          <Title>Favorite</Title>
        </NavItem>
        <NavItem to="/Comment">
          <Title>Comment</Title>
        </NavItem>
      </Content>
    </Nav>
  );
};

export default Navbar;
