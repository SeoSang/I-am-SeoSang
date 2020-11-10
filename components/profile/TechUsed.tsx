import React from "react"
import styled from "styled-components"
import { FlexDiv, INDEX_TEXT_COLOR, H2, H3_KR } from "../../styles/styled"
import TechIcon from "./TechIcon"

const TECH = {
  Language: [
    {
      icon: "javascript.ico",
      title: "javascript",
      comment: "중급",
    },
    {
      icon: "python.ico",
      title: "python",
      comment: "코딩테스트 주 언어",
    },
    {
      icon: "java.ico",
      title: "java",
      comment: "코딩테스트 보조 언어\n스프링부트 공부중",
    },
    {
      icon: "c.ico",
      title: "C",
      comment: "초급",
    },
    { icon: "ocaml.ico", title: "Ocaml", comment: "함수형 프로그래밍" },
  ],
  Web: [
    {
      icon: "html.ico",
      title: "HTML",
      comment: "중급",
    },
    {
      icon: "css.ico",
      title: "CSS",
      comment: "중급",
    },
    {
      icon: "javascript.ico",
      title: "Javascript",
      comment: "중급",
    },
    {
      icon: "typescript.ico",
      title: "Typescript",
      comment: "중급",
    },
    {
      icon: "webpack.ico",
      title: "Webpack",
      comment: "모듈 번들러",
    },
    {
      icon: "babel.ico",
      title: "Babel",
      comment: "ES6 가능",
    },
  ],
  Frontend: [
    {
      icon: "react.ico",
      title: "React",
      comment: "중급",
    },
    {
      icon: "php.ico",
      title: "PHP",
      comment: "초급",
    },
    {
      icon: "nextjs.ico",
      title: "Next JS",
      comment: "중급",
    },
  ],
  Backend: [
    {
      icon: "nodejs.ico",
      title: "Node JS",
      comment: "중급",
    },
    {
      icon: "express.png",
      title: "Express",
      comment: "초급",
    },
  ],
  Database: [
    {
      icon: "mysql.ico",
      title: "MYSQL",
      comment: "SQL",
    },
    {
      icon: "mongodb.ico",
      title: "Mongo DB",
      comment: "No SQL",
    },
  ],
  VersionControl: [
    {
      icon: "git.ico",
      title: "Git",
      comment: "버전관리",
    },
    {
      icon: "github.ico",
      title: "Github",
      comment: "버전관리",
    },
  ],
  ETC: [
    {
      icon: "excel.ico",
      title: "Excel",
      comment: "컴활1급",
    },
    {
      icon: "notion.ico",
      title: "Express",
      comment: "마크다운 필기, 문서작성",
    },
    {
      icon: "trello.ico",
      title: "Trello",
      comment: "협업",
    },
  ],
}

const TechUsed = () => {
  const IconContainer = styled(FlexDiv)`
    margin-bottom: 30px;
  `

  return (
    <FlexDiv direction='column' width='100%'>
      <H2 color={INDEX_TEXT_COLOR} style={{ marginTop: "20px" }}>
        Language
      </H2>
      <IconContainer>
        {TECH.Language.map((data) => (
          <TechIcon data={data} key={data.icon} />
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Web</H2>
      <IconContainer>
        {TECH.Web.map((data) => (
          <TechIcon data={data} key={data.icon} />
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Frontend</H2>
      <IconContainer>
        {TECH.Frontend.map((data) => (
          <TechIcon data={data} key={data.icon} />
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Backend</H2>
      <IconContainer>
        {TECH.Backend.map((data) => (
          <TechIcon data={data} key={data.icon} />
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Database</H2>
      <IconContainer>
        {TECH.Database.map((data) => (
          <TechIcon data={data} key={data.icon} />
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>Version Control</H2>
      <IconContainer>
        {TECH.VersionControl.map((data) => (
          <TechIcon data={data} key={data.icon} />
        ))}
      </IconContainer>
      <H2 color={INDEX_TEXT_COLOR}>ETC</H2>
      <IconContainer>
        {TECH.ETC.map((data) => (
          <TechIcon data={data} key={data.icon} />
        ))}
      </IconContainer>
    </FlexDiv>
  )
}

export default TechUsed
