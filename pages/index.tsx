import React, { useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import { Row, Col } from "antd"
import IndexTexts from "../components/IndexTexts"
import { INDEX_BG_COLOR } from "../styles/styled"

const ContainerDIv = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 1100px;
`

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${INDEX_BG_COLOR};
`

const IconDiv = styled(ContainerDIv)`
  position: relative;
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 770px) {
    width: 100%;
    height: 25vh;
    flex-direction: row;
    justify-content: space-around;
    z-index: 99;
  }
`

const IconBoxDiv = styled(IconDiv)`
  position: relative;
  width: calc(50% - 40px);
  margin: 0 30px 30px 0px;
  padding: 0 25px;
  height: 225px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 4px;
  transition: 0.5s;
  box-shadow: 0 5px 15px rgba(0, 0, 0.07);
  z-index: 99;

  @media (max-width: 770px) {
    width: 20%;
    height: 20vh;
    margin: 0;
    padding: 6px;

    &:hover {
      box-shadow: 0 10px 30px rgba(0, 0, 0.1);
      background-color: #32e0c4;
      transition: background-color 1s;
    }
  }

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0.1);
    background-color: #32e0c4;
    transition: background-color 1s;
  }

  img {
    max-width: 100%;
    filter: grayscale(1);
    transition: 0.5s;
    transform: scale(0.8);
    &:hover {
      filter: grayscale(0);
      transform: scale(1);
    }
  }
`

export default function Home() {
  const [onMouse, setOnMouse] = useState(0)
  const onMouseOver = (id: number) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setOnMouse(id)
  }
  const onMouseOut = (e: React.MouseEvent) => {
    setOnMouse(0)
  }
  return (
    <ContentDiv>
      <Head>
        <link href='/public/index.css' rel='stylesheet'></link>
      </Head>
      <ContainerDIv>
        <IndexTexts onMouse={onMouse}></IndexTexts>
        <IconDiv>
          <IconBoxDiv onMouseOver={onMouseOver(1)} onMouseOut={onMouseOut}>
            <img style={{ maxWidth: "100%" }} src='/question.ico'></img>
          </IconBoxDiv>
          <IconBoxDiv onMouseOver={onMouseOver(2)} onMouseOut={onMouseOut}>
            <img style={{ maxWidth: "100%" }} src='/code.ico'></img>
          </IconBoxDiv>
          <IconBoxDiv onMouseOver={onMouseOver(3)} onMouseOut={onMouseOut}>
            <img style={{ maxWidth: "100%" }} src='/exclamation.ico'></img>
          </IconBoxDiv>
          <IconBoxDiv onMouseOver={onMouseOver(4)} onMouseOut={onMouseOut}>
            <img style={{ maxWidth: "100%" }} src='/plus.ico'></img>
          </IconBoxDiv>
        </IconDiv>
      </ContainerDIv>
    </ContentDiv>
  )
}
