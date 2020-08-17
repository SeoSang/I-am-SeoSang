import React from "react"
import { FlexDiv, GAME_BG_COLOR } from "../styles/styled"
import { RollButton, RollButtonProps } from "../styles/buttons"
import { useRouter } from "next/router"

const ROLL_COLORS: RollButtonProps = {
  hoverColor: "#1B1464",
  prevBackColor: "#f1f2f6",
  hoverBackColor: "#C4E538",
}

const buttonStyle = {
  height: "100%",
  margin: "0 10%",
  cursor: "pointer",
  backgroundColor: GAME_BG_COLOR,
}

const GameNavigation = () => {
  const router = useRouter()
  const onClickHref = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <FlexDiv
      style={{
        display: "inline-flex",
        width: "100vw",
        height: "10vh",
        backgroundColor: GAME_BG_COLOR,
      }}
    >
      <FlexDiv onClick={onClickHref("lotto")} style={buttonStyle}>
        <RollButton content={"Lotto"} colors={ROLL_COLORS}></RollButton>
      </FlexDiv>
      <FlexDiv onClick={onClickHref("numberbaseball")} style={buttonStyle}>
        <RollButton content={"Number Baseball"} colors={ROLL_COLORS}></RollButton>
      </FlexDiv>
      <FlexDiv onClick={onClickHref("game2048")} style={buttonStyle}>
        <RollButton content={"2048"} colors={ROLL_COLORS}></RollButton>
      </FlexDiv>
    </FlexDiv>
  )
}

export default React.memo(GameNavigation)
