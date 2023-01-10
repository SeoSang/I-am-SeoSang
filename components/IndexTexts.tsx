import React, {FC} from "react"
import styled from "styled-components"
import {H2_KR} from "../styles/styled"

const ContentDiv = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
  color: black;
  padding-right: 50px;

  @media (max-width: 770px) {
    width: 100%;
    height: 60vh;
    margin: 0;
    padding: 10px;
  }
`
const ContentBoxDiv = styled.div`
  flex-direction: column;
  position: absolute;
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  transition: all 1s;
  opacity: 1;

  img {
    max-width: 100%;
  }
`
const TextDiv = styled.div`
  max-width: 70%;

  h2 {
    @media (max-width: 770px) {
      font-size: 1.2rem;
    }
  }

  p {
    @media (max-width: 770px) {
      font-size: 0.6rem;
    }
  }
`

const IndexImage = styled.img`
  max-height: 300px;
  max-width: 400px;
  margin-bottom: 20px;
  -webkit-box-shadow: 10px 10px 5px -5px rgba(82, 82, 82, 0.77);
  -moz-box-shadow: 10px 10px 5px -5px rgba(82, 82, 82, 0.77);
  box-shadow: 10px 10px 5px -5px rgba(82, 82, 82, 0.77);

  @media (max-width: 770px) {
    max-height: 200px;
    max-width: 200px;
  }
`

const onMouseStyle = {
    transform: "scale(1)",
    opacity: 1,
}

const IndexTexts: FC<{ onMouse: number }> = ({onMouse}) => {
    return (
        <ContentDiv>
            <ContentBoxDiv
                style={onMouse == 1 ? onMouseStyle : {transform: "scale(0)"}}>
                <IndexImage src='/me_2023.jpeg'></IndexImage>
                <TextDiv>
                    <H2_KR>안녕하세요😁</H2_KR>
                    <p>반갑습니다! 저는 서상혁입니다.</p>
                </TextDiv>
            </ContentBoxDiv>
            <ContentBoxDiv
                style={onMouse == 2 ? onMouseStyle : {transform: "scale(0)"}}>
                <IndexImage src='/me_github.png'></IndexImage>
                <TextDiv>
                    <H2_KR>저는 개발자입니다</H2_KR>
                    <p>
                        TypeScript, React 을 기반으로 한 <strong>FrontEnd</strong>를 주로
                        다룹니다.<br/>
                        뿐만 아니라 전반적인 웹 생태계 모두에 관심을 가지고 있습니다 😊
                        <br/>
                    </p>
                </TextDiv>
            </ContentBoxDiv>
            <ContentBoxDiv
                style={onMouse == 3 ? onMouseStyle : {transform: "scale(0)"}}>
                <TextDiv>
                    <IndexImage src='/real.jpg'></IndexImage>
                    <H2_KR>Real Recognize Real</H2_KR>
                    <p>
                        겉만 번지르르하지 않은 진짜 실력을 갖추고 싶습니다. <br/>
                    </p>
                </TextDiv>
            </ContentBoxDiv>
            <ContentBoxDiv
                style={onMouse == 4 ? onMouseStyle : {transform: "scale(0)"}}>
                <TextDiv>
                    <H2_KR>자세히</H2_KR>
                    <p>
                        저에 대해 더 자세히 알고 싶으시다구요? <br/>
                        <strong>우측 상단 메뉴버튼 </strong>으로 <strong>About me </strong>{" "}
                        를 확인해주세요! ↗
                        <br/> 협업 문의, 조언 혹은 피드백은 언제든 환영입니다! <br/>
                        ddrrpg@naver.com 로 메일 부탁드립니다😊
                    </p>
                </TextDiv>
            </ContentBoxDiv>
        </ContentDiv>
    )
}

export default React.memo(IndexTexts)
