import React, { FC } from "react"
import styled from "styled-components"
import texts from "./text/IndexTextContent"

const ContentDiv = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
  color: black;
  padding-left: 50px;
`
const ContentBoxDiv = styled.div`
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

const onMouseStyle = {
  transform: "scale(1)",
  opacity: 1,
}

const IndexTexts: FC<{ onMouse: number }> = ({ onMouse }) => {
  return (
    <ContentDiv>
      {texts.map((text, index) => (
        <ContentBoxDiv
          key={index}
          style={index + 1 == onMouse ? onMouseStyle : { transform: "scale(0)" }}
        >
          <TextDiv>
            <h2>{text.title}</h2>
            <p>{text.description}</p>
          </TextDiv>
        </ContentBoxDiv>
      ))}
    </ContentDiv>
  )
}

export default React.memo(IndexTexts)
