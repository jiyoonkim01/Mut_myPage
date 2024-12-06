import styled from "@emotion/styled";
import React from "react";

const Content = styled.div`
  padding: 0;
`;

const TopContainer = styled.div`
  height: 123px;
  background-color: #828282;
  width: 100%;
`;

const MainContent = styled.div`
  background: black;
  color: white;
  height: 100vh;
  width: 100%;
`;

const Profile = () => {
  return (
    <Content>
      <TopContainer></TopContainer>
      <MainContent>왜 안돼</MainContent>
    </Content>
  );
};

export default Profile;
