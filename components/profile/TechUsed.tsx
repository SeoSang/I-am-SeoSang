import React from "react"
import styled from "styled-components"
import { FlexDiv, INDEX_TEXT_COLOR, H2 } from "../../styles/styled"

const TECH = {
  Language: ["javascript.ico", "python.ico", "java.ico", "c.ico", "ocaml.ico"],
  Web: ["html.ico", "css.ico", "javascript.ico", "typescript.ico", "webpack.ico", "babel.ico"],
  Frontend: ["react.ico", "php.ico", "nextjs.ico"],
  Backend: ["nodejs.ico", "express.png"],
  Database: ["mysql.ico", "mongodb.ico"],
  VersionControl: ["git.ico", "github.ico"],
  ETC: ["excel.ico", "notion.ico", "trello.ico"],
}

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
        {TECH.Language.map((icon) => (
          <IconBox>
            <img src={`/profile/${icon}`} style={{ maxWidth: "100%" }}></img>
          </IconBox>
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Web</H2>
      <IconContainer>
        {TECH.Web.map((icon) => (
          <IconBox>
            <img src={`/profile/${icon}`} style={{ maxWidth: "100%" }}></img>
          </IconBox>
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Frontend</H2>
      <IconContainer>
        {TECH.Frontend.map((icon) => (
          <IconBox>
            <img src={`/profile/${icon}`} style={{ maxWidth: "100%" }}></img>
          </IconBox>
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Backend</H2>
      <IconContainer>
        {TECH.Backend.map((icon) => (
          <IconBox>
            <img src={`/profile/${icon}`} style={{ maxWidth: "100%" }}></img>
          </IconBox>
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Database</H2>
      <IconContainer>
        {TECH.Database.map((icon) => (
          <IconBox>
            <img src={`/profile/${icon}`} style={{ maxWidth: "100%" }}></img>
          </IconBox>
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Version Control</H2>
      <IconContainer>
        {TECH.VersionControl.map((icon) => (
          <IconBox>
            <img src={`/profile/${icon}`} style={{ maxWidth: "100%" }}></img>
          </IconBox>
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>ETC</H2>
      <IconContainer>
        {TECH.ETC.map((icon) => (
          <IconBox>
            <img src={`/profile/${icon}`} style={{ maxWidth: "100%" }}></img>
          </IconBox>
        ))}
      </IconContainer>
    </FlexDiv>
  )
}

export default TechUsed
