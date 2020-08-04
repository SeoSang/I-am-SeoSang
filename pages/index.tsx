import React, { useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import { Row, Col } from "antd"
import IndexTexts from "../components/IndexTexts"

const ContainerDIv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
`

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
`

const IconDiv = styled(ContainerDIv)`
  position: relative;
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const IconBoxDiv = styled(IconDiv)`
  position: relative;
  width: calc(50% - 40px);
  margin: 0 30px 30px 0px;
  padding: 0 25px;
  heigtht: 140px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 4px;
  transition: 0.5s;
  box-shadow: 0 5px 15px rgba(0, 0, 0.07);

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0.1);
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
  const onMouseOver = (id: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      {/* <Row>
        <Col xs={24} md={12}> */}
      <ContainerDIv>
        <IconDiv>
          <IconBoxDiv onMouseOver={onMouseOver(1)} onMouseOut={onMouseOut}>
            <img style={{ maxWidth: "100%" }} src='http://lorempixel.com/640/480/technics'></img>
          </IconBoxDiv>
          <IconBoxDiv onMouseOver={onMouseOver(2)} onMouseOut={onMouseOut}>
            <img style={{ maxWidth: "100%" }} src='http://lorempixel.com/640/480/sports'></img>
          </IconBoxDiv>
          <IconBoxDiv onMouseOver={onMouseOver(3)} onMouseOut={onMouseOut}>
            <img style={{ maxWidth: "100%" }} src='http://lorempixel.com/640/480/technics'></img>
          </IconBoxDiv>
          <IconBoxDiv onMouseOver={onMouseOver(4)} onMouseOut={onMouseOut}>
            <img style={{ maxWidth: "100%" }} src='http://lorempixel.com/640/480/food'></img>
          </IconBoxDiv>
        </IconDiv>
        <IndexTexts onMouse={onMouse}></IndexTexts>
      </ContainerDIv>
    </ContentDiv>
  )
}