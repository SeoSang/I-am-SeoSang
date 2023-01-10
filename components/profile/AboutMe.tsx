import React from "react";
import {H3_KR, INDEX_LINE_COLOR} from "../../styles/styled";
import {Col, Row} from "antd";
import styled from "styled-components";

const SummaryH3 = styled(H3_KR)`
  @media (max-width: 770px) {
    margin-top: 10px;
  }
`;

const AboutMe = () => {
    return (
        <Row style={{margin: "20px 10px"}}>
            <Col xs={24} md={6}>
                <img src="/profile/profile_seo.jpg" style={{maxWidth: "100%"}}></img>
            </Col>
            <Col xs={24} md={12} style={{padding: "0 5vw"}}>
                <SummaryH3>⭐요약⭐</SummaryH3>
                <ul>
                    <li> 1997.06.09 ~ 서울 망원동</li>
                    <li> 고려대학교 컴퓨터학과 졸업</li>
                    <li>
                        {" "}
                        관심분야 : 코딩📟, 컴퓨터 주변기기💻, 운동💪🏼, 축구⚽, 게임🎮, 강아지🐶
                    </li>
                    <li>
                        {" "}
                        장점 : 한번 시작했으면 끝을 본다 | 배움을 즐긴다 | 적응력이 좋다
                    </li>
                    <li>
                        {" "}
                        단점 : 꼼꼼함의 부족 | 기억력이 안좋아 메모습관을 강제로 주입중😣
                    </li>
                    <br></br>
                    <li> 2015 고려대학교 컴퓨터학과 입학</li>
                    <li> 2016.03 ~ 2018.03 공군 암호체계병 병장 만기전역</li>
                    <li> 2017 ~ 2018 제 10전투비행단 ICT 프로그래밍 동아리</li>
                    <li>
                        {" "}
                        2019 하나와영 해커톤 최우수상 수상 :{" "}
                        <a
                            style={{color: INDEX_LINE_COLOR}}
                            href="https://github.com/beygee/minki"
                            target="_blank"
                        >
                            <strong>Minki</strong>
                        </a>
                    </li>
                    <li>
                        {" "}
                        2019 ICT멘토링 공모전 본선 입선 :{" "}
                        <a
                            style={{color: INDEX_LINE_COLOR}}
                            href="https://www.youtube.com/watch?v=DTgJO6ti7s4"
                            target="_blank"
                        >
                            <strong>Berry IP</strong>
                        </a>
                    </li>
                    <li>
                        2019 블로그 개설 :{" "}
                        <a
                            style={{color: INDEX_LINE_COLOR}}
                            href="https://programming119.tistory.com"
                            target="_blank"
                        >
                            <strong>개발자 아저씨들 힘을 모아</strong>
                        </a>
                    </li>
                    <li>
                        2020 독학의 해, 잡다한 토이 프로젝트들 진행중 /
                        <a
                            style={{color: INDEX_LINE_COLOR}}
                            href="https://github.com/SeoSang"
                            target="_blank"
                        >
                            <strong>Github</strong>
                        </a>
                    </li>
                    <li>
                        {" "}
                        2020 하절기 삼성 SDS 대학생 알고리즘 특강 Professional 과정 수료 /{" "}
                        <a
                            style={{color: INDEX_LINE_COLOR}}
                            href="https://programming119.tistory.com/175"
                            target="_blank"
                        >
                            <strong>후기</strong>
                        </a>
                    </li>
                    <li> 2020 삼성 SDS 알고리즘 Professional 등급 취득 /</li>
                </ul>
            </Col>
            <Col xs={24} md={6}>
                <H3_KR>📑 경력 </H3_KR>
                <ul>
                    <li> 2020.12.28 ~ 2020.02.27 카카오 추천팀 인턴 💛</li>
                    <li> 2021.03.15 ~ 2021.05.14 네이버 쇼핑검색서비스 인턴 💚</li>
                    <li> 2021.07.26 ~ 네이버 쇼핑검색서비스 FE 개발자 🍀</li>
                </ul>
                <br></br>
                <H3_KR>🧾 자격증 </H3_KR>
                <ul>
                    <li> 삼성 SDS 알고리즘 Professional 등급</li>
                    <li> 컴활 1급</li>
                    <li> 워드프로세서 1급</li>
                    <li> 정보처리 기능사 1급</li>
                </ul>
                <br></br>
                {/*<H3_KR>😎 기타</H3_KR>*/}
                {/*<ul>*/}
                {/*  <li> 프로그래머스 점수랭킹 83위 </li>*/}
                {/*  <li> 백준 플레티넘 4 (21.04.18 기준)</li>*/}
                {/*</ul>*/}
            </Col>
        </Row>
    );
};

export default AboutMe;
