import React from "react"
import styled from "styled-components"
import { FlexDiv, INDEX_TEXT_COLOR, H2 } from "../../styles/styled"

const TechUsed = () => {
  const IconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    margin: 20px;
    text-aligm: center;
    -webkit-box-shadow: 0px 2px 12px 0px rgba(125, 125, 125, 1);
    -moz-box-shadow: 0px 2px 12px 0px rgba(125, 125, 125, 1);
    box-shadow: 0px 2px 12px 0px rgba(125, 125, 125, 1);
  `

  const IconContainer = styled(FlexDiv)`
    margin-bottom: 30px;
  `
  return (
    <FlexDiv direction='column' width='100%'>
      <H2 color={INDEX_TEXT_COLOR} style={{ marginTop: "20px" }}>
        Language
      </H2>
      <IconContainer>
        <IconBox>
          <img src='/profile/javascript.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/python.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/java.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/c.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/ocaml.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Web</H2>
      <IconContainer>
        <IconBox>
          <img src='/profile/html.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/css.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/javascript.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/typescript.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Frontend</H2>
      <IconContainer>
        <IconBox>
          <img src='/profile/react.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/php.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Backend</H2>
      <IconContainer>
        <IconBox>
          <img src='/profile/nodejs.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/express.png' style={{ maxWidth: "100%" }}></img>
        </IconBox>
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>DataBase</H2>
      <IconContainer>
        <IconBox>
          <img src='/profile/mysql.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/sequelize.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/mongodb.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Version Control</H2>
      <IconContainer>
        <IconBox>
          <img src='/profile/git.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
        <IconBox>
          <img src='/profile/github.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>ETC</H2>
      <IconContainer>
        <IconBox>
          <img src='/profile/excel.ico' style={{ maxWidth: "100%" }}></img>
        </IconBox>
      </IconContainer>
    </FlexDiv>
  )
}

export default TechUsed
