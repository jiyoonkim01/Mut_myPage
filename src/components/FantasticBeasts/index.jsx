import styled from "@emotion/styled";
import React from "react";
import beastsPoster from "../../assets/images/favorite/beastsPoster.png";

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

const FantasticBeasts = () => {
  return (
    <div>
      <TopContainer>
        <TopLeftContainer>
          <img src={beastsPoster} alt="Fantastic Beasts Poster" />
        </TopLeftContainer>
        <TopRightContainer>
          <Title>Fantastic Beasts</Title>
          <Description>
            <strong>장르:</strong> 판타지, 모험 <br />
            <strong>감독:</strong> 데이비드 예이츠
            <br />
            <strong>출연진:</strong> 에디 레드메인, 캐서린 워터스턴 외<br />
            <strong>정보:</strong> 해리 포터 시리즈의 프리퀄 신비한 동물사전
            시리즈의 첫 번째 작품. 해리 포터 시리즈의 배경에서 약 70년 전인
            1926년 미국에서, 호그와트의 수업과목의 교과서인 '신비한 동물사전'을
            작가 뉴트 스캐맨더가 집필하면서 일어나는 이야기를 담는다.
          </Description>
        </TopRightContainer>
      </TopContainer>
      <BottomContatiner>
        해리포터의 광팬이던 나에게 후속편인
        <strong style={{ color: "#2B418C" }}>"신비한 동물사전"</strong>은 안볼
        수 없는 영화였고, 역시나 나에게는 명작으로 남는다. 우선 주인공 배우부터
        마음에 들었고, 영화 스토리도 너무 좋았다.
        <br /> J.K. 롤링이 해리포터의 마법 세계관을 영국을 기반으로 만들었는데,
        영화에서 배우 에디 레드메인이 런던 토박이라 더 좋았던 것 같다.(해리포터
        버프)
        <br /> 맨날 해리포터 본 시리즈만 몇번씩 돌려보고 했었는데, 약간 기다리던
        만화의 후속편이 나온 것 같은 느낌?!이였던 것 같다.
        <br /> 너무 반갑고 좋아서 이 시리즈도 굿즈를 여러개 샀던 기억이 난다
        ㅎㅅㅎ
      </BottomContatiner>
    </div>
  );
};

export default FantasticBeasts;
