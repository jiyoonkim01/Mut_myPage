import styled from "@emotion/styled";
import React from "react";
import dropdownBlack from "../../assets/images/favorite/dropdown-black.png";
import dropdownWhite from "../../assets/images/favorite/dropdown-white.png";

const Content = styled.div`
  padding: 0;
  background: black;
`;

const TopContainer = styled.div`
  height: 123px;
  background-color: #828282;
  width: 100%;
`;

const MainContent = styled.div`
  background: black;
  height: 100vh;
  width: 100%;
`;

const Navdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding-bottom: 150px;
`;

const FlowingTextWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 300px 0;
`;

const FlowingText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  font-size: 50px;
  font-family: "Lalezar";
  font-style: normal;
  font-weight: 400;
  font-size: 140px;
  line-height: 150px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  animation: flowText 15s linear infinite;
  padding: 100px 0;

  @keyframes flowText {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const HeadTitle = styled.div`
  font-family: "Kokoro";
  font-style: normal;
  font-weight: 400;
  font-size: 110px;
  line-height: 120px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 40px 0 25px 72px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 1300px;
  height: 240px;
  background-color: #d1d1d1;
  border-radius: 50px;
  &:hover {
    transform: scale(1.05); /* 크기 확대 효과 */
  }
`;

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 1300px;
  height: 240px;
  &:hover {
    transform: scale(1.05); /* 크기 확대 효과 */
  }
`;

const DropdownBlackIcon = styled.img`
  width: 82px;
  height: 60px;
  padding-right: 100px;
`;

const DropdownWhiteIcon = styled.img`
  width: 82px;
  height: 60px;
  padding-left: 100px;
`;

const MovieNav = styled.div`
  font-family: "Luckiest Guy", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 120px;
  display: flex;
  align-items: center;
  text-align: left;
  color: #000000;
  padding-left: 100px;
`;

const FoodNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Luckiest Guy", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 120px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ffffff;
  padding-right: 100px;
`;

const MusicNav = styled.div`
  font-family: "Luckiest Guy", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 120px;
  display: flex;
  align-items: center;
  text-align: left;
  color: #000000;
  padding-left: 100px;
`;

const Favorite = () => {
  return (
    <Content>
      <TopContainer></TopContainer>
      <MainContent>
        <FlowingTextWrapper>
          <FlowingText>Things I Like... Movies, Foods and Music</FlowingText>
        </FlowingTextWrapper>
        <HeadTitle>Favorite</HeadTitle>
        <Navdiv>
          <StyledDiv>
            <MovieNav>Movie</MovieNav>
            <DropdownBlackIcon src={dropdownBlack} alt="dropdown" />
          </StyledDiv>
          <StyledDiv2>
            <DropdownWhiteIcon src={dropdownWhite} alt="dropdown" />
            <FoodNav>Food</FoodNav>
          </StyledDiv2>
          <StyledDiv>
            <MusicNav>Music</MusicNav>
            <DropdownBlackIcon src={dropdownBlack} alt="dropdown" />
          </StyledDiv>
        </Navdiv>
      </MainContent>
    </Content>
  );
};

export default Favorite;
