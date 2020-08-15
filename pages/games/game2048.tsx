import React from "react"
import { Row, Col, Button } from "antd"
import { H2 } from "../../styles/styled"
import Game2048Board from "../../components/games/Game2048Board"

const game2048 = () => {
  // 타이틀  점수
  // 텍스트 새 게임
  // 일단 비워두기
  // 게임판
  // 게임방법
  // footer
  return (
    <Row>
      <Col xs={0} md={6}></Col>
      <Col xs={24} md={12}>
        {
          // 타이틀과 점수
        }
        <Row>
          <Col xs={24} md={6}>
            <H2>2048</H2>
          </Col>
          <Col xs={24} md={3}>
            Score
          </Col>
          <Col xs={24} md={3}>
            Best
          </Col>
        </Row>
        {
          // 텍스트 새 게임
        }
        <Row>
          <Col span={18}>2048 Clone Game!</Col>
          <Col span={6}>
            <Button>새 게임</Button>
          </Col>
        </Row>
        <Row>
          <Game2048Board></Game2048Board>
        </Row>
        <Row>게임 방법 주저리 주저리 설명중~</Row>
        <footer>디자인과 게임 내용 출처 : "https://play2048.co/"</footer>
      </Col>
      <Col xs={0} md={6}></Col>
    </Row>
  )
}

export default game2048
