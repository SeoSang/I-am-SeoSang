import React from "react"
import { FlexDiv, H2 } from "../styles/styled"
import { RollButton, RollButtonProps } from "../styles/buttons"
import { useRouter } from "next/router"
import styled from "styled-components"

const GameNavigationContainer = styled(FlexDiv)`
  position: absolute;
  padding: 20px;
  flex-wrap: nowrap;
  -webkit-box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 11px 12px 2px rgba(0, 0, 0, 0.75);
  background-color: #383b3a;
  left: 3%;
  top: 5%;
  display: inline-flex;
  flex-direction: column;
`

const ROLL_COLORS: RollButtonProps = {
  hoverColor: "#1B1464",
  prevBackColor: "#f1f2f6",
  hoverBackColor: "#C4E538",
}

const buttonStyle = {
  height: "100%",
  width: "100%",
  margin: "0 10%",
  cursor: "pointer",
  backgroundColor: "#383b3a",
}

const GameNavigation = () => {
  const router = useRouter()
  const onClickHref = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <GameNavigationContainer>
      <H2 color='#f5f6fa' style={{ position: "absolute", top: "10px" }}>
        GAMES
      </H2>
      <FlexDiv onClick={onClickHref("lotto")} style={buttonStyle}>
        <RollButton content={"Lotto"} colors={ROLL_COLORS}></RollButton>
      </FlexDiv>
      <FlexDiv onClick={onClickHref("numberbaseball")} style={buttonStyle}>
        <RollButton content={"Number Baseball"} colors={ROLL_COLORS}></RollButton>
      </FlexDiv>
      <FlexDiv onClick={onClickHref("game2048")} style={buttonStyle}>
        <RollButton content={"2048"} colors={ROLL_COLORS}></RollButton>
      </FlexDiv>
    </GameNavigationContainer>
  )
}

export default React.memo(GameNavigation)
