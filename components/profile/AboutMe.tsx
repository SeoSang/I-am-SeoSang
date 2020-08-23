import React from "react"
import { INDEX_LINE_COLOR, H3_KR } from "../../styles/styled"
import { Row, Col } from "antd"

const AboutMe = () => {
  return (
    <Row style={{ margin: "20px 10px" }}>
      <Col xs={24} md={8}>
        <img src='http://lorempixel.com/640/480/animals' style={{ maxWidth: "100%" }}></img>
      </Col>
      <Col xs={24} md={16} style={{ padding: "0 5vw" }}>
        <H3_KR>⭐요약⭐</H3_KR>
        <ul>
          <li> 1997.06.09 ~ 서울 망원동 </li>
          <li> 관심분야 : 웹(코딩)📟, 컴퓨터 주변기기💻, 축구⚽, 게임🎮, 강아지🐶</li>
          <li> 장점 : 한번 시작했으면 끝을 본다 배움을 즐긴다! 적응력이 좋다.</li>
          <li> 단점 : 꼼꼼함의 부족, 기억력이 약해 메모습관을 강제로 주입중😣</li>
          <br></br>
          <li> 2015 고려대학교 컴퓨터학과 입학</li>
          <li> 2016. 03 ~ 2018. 03 공군 암호체계병 병장 만기전역</li>
          <li> 2017~2018 10전투비행단 ICT 프로그래밍 동아리</li>
          <li>
            {" "}
            2019 하나와영 해커톤 최우수상 수상 :{" "}
            <a style={{ color: INDEX_LINE_COLOR }} href='https://github.com/beygee/minki'>
              <strong>Minki</strong>
            </a>
          </li>
          <li>
            {" "}
            2019 ICT멘토링 공모전 본선 입선 :{" "}
            <a
              style={{ color: INDEX_LINE_COLOR }}
              href='https://www.youtube.com/watch?v=DTgJO6ti7s4'
            >
              <strong>Berry IP</strong>
            </a>
          </li>
          <li>
            2019 블로그 개설 :{" "}
            <a style={{ color: INDEX_LINE_COLOR }} href='https://programming119.tistory.com'>
              <strong>개발자 아저씨들 힘을 모아</strong>
            </a>
          </li>
          <li>
            2020 독학의 해, 잡다한 토이 프로젝트들 진행중 /
            <a style={{ color: INDEX_LINE_COLOR }} href='https://github.com/SeoSang'>
              <strong>Github</strong>
            </a>
          </li>
          <li>
            {" "}
            2020 하절기 삼성 SDS 대학생 알고리즘 특강 Professional 과정 수료 /{" "}
            <a style={{ color: INDEX_LINE_COLOR }} href='https://programming119.tistory.com/175'>
              <strong>후기</strong>
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  )
}

export default AboutMe
