import React from "react";
import styled from "styled-components";
import { H2_KR } from "../styles/styled";

const Container = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  z-index: 997;
  justify-content: center;
  align-items: center;
  background: #2d4059;
  flex-direction: column;

  @media (max-width: 770px) {
    display: flex;
  }
`;

const NotSupported = () => {
  return (
    <Container>
      <img src="/sad.png" style={{ marginBottom: "20%" }}></img>
      <H2_KR color="#ea5455">
        죄송합니다. {<br></br>} 이 기능은 모바일에서는 지원하지 않습니다.
        <br />
        PC로 접속바랍니다!
      </H2_KR>
    </Container>
  );
};

export default NotSupported;
