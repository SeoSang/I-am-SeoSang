import React from "react";
import styled from "styled-components";
import { FlexDiv, INDEX_TEXT_COLOR, H2, H3_KR } from "../../styles/styled";
import TechIcon from "./TechIcon";

const TECH = {
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
      comment: "중급",
    },
    {
      icon: "koa.png",
      title: "Koa",
      comment: "중급",
    },
    {
      icon: "django.png",
      title: "Django",
      comment: "중급",
    },
  ],
  Database: [
    {
      icon: "mysql.ico",
      title: "MYSQL",
      comment: "RDB",
    },
    {
      icon: "postgresql.png",
      title: "PostgreSQL",
      comment: "RDB",
    },
    {
      icon: "redis.png",
      title: "Redis",
      comment: "In-Memory",
    },
    {
      icon: "mongodb.ico",
      title: "Mongo DB",
      comment: "No SQL",
    },
    {
      icon: "firebase.jpg",
      title: "Firebase",
      comment: "for small project",
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
    {
      icon: "github-actions.png",
      title: "Github Actions",
      comment: "CI/CD",
    },
    {
      icon: "jenkins.png",
      title: "Jenkins",
      comment: "CI/CD",
    },
  ],
  ETC: [
    {
      icon: "docker.ico",
      title: "Docker",
      comment: "이미지 구성 및 컨테이너 작업",
    },
    {
      icon: "kubernetes.ico",
      title: "Kubernetes",
      comment: "컨테이너 오케스트레이션",
    },
    {
      icon: "notion.ico",
      title: "Express",
      comment: "마크다운 문서 선호",
    },
    {
      icon: "trello.ico",
      title: "Trello",
      comment: "협업",
    },
  ],
};

const TechUsed = () => {
  const IconContainer = styled(FlexDiv)`
    margin-bottom: 30px;
  `;

  return (
    <FlexDiv direction="column" width="100%">
      <H2 color={INDEX_TEXT_COLOR} style={{ marginTop: "20px" }}>
        Language
      </H2>
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
      <H2 color={INDEX_TEXT_COLOR}>Version Control, CI/CD</H2>
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
  );
};

export default TechUsed;
