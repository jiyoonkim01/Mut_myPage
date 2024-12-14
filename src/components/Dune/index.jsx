import styled from "@emotion/styled";
import React from "react";
import dunePoster from "../../assets/images/favorite/dunePoster.png";

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
`;

const TopLeftContainer = styled.div`
  margin-right: 40px;

  img {
    width: 270px;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const TopRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
`;

const Title = styled.div`
  font-size: 50px;
  line-height: 55px;
  color: #000000;
  text-align: left;
  font-family: "Paperlogy-8ExtraBold";
  margin-bottom: 25px;

  @font-face {
    font-family: "Paperlogy-8ExtraBold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2")
      format("woff2");
    font-weight: 800;
    font-style: normal;
  }
`;

const Description = styled.div`
  text-align: left;
  font-family: "VITRO PRIDE TTF";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 42px;
  color: #000000;
`;

const BottomContatiner = styled.div`
  align-items: center;
  text-align: left;
  padding: 20px;
  font-family: "VITRO PRIDE TTF";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 42px;
  color: #000000;
`;

const Dune = () => {
  return (
    <div>
      <TopContainer>
        <TopLeftContainer>
          <img src={dunePoster} alt="Dune Poster" />
        </TopLeftContainer>
        <TopRightContainer>
          <Title>Dune</Title>
          <Description>
            <strong>장르:</strong> SF, 판타지, 스페이스 오페라, 액션, 어드벤처
            <br />
            <strong>감독:</strong> 드니 빌뇌브
            <br />
            <strong>출연진:</strong> 티모시 샬라메, 젠데이아, 레베카 페르구손 외
            <br />
            <strong>정보:</strong> 프랭크 허버트의 소설 원작의 시리즈. 신비의
            자원 스파이스가 유일하게 생산되는 메마른 사막 행성 아라키스에서서
            은하계 종족들이 패권을 장악하기 위해 분투하는 이야기.
          </Description>
        </TopRightContainer>
      </TopContainer>
      <BottomContatiner>
        사실 나는 우주/마법 등의 소재가 바탕인 SF물을 좋아한다^^ 이러한 이유로{" "}
        <strong style={{ color: "#2B418C" }}>DUNE</strong>도 굉장히 사랑한다.
        +주인공(티모시 샬라메) 버프
        <br />
        파트1이 나왔을 때는 사실 감흥이 덜했다. 아무래도 엄청 긴 시리즈물이라
        1편은 거의 배경 설명을 하고 끝난 느낌이었다. 근데 파트2 부터는 제대로 된
        이야기가 시작되어서 굉장히 흥미진진하고 영화 자체를 진짜
        잘만들었다(영상&음악 모두 완벽). 스토리도 좋아서 안봤다면 강추한다!! 꼭
        보세요ㅠㅠㅠ
        <br />
        TMI) 이 영화 역시 너무 마음에 들어 올해 보고 원서를 바로 구매해서
        읽는중이다. 그리고 이거 보고 티모시 샬라메가 나온 영화들 정주행 함.
      </BottomContatiner>
    </div>
  );
};

export default Dune;
