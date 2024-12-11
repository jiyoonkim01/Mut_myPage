import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
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
  background-color: black;
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

const MoviePage = styled.div`
  background: linear-gradient(
    to bottom,
    #8d8d8d,
    #1e1e1e
  ); /* 위에서 아래로 색상 전환 */
  background-color: #8d8d8d;
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "Konkhmer Sleokchher", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 85px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-left: 50px;
  padding-top: 70px;
`;

const MoviePageText = styled.div`
  font-family: "KoHo", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 90px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-left: 50px;
`;

const MoviePageText2 = styled.div`
  font-family: "KoHo", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-left: 50px;
  margin-bottom: 80px;
`;

const Features = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

const FeatureBox = styled(motion.div)`
  width: 350px;
  height: 200px;
  background-color: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: white;
  text-align: center;
  font-family: "VITRO CORE TTF";
`;

const NowShowingMoviePage = styled.div`
  background-color: #1e1e1e;
  height: 100vh;
`;

const boxVariants = {
  hidden: { opacity: 0, y: 50 }, // 초기 상태
  visible: { opacity: 1, y: 0 }, // 애니메이션 후 상태
};

const Favorite = () => {
  const texts = ["우주", "마법", "판타지", "외국영화"];

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
        <MoviePage>
          <Title>Movie</Title>
          <MoviePageText>내가 좋아하는 영화들은?</MoviePageText>
          <MoviePageText2>
            아래의 조건들을 만족하면 대부분 좋아합니다
          </MoviePageText2>
          <Features
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }} // 각 박스에 지연 효과 적용
          >
            {texts.map((text, index) => (
              <FeatureBox
                key={index}
                variants={boxVariants}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1, // 반복 사이에 1초 지연
                }}
              >
                {text}
              </FeatureBox>
            ))}
          </Features>
        </MoviePage>
        <NowShowingMoviePage></NowShowingMoviePage>
      </MainContent>
    </Content>
  );
};

export default Favorite;
