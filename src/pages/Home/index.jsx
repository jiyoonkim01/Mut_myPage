import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HelloText = styled.div`
  font-family: "Patua One", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 120px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 303px;
`;

const NameText = styled.div`
  font-family: "Pauls Ransom Note Font", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 300px;
  line-height: 320px;
  text-align: center;
  display: flex;
  gap: 10px;

  .typed-cursor {
    font-family: "Courier New", sans-serif;
    color: #333;
    animation: blink 0.9s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const ColoredLetter = styled.span`
  color: ${(props) => props.color};
`;

const Home = () => {
  const name = "J iyoonKim";
  const colors = [
    "#eeded8",
    "#94919b",
    "#1d1c14",
    "#b3bb75",
    "#c8c7c8",
    "#b6282e",
    "#706285",
    "#907859",
    "#cabca9",
  ];
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < name.length) {
        setTypedText((prev) => prev + name.charAt(index)); // charAt을 사용해 안전하게 접근
        index++;
      } else {
        clearInterval(interval); // 타이핑 완료 후 반복 멈춤
      }
    }, 200);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [name]);

  return (
    <MainContent>
      <HelloText>Hi, I am</HelloText>
      <NameText>
        {typedText.split("").map((char, index) => (
          <ColoredLetter key={index} color={colors[index % colors.length]}>
            {char}
          </ColoredLetter>
        ))}
        <span className="typed-cursor">|</span>
      </NameText>
    </MainContent>
  );
};

export default Home;
