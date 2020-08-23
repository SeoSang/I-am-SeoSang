import React from "react"
import { FlexDiv, INDEX_TEXT_COLOR, H2 } from "../../styles/styled"
import styled from "styled-components"

const ImageContainer = styled.div`
  max-height: 200px;
  max-width: 40%;
`

const Photo = () => {
  return (
    <FlexDiv direction='column'>
      <H2 color={INDEX_TEXT_COLOR}>Hackaton</H2>
      <FlexDiv>
        <ImageContainer>
          <img
            src='/profile/2019_hackaton.jpg'
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          ></img>
        </ImageContainer>
        <ImageContainer>
          <img src='/profile/me_hackaton.jpg' style={{ maxWidth: "100%", maxHeight: "100%" }}></img>
        </ImageContainer>
      </FlexDiv>
    </FlexDiv>
  )
}

export default Photo
