import React, { FC } from "react"
import styled from "styled-components"
import { GAME_BG_COLOR } from "../styles/styled"
import GameNavigation from "./GameNavigation"
import NotSupported from "./NotSupported"

const MainContainer = styled.div`
  color: #f5f6fa;
  min-height: 100vh;
  background-color: ${GAME_BG_COLOR};
`

const GameLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <MainContainer>
      <GameNavigation />
      <NotSupported />
      {children}
    </MainContainer>
  )
}

export default GameLayout
