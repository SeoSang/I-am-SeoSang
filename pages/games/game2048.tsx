import React, { useState } from "react"
import { Row, Col, Button, Popconfirm, message } from "antd"
import Game2048Board from "../../components/games/Game2048Board"
import styled from "styled-components"
import { GAME_BG_COLOR, H2, H3_KR } from "../../styles/styled"
import GameNavigation from "../../components/GameNavigation"

const EXIT_TEXT = "진행중인 게임이 종료 됩니다."

const VersionButton = styled(Button)`
  display: block;
  width: 50%;
  margin: 10px auto;
`

const ModeContainer = styled.div`
  width: 60%;
  background-color: #383b3a;
  -webkit-box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin: 20px auto;
`

const game2048 = () => {
  const [version, setVersion] = useState(4)

  const onClickButton = (ver: number) => {
    setVersion(ver)
  }
  return (
    <Row style={{ color: "#f5f6fa", minHeight: "100vh", backgroundColor: GAME_BG_COLOR }}>
      <Col xs={24} md={6} style={{ textAlign: "center" }}></Col>
      <GameNavigation></GameNavigation>
      <Col xs={24} md={12}>
        <br></br>
        <Game2048Board version={version}></Game2048Board>
        <Row align='middle' justify='center' style={{ textAlign: "center" }}>
          <p>조작법 : ➡ / ⬅ / ⬆ / ⬇</p>
          <p>우측 상단메뉴를 통해 여러 모드와 테마로 즐길 수 있습니다! (웹 전용)</p>
        </Row>
        <footer>게임 내용 출처 : "https://play2048.co/"</footer>
      </Col>
      <Col xs={24} md={6} style={{ textAlign: "center" }}>
        <ModeContainer>
          <H2>SELECT MODE</H2>
          {new Array(4).fill(null).map((v, i) => (
            <Popconfirm
              placement='leftTop'
              title={EXIT_TEXT}
              onConfirm={() => {
                message.info("Mode changed.")
                onClickButton(i + 2)
              }}
              okText='Yes'
              cancelText='No'
              key={`Popconfirm__${i}`}
            >
              <VersionButton>{`${i + 2}  ❌  ${i + 2}`}</VersionButton>
            </Popconfirm>
          ))}
        </ModeContainer>
      </Col>
    </Row>
  )
}

export default game2048
