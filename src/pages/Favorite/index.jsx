import styled from "@emotion/styled";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState } from "react";
import dropdownBlack from "../../assets/images/favorite/dropdown-black.png";
import dropdownWhite from "../../assets/images/favorite/dropdown-white.png";
import HarryPotter from "../../components/HarryPotter";
import FantasticBeasts from "../../components/FantasticBeasts";
import Dune from "../../components/Dune";
import harryPotterImage from "../../assets/images/favorite/harryPotter.png";
import fantasticBeastsImage from "../../assets/images/favorite/fantasticBeasts.png";
import duneImage from "../../assets/images/favorite/dune.png";
import FoodMap from "../../components/FoodMap";

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
    transform: scale(1.05);
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
    transform: scale(1.05);
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
  background: linear-gradient(to bottom, #8d8d8d, #1e1e1e);
  background-color: #8d8d8d;
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.div`
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
  height: 155%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Card = styled(motion.li)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 30px;
  list-style: none;
  width: 900px;
  height: 500px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transform-origin: center center;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled(motion.div)`
  padding: 16px;
  text-align: center;
  color: white;
  font-size: 50px;
  margin-top: 250px;
`;

const FoodPage = styled.div`
  height: 100vh;
  background-color: white;
`;

const FoodTitle = styled.div`
  font-family: "Konkhmer Sleokchher", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 85px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  color: black;
  margin-left: 50px;
  padding-top: 70px;
`;

const FoodPageText = styled.div`
  font-size: 40px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  color: black;
  margin-left: 50px;
  margin-bottom: 40px;
  font-family: "omyu_pretty";
  color: #000000;

  @font-face {
    font-family: "omyu_pretty";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

const MusicPage = styled.div`
  height: 100vh;
  background-color: black;
`;

const boxVariants = {
  hidden: { opacity: 0, y: 50 }, // 초기 상태
  visible: { opacity: 1, y: 0 }, // 애니메이션 후 상태
};

const cards = [
  {
    id: "harry",
    title: "Harry Potter",
    Component: HarryPotter,
    image: harryPotterImage,
  },
  {
    id: "beasts",
    title: "Fantastic Beasts",
    Component: FantasticBeasts,
    image: fantasticBeastsImage,
  },
  {
    id: "dune",
    title: "Dune",
    Component: Dune,
    image: duneImage,
  },
];

const Favorite = () => {
  const texts = ["우주", "마법", "판타지", "외국영화"];

  const [selectedCard, setSelectedCard] = useState(null);
  const animationControls = useAnimation();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    animationControls.start({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    });
  };

  const handleClose = () => {
    animationControls
      .start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.5 },
      })
      .then(() => setSelectedCard(null));
  };

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
          <MovieTitle>Movie</MovieTitle>
          <MoviePageText>내가 좋아하는 영화들은?</MoviePageText>
          <MoviePageText2>
            아래의 조건들을 만족하면 대부분 좋아합니다
          </MoviePageText2>
          <Features
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            {texts.map((text, index) => (
              <FeatureBox
                key={index}
                variants={boxVariants}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
              >
                {text}
              </FeatureBox>
            ))}
          </Features>
        </MoviePage>
        <NowShowingMoviePage>
          {cards.map((card) => (
            <Card
              key={card.id}
              layoutId={`card-container-${card.id}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCardClick(card)}
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >
              <CardContent layoutId={`card-content-${card.id}`}>
                <h3>{card.title}</h3>
              </CardContent>
            </Card>
          ))}

          <AnimatePresence>
            {selectedCard && (
              <motion.div
                layoutId={`card-container-${selectedCard.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000,
                  overflow: "hidden",
                }}
                onClick={handleClose}
              >
                <motion.div
                  layoutId={`card-content-${selectedCard.id}`}
                  style={{
                    backgroundColor: "#EFEFEF",
                    borderRadius: "16px",
                    padding: "24px",
                    width: "1000px",
                    height: "900px",
                    textAlign: "right",
                  }}
                >
                  <motion.div
                    layoutId={`card-title-${selectedCard.id}`}
                    style={{ marginTop: "16px" }}
                  ></motion.div>
                  <selectedCard.Component />
                  <motion.button
                    style={{
                      marginTop: "10px",
                      padding: "10px 70px",
                      backgroundColor: "#1C1C1C",
                      color: "white",
                      border: "none",
                      fontSize: "20px",
                      lineHeight: "30px",
                      borderRadius: "16px",
                      cursor: "pointer",
                      marginRight: "30px",
                    }}
                    whileHover={{ scale: 1.1 }}
                    onClick={handleClose}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </NowShowingMoviePage>
        <FoodPage>
          <FoodTitle>Food</FoodTitle>
          <FoodPageText>아래 식당이름을 클릭해보세요!</FoodPageText>
          <FoodMap />
        </FoodPage>
        <MusicPage></MusicPage>
      </MainContent>
    </Content>
  );
};

export default Favorite;
