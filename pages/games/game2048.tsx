import React, { useState } from "react"
import { Row, Col, Button } from "antd"
import Game2048Board from "../../components/games/Game2048Board"
import styled from "styled-components"
import { GAME_BG_COLOR } from "../../styles/styled"

const VersionButton = styled(Button)`
  display: block;
  width: 50%;
  margin: 10px auto;
`

const game2048 = () => {
  const [version, setVersion] = useState(4)

  const onClickButton = (ver: number) => (e: React.MouseEvent) => {
    setVersion(ver)
  }
  return (
    <Row style={{ color: "#f5f6fa", minHeight: "100vh", backgroundColor: GAME_BG_COLOR }}>
      <Col xs={0} md={6}>
        <VersionButton onClick={onClickButton(2)}>2</VersionButton>
        <VersionButton onClick={onClickButton(3)}>3</VersionButton>
        <VersionButton onClick={onClickButton(4)}>4</VersionButton>
        <VersionButton onClick={onClickButton(5)}>5</VersionButton>
      </Col>
      <Col xs={24} md={12}>
        <Game2048Board version={version}></Game2048Board>
        <Row>게임 방법 주저리 주저리 설명중~</Row>
        <footer>디자인과 게임 내용 출처 : "https://play2048.co/"</footer>
      </Col>
      <Col xs={0} md={6}></Col>
    </Row>
  )
}

export default game2048
