import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const MapContainer = styled.div`
  display: flex;
  width: 950px;
  height: 650px;
  margin-left: 90px;
`;

const RestaurantList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 90px;
`;

const RestaurantsTitle = styled.div`
  display: flex;
  font-size: 35px;
  padding-bottom: 5px;
  line-height: 45px;
  cursor: pointer;
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

const RestaurantsText = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 35px;
  padding-bottom: 25px;
`;

const restaurantCoordinates = {
  "이가네 양꼬치": { lat: 37.54403091131493, lng: 127.05645640422556 },
  빨간냄비: { lat: 37.395508, lng: 126.651871 },
  북해도: { lat: 37.398871, lng: 126.652192 },
  "이재모 피자": { lat: 35.102245, lng: 129.030598 },
  고트델리: { lat: 37.580066, lng: 126.968262 },
};

function FoodMap() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new window.kakao.maps.LatLng(37.375276, 126.632846), // 초기 중심 좌표
      level: 3, // 지도의 확대 레벨
    };
    const kakaoMap = new window.kakao.maps.Map(container, options); // 지도 생성
    setMap(kakaoMap); // 상태에 지도 객체 저장
  }, []);

  const handleClick = (restaurant) => {
    const { lat, lng } = restaurantCoordinates[restaurant];
    const moveLatLon = new window.kakao.maps.LatLng(lat, lng); // 클릭한 식당의 좌표로 이동
    map.setCenter(moveLatLon); // 지도 중심을 해당 좌표로 이동
  };

  return (
    <Container>
      <RestaurantList>
        <RestaurantsTitle onClick={() => handleClick("이가네 양꼬치")}>
          이가네 양꼬치
        </RestaurantsTitle>
        <RestaurantsText>
          양꼬치도 엄청 맛있지만, 탕수육과 가지요리가 찐또배기!
          <br />
          가지 싫어하는데 유일하게 찾아서 먹는 곳..
        </RestaurantsText>

        <RestaurantsTitle onClick={() => handleClick("빨간냄비")}>
          빨간냄비
        </RestaurantsTitle>
        <RestaurantsText>
          사실 모든 떡볶이를 좋아하지만, 그중에서도 즉떡을 제일 좋아한다.
          <br />
          그중 제일 맛집은 뭐니뭐니 해도 해경의 빨간 냄비 !
        </RestaurantsText>

        <RestaurantsTitle onClick={() => handleClick("북해도")}>
          북해도
        </RestaurantsTitle>
        <RestaurantsText>
          해산물 중에서 참치를 제일 좋아하는데,
          <br /> 송도에서 참치를 먹으러 간다고 하면 95% 의 확률로 여길 간다.
        </RestaurantsText>

        <RestaurantsTitle onClick={() => handleClick("이재모 피자")}>
          이재모 피자
        </RestaurantsTitle>
        <RestaurantsText>
          여긴 피자 없이 치즈크러스트만 먹어도 될 정도로 치즈가 맛있다..
          <br />
          역시 임실치즈!
        </RestaurantsText>

        <RestaurantsTitle onClick={() => handleClick("고트델리")}>
          고트델리
        </RestaurantsTitle>
        <RestaurantsText>
          송도에서 먼 길을 가야하고 엄청 특별한 맛은 아니지만,
          <br />
          매년 꼭 가게되는 잠봉 맛집
        </RestaurantsText>
      </RestaurantList>
      <MapContainer id="map" />
    </Container>
  );
}

export default FoodMap;
