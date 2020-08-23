import React from "react"
import { Divider, Row, Col } from "antd"
import { SmileOutlined } from "@ant-design/icons"

const profile = () => {
  return (
    <div style={{ padding: "5vh 5vw" }}>
      <Divider orientation='left'>
        <SmileOutlined /> About me
      </Divider>
      <Row>
        <Col xs={24} md={8}>
          <img src='http://lorempixel.com/640/480/animals' style={{ maxWidth: "100%" }}></img>
        </Col>
        <Col xs={24} md={16} style={{ padding: "0 5vw" }}>
          <ul>
            <li>1997.06.09</li>
            <li>장점 : 한번 시작했으면 끝을 본다 배움을 즐긴다!, 적응력이 좋다.</li>
            <li>- 2015 고려대학교 컴퓨터학과 입학</li>
            <li>- 단점 : 꼼꼼함의 부족, 기억력이 약해 메모습관을 강하게 들이는중</li>
            <li>- 2016. 03 ~ 2018. 03 공군 암호체계병 병장 만기전역</li>
            <li>- 2018 가을, 코딩을 제대로 시작해보기로 다짐</li>
            <li>
              - 2019 블로그 개설 : [개발자 아저씨들 힘을 모아](https://programming119.tistory.com/)
            </li>
            <li>- 2020 하절기 삼성 SDS 대학생 알고리즘 특강 Professional 과정 수료</li>
          </ul>
        </Col>
      </Row>
      <Divider orientation='center'>Tech Used</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  )
}

export default profile
