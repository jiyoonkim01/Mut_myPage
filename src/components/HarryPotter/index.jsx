import styled from "@emotion/styled";
import React from "react";
import harryPoster from "../../assets/images/favorite/harryPoster.png";

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

const HarryPotter = () => {
  return (
    <div>
      <TopContainer>
        <TopLeftContainer>
          <img src={harryPoster} alt="Harry Potter Poster" />
        </TopLeftContainer>
        <TopRightContainer>
          <Title>Harry Potter</Title>
          <Description>
            <strong>장르:</strong> 판타지, 어드벤처, 미스터리, 액션 <br />
            <strong>감독:</strong> 알폰소 쿠아론, 마이크뉴얼, 데이비드
            예이츠, 크리스 콜럼버스
            <br />
            <strong>출연진:</strong> 다니엘 래드클리프, 엠마 왓슨, 루퍼트 그린트
            외<br />
            <strong>정보:</strong> J. K. 롤링의 소설 해리포터 시리즈를 원작으로
            한 영화 시리즈.
            <br />이 시리즈는 "해리포터와 마법사의 돌"로 시작하여 "해리포터와
            죽음의 성물 – 파트 2"로 끝나는 8개의 판타지 영화로 구성된다.
          </Description>
        </TopRightContainer>
      </TopContainer>
      <BottomContatiner>
        <strong style={{ color: "#2B418C" }}>해리포터</strong>는 내가 살면서
        처음으로 진심으로 좋아했던 영화다.! <br />
        학생때는 유니버셜 스튜디오에서{" "}
        <strong style={{ color: "#2B418C" }}>해리포터</strong> 구역에서만 돈과
        시간을 다 보내고 올 정도로 좋아했다. 영화도 편별로 10번 넘게 봤을거다..{" "}
        <br />
        원서도 중딩때 다 읽었을 정도로 좋아했다.(학생 때 책 거의 안읽음) <br />
        지금은 학창시절에 비해 많이 식었지만, 인생영화를 물으면 여전히 고민없이{" "}
        <strong style={{ color: "#2B418C" }}>해리포터</strong>라고 말한다.
        <br />
        (근데 요새는 나이에 걸맞지 못한 영화라 당당하게 말하진 못하긴 함) <br />
        TMI) 민망하지만,, 예전에 취미 및 장기가{" "}
        <strong style={{ color: "#2B418C" }}>해리포터</strong>에 나오는 인물들의
        영문 이름을 full로 외우기, 마법 주문 외우기가 취미였다 ㅎㅎ;;
      </BottomContatiner>
    </div>
  );
};

export default HarryPotter;
