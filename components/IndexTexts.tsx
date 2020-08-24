import React, { FC } from "react"
import styled from "styled-components"
import { H2_KR, A } from "../styles/styled"

const ContentDiv = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
  color: black;
  padding-left: 50px;
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

  h2 {
    font-size: 3em;
  }
`
const TextDiv = styled.div`
  max-width: 70%;
`

const IndexImage = styled.img`
  max-width: 400px;
  margin-bottom: 20px;
  -webkit-box-shadow: 10px 10px 5px -5px rgba(82, 82, 82, 0.77);
  -moz-box-shadow: 10px 10px 5px -5px rgba(82, 82, 82, 0.77);
  box-shadow: 10px 10px 5px -5px rgba(82, 82, 82, 0.77);
`

const onMouseStyle = {
  transform: "scale(1)",
  opacity: 1,
}

const IndexTexts: FC<{ onMouse: number }> = ({ onMouse }) => {
  return (
    <ContentDiv>
      <ContentBoxDiv style={onMouse == 1 ? onMouseStyle : { transform: "scale(0)" }}>
        <IndexImage src='/me_park.jpg'></IndexImage>
        <TextDiv>
          <H2_KR>제가 누구일까요?</H2_KR>
          <p>
            안녕하세요, 저는 서상혁입니다.
            <br /> 제가 뭐하는 사람이냐구요?
          </p>
        </TextDiv>
      </ContentBoxDiv>
      <ContentBoxDiv style={onMouse == 2 ? onMouseStyle : { transform: "scale(0)" }}>
        <IndexImage src='/me_github.png'></IndexImage>
        <TextDiv>
          <H2_KR>개발자입니다!</H2_KR>
          <p>
            풀스택 웹, 앱에 모두 관심이 있으며 <br /> 개발용 언어는 TypeScript, React 를 주로
            사용하고 있습니다.
            <br />
            저는 개발이 즐겁고 개발자인 것이 자랑스럽습니다👍
          </p>
        </TextDiv>
      </ContentBoxDiv>
      <ContentBoxDiv style={onMouse == 3 ? onMouseStyle : { transform: "scale(0)" }}>
        <TextDiv>
          <H2_KR>진짜는</H2_KR>
          <H2_KR>모두가 알아본다.</H2_KR>
          <p>
            겉만 번지르르하지 않은 진짜 실력을 갖추고 싶습니다. <br />
            현재 고려대학교 4학년에 재학중이며 <br />
            개발 블로그를 운영하고, 여러 토이 프로젝트를 진행중입니다. <br />
            점점 더 발전하는 개발자가 될 것입니다! <br />
            더 많이 발전하고 싶습니다! 😀 <br />
            블로그 : <A href='https://programming119.tistory.com'>개발자 아저씨들 힘을모아</A>
            <br /> 깃허브 : <A href='https://github.com/SeoSang'>Github</A>
          </p>
        </TextDiv>
      </ContentBoxDiv>
      <ContentBoxDiv style={onMouse == 4 ? onMouseStyle : { transform: "scale(0)" }}>
        <TextDiv>
          <H2_KR>자세히</H2_KR>
          <p>
            저에 대해 더 자세히 알고 싶으시다구요? <br />
            우측 상단 메뉴버튼으로 About me 를 확인해주세요!
            <br /> 문의, 혹은 조언을 주실분은 <br />
            ddrrpg@naver.com 로 메일 부탁드립니다😊
          </p>
        </TextDiv>
      </ContentBoxDiv>
    </ContentDiv>
  )
}

export default React.memo(IndexTexts)
